import React, { useState } from 'react';

const imgItalicText = "/assets/354d1ce42bfebc06a7f902f70beb5618c05714a6.png"; // Close button icon pattern

export default function AddQuickReplyModal({ onClose, onSave, initialData }) {
  const [shortcut, setShortcut] = useState(initialData?.shortcut || '');
  const [message, setMessage] = useState(initialData?.message || '');
  const [keywords, setKeywords] = useState(initialData?.keywords ? initialData.keywords.join(', ') : '');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!shortcut) {
      setError('Pintasan (Shortcut) wajib diisi');
      return;
    }
    if (!message) {
      setError('Pesan balasan wajib diisi');
      return;
    }
    // Validate keywords
    const parsedKeywords = keywords.split(',').map(k => k.trim()).filter(k => k);
    if (parsedKeywords.length > 3) {
      setError('Maksimal hanya diperbolehkan 3 kata kunci.');
      return;
    }

    // Auto format shortcut (no spaces, lowercase)
    const cleanShortcut = '/' + shortcut.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase();

    onSave({ 
      shortcut: cleanShortcut, 
      message, 
      keywords: parsedKeywords 
    });
  };

  return (
    <div className="fixed bg-[rgba(37,37,37,0.5)] content-stretch flex flex-col items-center justify-center inset-0 z-50 py-[28px]">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-[600px]">
        <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 shadow-xl w-full">
          
          {/* Header */}
          <div className="border-[#f2f2f2] border-b border-solid content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[20px] relative rounded-tl-[11px] rounded-tr-[11px] shrink-0 w-full">
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap">
                  {initialData ? 'Ubah Quick Reply' : 'Tambah Quick Reply Baru'}
                </p>
              </div>
            </div>
            <div 
              className="relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" 
              onClick={onClose}
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-[3px] relative size-full">
                <div className="h-[33px] opacity-50 relative rounded-[4px] shrink-0 w-[16px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img alt="Close" className="absolute h-[37.12%] left-[11.72%] max-w-none top-[31.44%] w-[76.56%]" src={imgItalicText} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Body */}
          <div className="content-stretch flex flex-col items-start pb-[40px] pt-[24px] px-[24px] relative shrink-0 w-full gap-[20px]">
            
            {/* Shortcut Field */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-[14px] font-semibold text-[#252525]">Pintasan (Shortcut) <span className="text-red-500">*</span></label>
              <div className="flex border border-[#e0e0e0] rounded-[8px] overflow-hidden focus-within:border-[#104bdd] transition-colors">
                <div className="bg-[#f8f9fa] border-r border-[#e0e0e0] px-[16px] py-[12px] flex items-center justify-center">
                  <span className="text-[14px] font-semibold text-[#4a4a4a]">/</span>
                </div>
                <input 
                  type="text" 
                  value={shortcut.replace(/^\//, '')}
                  onChange={(e) => {
                    setShortcut(e.target.value.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase());
                    setError('');
                  }}
                  placeholder="contoh: jam_buka"
                  maxLength={25}
                  className="flex-1 px-[16px] py-[12px] text-[14px] text-[#252525] outline-none"
                />
              </div>
              <p className="text-[12px] text-gray-500">Maks. 25 karakter, tanpa spasi.</p>
            </div>

            {/* Message Field */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-[14px] font-semibold text-[#252525]">Pesan Balasan <span className="text-red-500">*</span></label>
              <textarea 
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setError('');
                }}
                rows={5}
                placeholder="Ketik isi pesan yang akan dikirim otomatis..."
                className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors resize-y"
              />
            </div>

            {/* Keywords Field */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-[14px] font-semibold text-[#252525]">Kata Kunci (Opsional)</label>
              <input 
                type="text" 
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="misal: lokasi, alamat, peta"
                className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors"
              />
              <p className="text-[12px] text-gray-500">Pisahkan dengan koma. Maks. 3 kata kunci untuk mempermudah pencarian.</p>
            </div>

            {error && <p className="text-red-500 text-[13px] font-semibold">{error}</p>}

          </div>
          
          {/* Footer */}
          <div className="border-[#f2f2f2] border-solid border-t content-stretch flex h-[72px] items-center justify-end pb-[12px] pt-[13px] px-[20px] relative rounded-bl-[11px] rounded-br-[11px] shrink-0 w-full gap-3">
            <div className="flex gap-3">
              <button 
                onClick={onClose}
                className="border border-[#104bdd] text-[#104bdd] font-semibold text-[14px] px-[20px] py-[8px] rounded-[6px] hover:bg-blue-50 transition-colors"
              >
                Batal
              </button>
              <button 
                onClick={handleSave}
                className="bg-[#104bdd] border border-[#104bdd] text-white font-semibold text-[14px] px-[20px] py-[8px] rounded-[6px] hover:bg-blue-700 transition-colors"
              >
                Simpan Quick Reply
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
