import React, { useState } from 'react';
import BindingModal from '../../components/BindingModal';
import DashboardStatCard from '../../components/DashboardStatCard';

const imgWhatsapp1 = "http://localhost:3845/assets/32c22dfd2d30efc1107f429315114489752d1c67.svg";
const imgMerchantAstrapay1 = "http://localhost:3845/assets/eff943144ac69ca9d733f3e2d7df8569522b3e29.png";

export default function ChatpayDashboard({ isLoggedIn }) {
  const [isBindingModalOpen, setIsBindingModalOpen] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <div className="bg-white content-stretch flex flex-col items-start px-8 md:px-[160px] py-[16px] relative shrink-0 w-full min-h-screen">
          <h2 className="font-bold text-[24px] text-[#252525] mb-6">Ringkasan Chatpay</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <DashboardStatCard 
              title="Total Pelanggan" 
              value="0" 
              colorHex="#104bdd"
              iconSvg={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              }
            />
            <DashboardStatCard 
              title="Tagihan Aktif" 
              value="Rp 0" 
              colorHex="#eab308"
              iconSvg={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              }
            />
            <DashboardStatCard 
              title="Total Transaksi" 
              value="0" 
              colorHex="#22c55e"
              iconSvg={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
        </div>
      ) : (
        <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="33:2077" data-name="Main Container">
          <div className="content-stretch flex flex-col items-start px-[160px] relative shrink-0 w-full" data-node-id="33:2078" data-name="Header Section">
            <div className="content-stretch flex items-center justify-between px-[30px] relative shrink-0 w-full" data-node-id="33:2079" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[744px]" data-node-id="33:2080" data-name="Content">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[48px] not-italic relative shrink-0 text-[#252525] text-[32px] w-full" data-node-id="33:2081">
                  Ubah Setiap Obrolan Menjadi Penjualan!
                </p>
                <div className="content-stretch flex flex-col items-start pb-[24px] pt-[16px] relative shrink-0 w-full" data-node-id="33:2082" data-name="Paragraph">
                  <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full whitespace-pre-wrap" data-node-id="33:2083">
                    <p className="leading-[24px] mb-0">{`Bagikan tautan pembayaran langsung ke pelanggan Anda melalui pesan instan `}</p>
                    <p className="leading-[24px]">dan terima dana tanpa ribet.</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="33:2084" data-name="Button Group">
                  <div 
                    className="bg-[#104bdd] content-stretch flex gap-[10px] items-center justify-center pb-[10px] pt-[8px] px-[13px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-opacity-90 transition-opacity" 
                    data-node-id="33:2085" 
                    data-name="Button"
                    onClick={() => setIsBindingModalOpen(true)}
                  >
                    <div className="relative shrink-0 size-[16px]" data-node-id="33:2086" data-name="whatsapp 1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWhatsapp1} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="33:2088">
                      Hubungkan WhatsApp
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[420px] relative shrink-0 w-[745.393px]" data-node-id="33:2089" data-name="merchant-astrapay 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMerchantAstrapay1} />
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoggedIn && isBindingModalOpen && <BindingModal onClose={() => setIsBindingModalOpen(false)} />}
    </>
  );
}
