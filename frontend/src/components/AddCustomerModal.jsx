import React, { useState } from 'react';

const imgItalicText = "/assets/354d1ce42bfebc06a7f902f70beb5618c05714a6.png"; // Close button icon pattern

export default function AddCustomerModal({ onClose, onSave, onDelete, initialData }) {
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!phone) {
      setError('Nomor HP wajib diisi');
      return;
    }
    
    // Basic email validation if email is provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError('Format email tidak valid');
        return;
      }
    }
    // Remove leading zeros or 62 if user typed it, then ensure it starts with 62
    let cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.startsWith('0')) cleanPhone = '62' + cleanPhone.substring(1);
    else if (!cleanPhone.startsWith('62')) cleanPhone = '62' + cleanPhone;

    onSave({ phone: cleanPhone, name, email });
  };

  return (
    <div className="fixed bg-[rgba(37,37,37,0.5)] content-stretch flex flex-col items-center justify-center inset-0 z-50 py-[28px]" data-node-id="modal-container" data-name="Modal">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-[500px]" data-node-id="modal-heading" data-name="Modal heading">
        <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 shadow-xl w-full" data-node-id="modal-content" data-name="Content">
          
          {/* Header */}
          <div className="border-[#f2f2f2] border-b border-solid content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[20px] relative rounded-tl-[11px] rounded-tr-[11px] shrink-0 w-full" data-name="Container">
            <div className="relative shrink-0">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap">
                  {initialData ? 'Ubah Pelanggan' : 'Tambah Pelanggan Baru'}
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
            
            {/* Phone Number Field */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-[14px] font-semibold text-[#252525]">Nomor Handphone <span className="text-red-500">*</span></label>
              <div className="flex border border-[#e0e0e0] rounded-[8px] overflow-hidden focus-within:border-[#104bdd] transition-colors">
                <div className="bg-[#f8f9fa] border-r border-[#e0e0e0] px-[16px] py-[12px] flex items-center justify-center">
                  <span className="text-[14px] font-semibold text-[#4a4a4a]">+62</span>
                </div>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => {
                    // Only allow numbers
                    const numericValue = e.target.value.replace(/\D/g, '');
                    setPhone(numericValue);
                    setError('');
                  }}
                  placeholder="81234567890"
                  className="flex-1 px-[16px] py-[12px] text-[14px] text-[#252525] outline-none"
                />
              </div>
              {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
            </div>

            {/* Name Field */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-[14px] font-semibold text-[#252525]">Nama Pelanggan <span className="text-gray-400 font-normal">(Opsional)</span></label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama pelanggan"
                className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col w-full gap-2">
              <label className="text-[14px] font-semibold text-[#252525]">Email <span className="text-gray-400 font-normal">(Opsional)</span></label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="email@contoh.com"
                className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors"
              />
            </div>

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
                Simpan Pelanggan
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
