import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORY_LABELS = {
  UTILITY: 'Utilitas',
  MARKETING: 'Pemasaran',
  AUTHENTICATION: 'Otentikasi',
};

const LANGUAGE_LABELS = {
  id: 'Bahasa Indonesia',
  en: 'English',
};

export default function TemplateList() {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('chatpay_templates') || '[]');
    setTemplates(stored);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updated = templates.filter((_, i) => i !== indexToDelete);
    setTemplates(updated);
    localStorage.setItem('chatpay_templates', JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col items-start px-8 md:px-[160px] py-[16px] w-full h-full">
      <div className="bg-white border border-[rgba(37,37,37,0.13)] rounded-[12px] p-[17px] w-full flex flex-col">
        {/* Header */}
        <div className="pb-4 w-full flex justify-between items-center">
          <h2 className="font-semibold text-[#252525] text-[16px]">Template Pesan</h2>
          {templates.length > 0 && (
            <button 
              onClick={() => navigate('/chatpay/templates/create')}
              className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[14px] py-[6px] rounded-[6px]"
            >
              <span className="font-semibold text-white text-[13px]">Buat Template Baru</span>
            </button>
          )}
        </div>

        {templates.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-12 w-full">
            <div className="w-12 h-12 text-gray-400 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#252525] text-[14px]">Anda belum memiliki Template</h3>
            <p className="font-normal text-[#444] text-[14px] mt-2 mb-6 text-center max-w-md">
              Buat template pesan otomatis untuk mempermudah membalas chat atau mengirim tagihan.
            </p>
            <button
              onClick={() => navigate('/chatpay/templates/create')}
              className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[14px] py-[8px] rounded-[6px]"
            >
              <span className="font-semibold text-white text-[14px]">Buat Template Baru</span>
            </button>
          </div>
        ) : (
          /* Table State */
          <div className="w-full mt-2 border-t border-[rgba(37,37,37,0.13)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(37,37,37,0.13)]">
                  <th className="py-[12px] px-[8px] text-[14px] font-semibold text-[#252525]">Nama Template</th>
                  <th className="py-[12px] px-[8px] text-[14px] font-semibold text-[#252525]">Status</th>
                  <th className="py-[12px] px-[8px] text-[14px] font-semibold text-[#252525]">Kategori</th>
                  <th className="py-[12px] px-[8px] text-[14px] font-semibold text-[#252525]">Bahasa</th>
                  <th className="py-[12px] px-[8px] text-[14px] font-semibold text-[#252525]">Variabel</th>
                  <th className="py-[12px] px-[8px] text-[14px] font-semibold text-[#252525] text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((tmpl, idx) => {
                  const varCount = (tmpl.bodyText || '').match(/{{\d+}}/g)?.length || 0;
                  return (
                    <tr key={idx} className="border-b border-[#f2f2f2] hover:bg-gray-50 transition-colors">
                      <td className="py-[12px] px-[8px]">
                        <span className="text-[14px] font-normal text-[#252525]">{tmpl.templateName || '-'}</span>
                      </td>
                      <td className="py-[12px] px-[8px]">
                        {(tmpl.status || 'active') === 'active' ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-[12px] font-semibold bg-green-100 text-green-700">Aktif</span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-[12px] font-semibold bg-gray-100 text-gray-500">Inactive</span>
                        )}
                      </td>
                      <td className="py-[12px] px-[8px]">
                        <span className="text-[14px] font-normal text-[#4a4a4a]">{CATEGORY_LABELS[tmpl.category] || tmpl.category}</span>
                      </td>
                      <td className="py-[12px] px-[8px]">
                        <span className="text-[14px] font-normal text-[#4a4a4a]">{LANGUAGE_LABELS[tmpl.language] || tmpl.language}</span>
                      </td>
                      <td className="py-[12px] px-[8px]">
                        <span className="text-[14px] font-normal text-[#4a4a4a]">{varCount}</span>
                      </td>
                      <td className="py-[12px] px-[8px] text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button 
                            onClick={() => navigate(`/chatpay/templates/edit/${idx}`)}
                            className="text-[#104bdd] font-semibold text-[14px] hover:underline"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(idx)}
                            className="text-[#dc2626] font-semibold text-[14px] hover:underline"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
