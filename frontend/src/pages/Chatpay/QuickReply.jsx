import React, { useState, useEffect } from 'react';
import EmptyStateCard from '../../components/EmptyStateCard';
import AddQuickReplyModal from '../../components/AddQuickReplyModal';
import DataTable from '../../components/DataTable';

// Pre-filled data according to our discussion
const DEFAULT_QUICK_REPLIES = [
  { shortcut: '/carabayar', message: 'Untuk membayar tagihan, silakan klik link AstraPay yang kami kirimkan sebelumnya, lalu konfirmasi pembayaran Anda di dalam aplikasi AstraPay ya kak. Terima kasih!', keywords: ['cara bayar', 'pembayaran'] },
  { shortcut: '/non-manual', message: 'Mohon maaf, saat ini kami hanya menerima pembayaran melalui link AstraPay yang kami kirimkan untuk memudahkan pengecekan otomatis sistem kami.', keywords: ['transfer', 'manual', 'rekber'] },
  { shortcut: '/jam', message: 'Halo! Jam operasional kami adalah Senin-Jumat (08.00 - 17.00) dan Sabtu (09.00 - 15.00). Pesan di luar jam tersebut akan kami balas secepatnya.', keywords: ['jam buka', 'operasional'] },
  { shortcut: '/lokasi', message: 'Alamat lengkap bengkel/toko kami ada di [Alamat Lengkap]. Anda juga bisa mengikuti panduan Google Maps berikut: [Link Maps].', keywords: ['lokasi', 'alamat'] },
];

export default function QuickReply() {
  const [quickReplies, setQuickReplies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReply, setEditingReply] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetchQuickReplies();
  }, []);

  const fetchQuickReplies = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data/quick-replies');
      const data = await response.json();
      if (data && data.length > 0) {
        setQuickReplies(data);
      } else {
        setQuickReplies(DEFAULT_QUICK_REPLIES);
        saveToBackend(DEFAULT_QUICK_REPLIES);
      }
    } catch (error) {
      console.error("Failed to fetch quick replies", error);
    }
  };

  const saveToBackend = async (data) => {
    try {
      await fetch('http://localhost:3000/api/data/quick-replies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quick_replies: data })
      });
    } catch (error) {
      console.error("Failed to save quick replies", error);
    }
  };

  const handleSave = (newReply) => {
    let updated = [...quickReplies];
    if (editingIndex !== null) {
      updated[editingIndex] = newReply;
    } else {
      updated.push(newReply);
    }
    setQuickReplies(updated);
    saveToBackend(updated);
    closeModal();
  };

  const handleDelete = (indexToDelete) => {
    const updated = quickReplies.filter((_, i) => i !== indexToDelete);
    setQuickReplies(updated);
    saveToBackend(updated);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingReply(null);
    setEditingIndex(null);
  };

  const openModal = (reply = null, index = null) => {
    setEditingReply(reply);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const columns = [
    {
      key: 'shortcut',
      label: 'Shortcut',
      width: '25%',
      render: (row) => (
        <span className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-[#252525] font-mono text-[13px] border border-gray-200">
          {row.shortcut}
        </span>
      )
    },
    {
      key: 'message',
      label: 'Isi Pesan',
      width: '40%',
      render: (row) => (
        <p className="text-[13px] font-normal text-[#4a4a4a] truncate max-w-xs" title={row.message}>
          {row.message.length > 80 ? row.message.substring(0, 80) + '...' : row.message}
        </p>
      )
    },
    {
      key: 'keywords',
      label: 'Kata Kunci',
      width: '20%',
      render: (row) => (
        <div className="flex flex-wrap gap-1">
          {row.keywords && row.keywords.length > 0 ? (
            row.keywords.map((kw, i) => (
              <span key={i} className="text-[12px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                {kw}
              </span>
            ))
          ) : (
            <span className="text-[12px] text-gray-400 italic">-</span>
          )}
        </div>
      )
    },
    {
      key: 'action',
      label: 'Aksi',
      align: 'right',
      render: (row, index) => (
        <div className="flex items-center justify-end gap-3">
          <button 
            onClick={() => openModal(row, index)}
            className="text-[#104bdd] font-semibold text-[14px] hover:underline"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDelete(index)}
            className="text-[#dc2626] font-semibold text-[14px] hover:underline"
          >
            Hapus
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-start px-8 md:px-[160px] py-[16px] w-full h-full">
      <div className="bg-white border border-[rgba(37,37,37,0.13)] rounded-[12px] p-[17px] w-full flex flex-col">
        {/* Header */}
        <div className="pb-4 w-full flex justify-between items-center">
          <h2 className="font-semibold text-[#252525] text-[16px]">Quick Reply</h2>
          {quickReplies.length > 0 && (
            <button 
              onClick={() => openModal()}
              className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[14px] py-[6px] rounded-[6px]"
            >
              <span className="font-semibold text-white text-[13px]">Buat Quick Reply Baru</span>
            </button>
          )}
        </div>

        {quickReplies.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-12 w-full">
            <div className="w-12 h-12 text-gray-400 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#252525] text-[14px]">Belum ada Quick Reply</h3>
            <p className="font-normal text-[#444] text-[14px] mt-2 mb-6 text-center max-w-md">
              Tambahkan balasan cepat untuk menjawab pertanyaan yang sering ditanyakan pelanggan dengan mudah.
            </p>
            <button
              onClick={() => openModal()}
              className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[14px] py-[8px] rounded-[6px]"
            >
              <span className="font-semibold text-white text-[14px]">Buat Quick Reply Baru</span>
            </button>
          </div>
        ) : (
          <DataTable columns={columns} data={quickReplies} itemsPerPage={10} />
        )}
      </div>

      {isModalOpen && (
        <AddQuickReplyModal 
          onClose={closeModal}
          onSave={handleSave}
          initialData={editingReply}
        />
      )}
    </div>
  );
}
