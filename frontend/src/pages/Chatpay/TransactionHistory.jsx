import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyStateCard from '../../components/EmptyStateCard';
import DataTable from '../../components/DataTable';

export default function TransactionHistory() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

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
    </div>
  );
}
