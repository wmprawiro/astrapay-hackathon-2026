import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../components/DataTable';

export default function SendBill() {
  const navigate = useNavigate();

  // Data sources
  const [templates, setTemplates] = useState([]);
  const [customers, setCustomers] = useState([]);

  // Form states
  const [selectedTemplateId, setSelectedTemplateId] = useState('');
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [variableValues, setVariableValues] = useState({}); // { customerId: { '1': 'val1', '2': 'val2' } }
  const [previewCustomerId, setPreviewCustomerId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/data/templates')
      .then(res => res.json())
      .then(data => setTemplates(data))
      .catch(err => console.error(err));

    fetch('http://localhost:3000/api/data/customers')
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error(err));
  }, []);

  const selectedTemplate = useMemo(() => {
    if (selectedTemplateId === '') return null;
    return templates[parseInt(selectedTemplateId)];
  }, [selectedTemplateId, templates]);

  const templateVariables = useMemo(() => {
    if (!selectedTemplate?.bodyText) return [];
    const matches = selectedTemplate.bodyText.match(/{{(\d+)}}/g) || [];
    return [...new Set(matches)].map(m => m.replace(/[{}]/g, ''));
  }, [selectedTemplate]);

  const handleCustomerToggle = (customerId) => {
    setSelectedCustomerIds(prev => {
      const isSelected = prev.includes(customerId);
      let newSelected;
      if (isSelected) {
        newSelected = prev.filter(id => id !== customerId);
        // clean up preview if deselected
        if (previewCustomerId === customerId) setPreviewCustomerId(null);
      } else {
        newSelected = [...prev, customerId];
      }
      
      // If we just selected the first customer, set it as preview
      if (newSelected.length === 1) {
        setPreviewCustomerId(newSelected[0]);
      }
      return newSelected;
    });
  };

  const handleVariableChange = (customerId, varNum, value) => {
    setVariableValues(prev => ({
      ...prev,
      [customerId]: {
        ...(prev[customerId] || {}),
        [varNum]: value
      }
    }));
  };

  const selectedCustomersData = useMemo(() => {
    return customers.filter(c => selectedCustomerIds.includes(c.id));
  }, [customers, selectedCustomerIds]);

  const mappingColumns = useMemo(() => {
    const cols = [
      {
        key: 'preview',
        label: 'Cek',
        width: '50px',
        align: 'center',
        render: (row) => (
          <input 
            type="radio" 
            name="previewSelect" 
            checked={previewCustomerId === row.id}
            onChange={() => setPreviewCustomerId(row.id)}
            className="cursor-pointer"
          />
        )
      },
      {
        key: 'name',
        label: 'Pelanggan',
        width: '150px'
      }
    ];

    templateVariables.forEach(varNum => {
      cols.push({
        key: `var_${varNum}`,
        label: `Variabel {{${varNum}}}`,
        width: '150px',
        render: (row) => (
          <input
            type="text"
            value={variableValues[row.id]?.[varNum] || ''}
            onChange={(e) => handleVariableChange(row.id, varNum, e.target.value)}
            placeholder={`Nilai {{${varNum}}}`}
            className="w-full border border-[#e0e0e0] rounded-[6px] px-[12px] py-[8px] text-[13px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors"
          />
        )
      });
    });

    return cols;
  }, [templateVariables, variableValues, previewCustomerId]);

  const handleSendBill = async () => {
    if (!selectedTemplate || selectedCustomerIds.length === 0) {
      alert("Pilih template dan minimal 1 pelanggan!");
      return;
    }

    // Pertama, generate messages
    const newTransactions = [];
    for (const c of selectedCustomersData) {
      const vals = variableValues[c.id] || {};
      let msg = selectedTemplate.bodyText;
      Object.keys(vals).forEach(k => {
        msg = msg.replace(`{{${k}}}`, vals[k]);
      });

      // Panggil API Backend untuk generate Link AstraPay Sandbox
      let astrapayLink = 'https://sandbox.astrapay.com/account-binding/error'; // default fallback
      try {
        const linkRes = await fetch('http://localhost:3000/api/astrapay/generate-link', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: c.name,
            phone: c.phone
          })
        });
        const linkData = await linkRes.json();
        if (linkData.success && linkData.redirectUrl) {
          astrapayLink = linkData.redirectUrl;
        }
      } catch (err) {
        console.error("Gagal men-generate AstraPay link untuk", c.name, err);
      }

      // Sisipkan Link Tagihan AstraPay Asli
      msg += `\n\n🔗 Bayar via AstraPay: ${astrapayLink}`;

      newTransactions.push({
        id: Date.now() + Math.random(),
        date: new Date().toISOString(),
        customerName: c.name,
        customerPhone: c.phone,
        templateName: selectedTemplate.templateName,
        messagePreview: msg, // Teks final yang akan dikirim
        status: 'Sending...'
      });
    }

    try {
      // Siapkan payload untuk API WhatsApp
      const payload = {
        messages: newTransactions.map(t => ({
          phone: t.customerPhone,
          text: t.messagePreview
        }))
      };

      const response = await fetch('http://localhost:3000/api/whatsapp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        const finalTransactions = newTransactions.map((t, idx) => {
          const apiRes = data.results.find(r => r.phone === t.customerPhone);
          return {
            ...t,
            status: apiRes?.status === 'success' ? 'Sent' : 'Failed'
          };
        });

        await fetch('http://localhost:3000/api/data/transactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalTransactions)
        });

        alert(`Berhasil mengirim tagihan!`);
        navigate('/chatpay/history');
      } else {
        alert("Gagal mengirim pesan: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan jaringan saat memanggil API backend.");
    }
  };

  // Render WhatsApp preview based on active preview customer
  const renderPreviewBody = () => {
    if (!selectedTemplate) return 'Pilih template terlebih dahulu.';
    
    let text = selectedTemplate.bodyText || '';
    if (previewCustomerId) {
      const vals = variableValues[previewCustomerId] || {};
      const parts = text.split(/({{\d+}})/g);
      return parts.map((part, i) => {
        if (part.match(/^{{\d+}}$/)) {
          const varNum = part.replace(/[{}]/g, '');
          const value = vals[varNum];
          if (value) {
            return <span key={i} className="text-[#252525] font-semibold">{value}</span>;
          }
          return <span key={i} className="bg-blue-100 text-blue-800 px-1 rounded">{part}</span>;
        }
        return part;
      });
    }
    return text;
  };

  return (
    <div className="flex flex-col items-start px-8 md:px-[160px] py-[16px] w-full h-full bg-[#f8f9fa]">
      <div className="bg-white border border-[rgba(37,37,37,0.13)] rounded-[12px] p-[17px] w-full flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <div className="pb-4 w-full flex justify-between items-center shrink-0 border-b border-gray-100 mb-4">
          <h2 className="font-semibold text-[#252525] text-[16px]">Kirim Pesan / Tagihan</h2>
          <button
            onClick={handleSendBill}
            className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[20px] py-[8px] rounded-[6px]"
          >
            <span className="font-semibold text-white text-[14px]">Kirim Tagihan</span>
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden gap-6">
          
          {/* Left Column: Form Setup */}
          <div className="flex-1 flex flex-col overflow-y-auto pr-2 gap-6 custom-scrollbar">
            
            {/* Step 1: Pilih Template */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-semibold text-[#252525]">1. Pilih Template Pesan</label>
              <select
                value={selectedTemplateId}
                onChange={(e) => setSelectedTemplateId(e.target.value)}
                className="w-full border border-[#e0e0e0] rounded-[8px] text-[14px] text-[#252525] outline-none focus:border-[#104bdd] transition-colors bg-white cursor-pointer"
                style={{ padding: '12px 40px 12px 16px', appearance: 'none', WebkitAppearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '18px' }}
              >
                <option value="" disabled>-- Pilih Template --</option>
                {templates.map((tmpl, idx) => (
                  <option key={idx} value={idx}>{tmpl.templateName} ({tmpl.category})</option>
                ))}
              </select>
            </div>

            {/* Step 2: Pilih Pelanggan */}
            <div className="flex flex-col gap-3">
              <label className="text-[14px] font-semibold text-[#252525]">2. Pilih Pelanggan</label>
              <div className="border border-[#e0e0e0] rounded-[8px] max-h-[160px] overflow-y-auto p-2 flex flex-col gap-1 custom-scrollbar">
                {customers.length === 0 ? (
                  <p className="text-[13px] text-gray-500 p-2">Belum ada data pelanggan.</p>
                ) : (
                  customers.map(c => (
                    <label key={c.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-[4px] cursor-pointer transition-colors">
                      <input 
                        type="checkbox" 
                        checked={selectedCustomerIds.includes(c.id)}
                        onChange={() => handleCustomerToggle(c.id)}
                        className="w-4 h-4 rounded border-gray-300 text-[#104bdd] focus:ring-[#104bdd]"
                      />
                      <div className="flex flex-col">
                        <span className="text-[13.5px] text-[#252525] font-medium">{c.name}</span>
                        <span className="text-[12px] text-gray-500">{c.phone}</span>
                      </div>
                    </label>
                  ))
                )}
              </div>
            </div>

            {/* Step 3: Isi Variabel */}
            {selectedTemplate && selectedCustomersData.length > 0 && (
              <div className="flex flex-col gap-3 flex-1">
                <label className="text-[14px] font-semibold text-[#252525]">3. Isi Nilai Variabel</label>
                <p className="text-[12px] text-gray-500">Pilih radio button di kolom "Cek" untuk melihat pratinjau pesan orang tersebut di sebelah kanan.</p>
                <div className="border border-[#e0e0e0] rounded-[8px] overflow-hidden">
                  <DataTable 
                    columns={mappingColumns} 
                    data={selectedCustomersData} 
                    itemsPerPage={5} 
                    emptyState={<div className="p-4 text-[13px] text-gray-500">Pilih pelanggan untuk mulai mengisi variabel.</div>}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column: WhatsApp Live Preview */}
          <div className="shrink-0 bg-[#e5ddd5] rounded-[12px] relative flex flex-col overflow-hidden border border-[rgba(37,37,37,0.13)]" style={{ width: '390px', minWidth: '390px', maxWidth: '390px' }}>
            <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundRepeat: 'repeat', backgroundSize: '400px' }}></div>

            {/* Chat Area */}
            <div className="w-full flex-1 flex flex-col items-start relative z-10 overflow-y-auto">
              <div className="bg-white rounded-[8px] rounded-tl-none flex flex-col relative overflow-hidden" style={{ maxWidth: 'calc(100% - 40px)', marginLeft: '20px', marginTop: '20px' }}>
                {/* CSS Tail */}
                <div className="absolute -left-[10px] top-0 w-0 h-0 border-t-[12px] border-t-white border-l-[10px] border-l-transparent"></div>

                <div className="flex flex-col" style={{ padding: '16px' }}>
                  {selectedTemplate?.headerType === 'TEXT' && selectedTemplate?.headerText && (
                    <div className="font-bold text-[15px] text-[#252525] mb-2 leading-snug break-words">
                      {selectedTemplate.headerText}
                    </div>
                  )}
                  {selectedTemplate?.headerType === 'IMAGE' && (
                    <div className="w-full h-[140px] bg-gray-200 rounded-[6px] flex items-center justify-center mb-2">
                      <span className="text-gray-400 text-[12px]">Gambar Header</span>
                    </div>
                  )}

                  <div className="text-[14.2px] text-[#252525] whitespace-pre-wrap leading-[1.35]" style={{ overflowWrap: 'break-word', wordBreak: 'break-word', hyphens: 'auto' }}>
                    {renderPreviewBody()}
                  </div>

                  <div className="flex items-end justify-between mt-1 pt-1 gap-2">
                    <div className="text-[12.5px] text-gray-500 break-words flex-1 leading-tight">
                      {selectedTemplate?.footerText || ''}
                    </div>
                    <div className="text-[11px] text-gray-400 shrink-0 relative top-[2px]">
                      12:00
                    </div>
                  </div>
                </div>

                {selectedTemplate?.buttons && selectedTemplate.buttons.length > 0 && (
                  <div className="flex flex-col border-t border-gray-200 bg-white rounded-b-[8px]">
                    {selectedTemplate.buttons.map((btn, idx) => (
                      <div key={idx} className={`py-[12px] text-center border-gray-200 hover:bg-gray-50 cursor-default transition-colors ${idx !== 0 ? 'border-t' : ''} ${idx === selectedTemplate.buttons.length - 1 ? 'rounded-b-[8px]' : ''}`}>
                        <span className="text-[#00a884] font-medium text-[14.5px] flex items-center justify-center">
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
