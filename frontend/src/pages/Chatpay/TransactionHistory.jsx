import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyStateCard from '../../components/EmptyStateCard';
import DataTable from '../../components/DataTable';

export default function TransactionHistory() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/data/transactions')
      .then(res => res.json())
      .then(data => {
        // Sort descending by date
        data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setTransactions(data);
      })
      .catch(err => console.error(err));
  }, []);

  const columns = [
    {
      key: 'date',
      label: 'Tanggal',
      render: (row) => {
        const d = new Date(row.date);
        return <span className="text-[14px] font-normal text-[#252525]">{d.toLocaleDateString('id-ID')} {d.toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'})}</span>;
      }
    },
    {
      key: 'customerName',
      label: 'Pelanggan',
      render: (row) => <span className="text-[14px] font-normal text-[#252525]">{row.customerName || '-'}</span>
    },
    {
      key: 'customerPhone',
      label: 'Nomor WA',
      render: (row) => <span className="text-[14px] font-normal text-[#4a4a4a]">{row.customerPhone}</span>
    },
    {
      key: 'templateName',
      label: 'Template',
      render: (row) => <span className="text-[14px] font-normal text-[#4a4a4a]">{row.templateName || '-'}</span>
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => {
        if (row.status === 'Sent') {
          return <span className="inline-flex items-center px-2 py-1 rounded-full text-[12px] font-semibold bg-green-100 text-green-700">Terkirim</span>;
        } else if (row.status === 'Failed') {
          return <span className="inline-flex items-center px-2 py-1 rounded-full text-[12px] font-semibold bg-red-100 text-red-700">Gagal</span>;
        } else {
          return <span className="inline-flex items-center px-2 py-1 rounded-full text-[12px] font-semibold bg-gray-100 text-gray-500">{row.status}</span>;
        }
      }
    },
    {
      key: 'action',
      label: 'Aksi',
      render: (row) => (
        <button
          onClick={() => setSelectedTransaction(row)}
          className="text-[#104bdd] font-semibold text-[13px] hover:underline"
        >
          Detail
        </button>
      )
    }
  ];

  return (
    <div className="flex flex-col items-start px-8 md:px-[160px] py-[16px] w-full h-full">
      <div className="bg-white border border-[rgba(37,37,37,0.13)] rounded-[12px] p-[17px] w-full flex flex-col">
        {/* Header */}
        <div className="pb-4 w-full flex justify-between items-center">
          <h2 className="font-semibold text-[#252525] text-[16px]">Riwayat Transaksi</h2>
          {transactions.length > 0 && (
            <button 
              onClick={() => navigate('/chatpay/invoice')}
              className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[14px] py-[6px] rounded-[6px]"
            >
              <span className="font-semibold text-white text-[13px]">Buat Tagihan Baru</span>
            </button>
          )}
        </div>

        {transactions.length === 0 ? (
          <EmptyStateCard 
            headerTitle=""
            emptyTitle="Belum Ada Riwayat Transaksi"
            emptyDescription="Saat ini Anda belum memiliki riwayat transaksi apa pun. Kirim tagihan untuk memulai."
            buttonText="Buat Tagihan Baru"
            iconSvg={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            onAction={() => navigate('/chatpay/invoice')}
          />
        ) : (
          <DataTable columns={columns} data={transactions} itemsPerPage={10} />
        )}
      </div>

      {/* Modal Detail Transaksi */}
      {selectedTransaction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-[450px] flex flex-col overflow-hidden shadow-xl">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-semibold text-[#252525] text-[16px]">Detail Pesan Terkirim</h3>
              <button 
                onClick={() => setSelectedTransaction(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[13.5px]">
                <div>
                  <span className="text-gray-500 block mb-1">Tanggal</span>
                  <span className="font-medium text-[#252525]">
                    {new Date(selectedTransaction.date).toLocaleDateString('id-ID')} {new Date(selectedTransaction.date).toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Status</span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[12px] font-semibold ${selectedTransaction.status === 'Sent' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {selectedTransaction.status === 'Sent' ? 'Terkirim' : selectedTransaction.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Pelanggan</span>
                  <span className="font-medium text-[#252525]">{selectedTransaction.customerName || '-'}</span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Nomor WA</span>
                  <span className="font-medium text-[#252525]">{selectedTransaction.customerPhone}</span>
                </div>
              </div>

              <div className="mt-2 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-[13.5px]">Isi Pesan:</span>
                  <button 
                    onClick={() => handleCopy(selectedTransaction.messagePreview || '')}
                    className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-1 rounded-[4px] border border-[#e0e0e0] hover:bg-gray-50 transition-colors"
                  >
                    {copied ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#00a884" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-[#00a884]">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                        <span className="text-gray-600">Salin Teks</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-[#f8f9fa] border border-[#e0e0e0] rounded-[8px] p-4 text-[14px] text-[#252525] whitespace-pre-wrap leading-relaxed relative">
                  {selectedTransaction.messagePreview || 'Tidak ada konten pesan.'}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedTransaction(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#252525] text-[13.5px] font-medium rounded-[6px] transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
