import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateTemplate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = id !== undefined;

  const [templateName, setTemplateName] = useState('');
  const [category, setCategory] = useState('UTILITY');
  const [language, setLanguage] = useState('id');
  
  const [headerType, setHeaderType] = useState('NONE'); // NONE, TEXT, IMAGE
  const [headerText, setHeaderText] = useState('');
  
  const [bodyText, setBodyText] = useState('Halo {{1}}, tagihan Anda sebesar {{2}} sudah tersedia.');
  const [footerText, setFooterText] = useState('');
  
  const [buttons, setButtons] = useState([]); // Array of { type: 'QUICK_REPLY' | 'URL', text: '', url: '' }
  const [variableValues, setVariableValues] = useState({}); // { '1': 'value', '2': 'value' }

  // Load existing template data when editing
  React.useEffect(() => {
    if (isEditing) {
      const stored = JSON.parse(localStorage.getItem('chatpay_templates') || '[]');
      const tmpl = stored[parseInt(id)];
      if (tmpl) {
        setTemplateName(tmpl.templateName || '');
        setCategory(tmpl.category || 'UTILITY');
        setLanguage(tmpl.language || 'id');
        setHeaderType(tmpl.headerType || 'NONE');
        setHeaderText(tmpl.headerText || '');
        setBodyText(tmpl.bodyText || '');
        setFooterText(tmpl.footerText || '');
        setButtons(tmpl.buttons || []);
        setVariableValues(tmpl.variableValues || {});
      }
    }
  }, [id, isEditing]);

  const handleTemplateNameChange = (e) => {
    let val = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '_');
    setTemplateName(val);
  };

  const handleAddVariable = () => {
    const varCount = (bodyText.match(/{{/g) || []).length + 1;
    setBodyText(prev => prev + ` {{${varCount}}}`);
  };

  const getVariablesFromBody = () => {
    const matches = bodyText.match(/{{(\d+)}}/g) || [];
    return [...new Set(matches)].map(m => m.replace(/[{}]/g, ''));
  };

  const updateVariableValue = (varNum, value) => {
    setVariableValues(prev => ({ ...prev, [varNum]: value }));
  };

  const handleAddButton = (type) => {
    if (buttons.length >= 3) return;
    setButtons([...buttons, { type, text: '', url: '' }]);
  };

  const updateButton = (index, field, value) => {
    const newButtons = [...buttons];
    newButtons[index][field] = value;
    setButtons(newButtons);
  };

  const removeButton = (index) => {
    setButtons(buttons.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const templateData = {
      templateName,
      category,
      language,
      headerType,
      headerText,
      bodyText,
      footerText,
      buttons,
      variableValues,
    };

    const stored = JSON.parse(localStorage.getItem('chatpay_templates') || '[]');
    
    if (isEditing) {
      stored[parseInt(id)] = templateData;
    } else {
      stored.push(templateData);
    }
    
    localStorage.setItem('chatpay_templates', JSON.stringify(stored));
    navigate('/chatpay/templates');
  };

  const renderPreviewBody = (text) => {
    const parts = text.split(/({{\d+}})/g);
    return parts.map((part, i) => {
      if (part.match(/^{{\d+}}$/)) {
        const varNum = part.replace(/[{}]/g, '');
        const value = variableValues[varNum];
        if (value) {
          return <span key={i} className="text-[#252525]">{value}</span>;
        }
        return <span key={i} className="bg-blue-100 text-blue-800 px-1 rounded">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="flex flex-col items-start px-8 md:px-[160px] py-[16px] w-full h-full bg-[#f8f9fa]">
      <div className="bg-white border border-[rgba(37,37,37,0.13)] rounded-[12px] p-[17px] w-full flex flex-col h-full overflow-hidden">
        
        {/* Header Container */}
        <div className="pb-4 w-full flex justify-between items-center shrink-0">
          <h2 className="font-semibold text-[#252525] text-[16px]">{isEditing ? 'Edit Template Pesan' : 'Buat Template Pesan Baru'}</h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/chatpay/templates')} 
              className="border border-[#104bdd] text-[#104bdd] font-semibold text-[14px] px-[20px] py-[8px] rounded-[6px] hover:bg-blue-50 transition-colors"
            >
              Batal
            </button>
            <button 
              onClick={handleSave}
              className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[20px] py-[8px] rounded-[6px]"
            >
              <span className="font-semibold text-white text-[14px]">Simpan Template</span>
            </button>
          </div>
        </div>

        {/* Two Columns Container */}
        <div className="flex-1 flex overflow-hidden pt-4 gap-6">
          
          {/* Left Column: Form Builder */}
          <div className="flex-1 min-w-0 flex flex-col overflow-y-auto pr-2 pb-10 gap-6 custom-scrollbar">
            
            {/* Informasi Dasar */}
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col w-full gap-3">
                <label className="text-[14px] font-semibold text-[#252525]">Nama Template</label>
                <input 
                  type="text" 
                  value={templateName}
                  onChange={handleTemplateNameChange}
                  placeholder="cth: tagihan_servis"
                  className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors"
                />
                <p className="text-[12px] text-gray-500">Hanya huruf kecil dan garis bawah (_).</p>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col w-full gap-3 flex-1">
                  <label className="text-[14px] font-semibold text-[#252525]">Kategori</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-[#e0e0e0] rounded-[8px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors bg-white cursor-pointer"
                    style={{ padding: '12px 40px 12px 16px', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '18px' }}
                  >
                    <option value="UTILITY">Utilitas (Tagihan, Resi)</option>
                    <option value="MARKETING">Pemasaran (Promo)</option>
                    <option value="AUTHENTICATION">Otentikasi (OTP)</option>
                  </select>
                </div>
                <div className="flex flex-col w-full gap-3 flex-1">
                  <label className="text-[14px] font-semibold text-[#252525]">Bahasa</label>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full border border-[#e0e0e0] rounded-[8px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors bg-white cursor-pointer"
                    style={{ padding: '12px 40px 12px 16px', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '18px' }}
                  >
                    <option value="id">Bahasa Indonesia</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Konten Pesan */}
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col w-full gap-3">
                <div className="flex justify-between items-center">
                  <label className="text-[14px] font-semibold text-[#252525]">Header <span className="text-gray-400 font-normal">(Opsional)</span></label>
                  <select 
                    value={headerType}
                    onChange={(e) => setHeaderType(e.target.value)}
                    className="w-full border border-[#e0e0e0] rounded-[8px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors bg-white cursor-pointer"
                    style={{ padding: '12px 40px 12px 16px', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '18px' }}
                  >
                    <option value="NONE">Tidak Ada</option>
                    <option value="TEXT">Teks</option>
                    <option value="IMAGE">Media (Gambar)</option>
                  </select>
                </div>
                {headerType === 'TEXT' && (
                  <input 
                    type="text" 
                    value={headerText}
                    onChange={(e) => setHeaderText(e.target.value)}
                    placeholder="Teks header..."
                    maxLength={60}
                    className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors"
                  />
                )}
                {headerType === 'IMAGE' && (
                  <div className="border-2 border-dashed border-[#ccc] rounded-[8px] p-6 text-center bg-gray-50">
                    <p className="text-[13px] text-gray-500">Pilih gambar untuk header template</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col w-full gap-3">
                <label className="text-[14px] font-semibold text-[#252525]">Isi Pesan <span className="text-red-500">*</span></label>
                <textarea 
                  value={bodyText}
                  onChange={(e) => setBodyText(e.target.value)}
                  rows={5}
                  placeholder="Ketik isi pesan..."
                  className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors resize-y"
                />
                <p className="text-[12px] text-gray-500">Gunakan kurung kurawal ganda untuk variabel dinamis (cth: {'{{1}}'}).</p>
                <button 
                  onClick={handleAddVariable}
                  type="button"
                  className="border border-[#104bdd] text-[#104bdd] font-semibold text-[14px] px-[20px] py-[8px] rounded-[6px] hover:bg-blue-50 transition-colors w-fit"
                >
                  + Tambah Variabel
                </button>
              </div>

              {/* Variable Value Inputs */}
              {getVariablesFromBody().length > 0 && (
                <div className="flex flex-col w-full gap-3">
                  <label className="text-[14px] font-semibold text-[#252525]">Nilai Variabel</label>
                  {getVariablesFromBody().map((varNum) => (
                    <div key={varNum} className="flex flex-col gap-1">
                      <label className="text-[13px] text-gray-500">{`{{${varNum}}}`}</label>
                      <input 
                        type="text" 
                        value={variableValues[varNum] || ''}
                        onChange={(e) => updateVariableValue(varNum, e.target.value)}
                        placeholder={`Contoh nilai untuk variabel {{${varNum}}} (teks atau URL)`}
                        className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col w-full gap-3">
                <label className="text-[14px] font-semibold text-[#252525]">Footer <span className="text-gray-400 font-normal">(Opsional)</span></label>
                <input 
                  type="text" 
                  value={footerText}
                  onChange={(e) => setFooterText(e.target.value)}
                  placeholder="Teks kecil di bagian bawah pesan"
                  maxLength={60}
                  className="w-full border border-[#e0e0e0] rounded-[8px] px-[16px] py-[12px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors"
                />
              </div>
            </div>
            
          </div>

          {/* Right Column: WhatsApp Live Preview (Fixed Width) */}
          <div className="shrink-0 bg-[#e5ddd5] rounded-[12px] relative flex flex-col overflow-hidden border border-[rgba(37,37,37,0.13)]" style={{ width: '390px', minWidth: '390px', maxWidth: '390px' }}>
            <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundRepeat: 'repeat', backgroundSize: '400px' }}></div>
            
            {/* Chat Area */}
            <div className="w-full flex-1 flex flex-col items-start relative z-10 overflow-y-auto">
              <div className="bg-white rounded-[8px] rounded-tl-none flex flex-col relative overflow-hidden" style={{ maxWidth: 'calc(100% - 40px)', marginLeft: '20px', marginTop: '20px' }}>
                {/* CSS Tail */}
                <div className="absolute -left-[10px] top-0 w-0 h-0 border-t-[12px] border-t-white border-l-[10px] border-l-transparent"></div>

                <div className="flex flex-col" style={{ padding: '16px' }}>
                  {headerType === 'TEXT' && headerText && (
                    <div className="font-bold text-[15px] text-[#252525] mb-2 leading-snug break-words">
                      {headerText}
                    </div>
                  )}
                  {headerType === 'IMAGE' && (
                    <div className="w-full h-[140px] bg-gray-200 rounded-[6px] flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                  )}
                  
                  <div className="text-[14.2px] text-[#252525] whitespace-pre-wrap leading-[1.35]" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', hyphens: 'auto' }}>
                    {bodyText ? renderPreviewBody(bodyText) : 'Isi pesan akan tampil di sini'}
                  </div>
                  
                  <div className="flex items-end justify-between mt-1 pt-1 gap-2">
                    <div className="text-[12.5px] text-gray-500 break-words flex-1 leading-tight">
                      {footerText}
                    </div>
                    <div className="text-[11px] text-gray-400 shrink-0 relative top-[2px]">
                      12:00
                    </div>
                  </div>
                </div>

                {buttons.length > 0 && (
                  <div className="flex flex-col border-t border-gray-200 bg-white rounded-b-[8px]">
                    {buttons.map((btn, idx) => (
                      <div key={idx} className={`py-[12px] text-center border-gray-200 hover:bg-gray-50 cursor-default transition-colors ${idx !== 0 ? 'border-t' : ''} ${idx === buttons.length - 1 ? 'rounded-b-[8px]' : ''}`}>
                        <span className="text-[#00a884] font-medium text-[14.5px] flex items-center justify-center">
                          {btn.type === 'URL' && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          )}
                          {btn.type === 'QUICK_REPLY' && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                          )}
                          {btn.text || 'Tombol'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
