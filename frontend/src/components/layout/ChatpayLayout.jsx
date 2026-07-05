import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import TopNavigation from './TopNavigation';

export default function ChatpayLayout() {
  const getNavClasses = (isActive) => {
    return {
      container: `border-b-3 border-solid content-stretch flex flex-col items-start px-[16px] relative shrink-0 ${isActive ? 'border-[#104bdd]' : 'border-transparent'}`,
      text: `[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${isActive ? 'text-[#104bdd]' : 'text-[#87888d]'}`
    };
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <TopNavigation />
      
      <div className="bg-white content-stretch flex flex-col items-start px-[160px] py-[16px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[36px] not-italic relative shrink-0 text-[#252525] text-[24px] whitespace-nowrap">
            Payment Chat AstraPay
          </p>
        </div>
        <div className="bg-white content-stretch flex h-[86px] items-start py-[16px] relative shrink-0 w-full">
          <div className="border-[#f2f2f2] border-b border-solid content-stretch flex flex-[1_0_0] items-center min-w-px pb-px relative">
            
            <NavLink end to="/chatpay">
              {({ isActive }) => (
                <div className={getNavClasses(isActive).container} style={{ width: '138px' }}>
                  <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full">
                    <p className={getNavClasses(isActive).text}>Dashboard</p>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink to="/chatpay/invoice">
              {({ isActive }) => (
                <div className={getNavClasses(isActive).container} style={{ width: '157px' }}>
                  <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full">
                    <p className={getNavClasses(isActive).text}>Kirim Tagihan</p>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink to="/chatpay/history">
              {({ isActive }) => (
                <div className={getNavClasses(isActive).container} style={{ width: '187px' }}>
                  <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full">
                    <p className={getNavClasses(isActive).text}>Riwayat Transaksi</p>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink to="/chatpay/customers">
              {({ isActive }) => (
                <div className={getNavClasses(isActive).container} style={{ width: '150px' }}>
                  <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full">
                    <p className={getNavClasses(isActive).text}>Pelanggan</p>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink to="/chatpay/templates">
              {({ isActive }) => (
                <div className={getNavClasses(isActive).container} style={{ width: '173px' }}>
                  <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full">
                    <p className={getNavClasses(isActive).text}>Template Pesan</p>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink to="/chatpay/quick-reply">
              {({ isActive }) => (
                <div className={getNavClasses(isActive).container} style={{ width: '160px' }}>
                  <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full">
                    <p className={getNavClasses(isActive).text}>Quick Reply</p>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink to="/chatpay/settings">
              {({ isActive }) => (
                <div className={getNavClasses(isActive).container} style={{ width: '143px' }}>
                  <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full">
                    <p className={getNavClasses(isActive).text}>Pengaturan</p>
                  </div>
                </div>
              )}
            </NavLink>

          </div>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-start relative shrink-0 w-full">
        <Outlet />
      </main>
    </div>
  );
}
