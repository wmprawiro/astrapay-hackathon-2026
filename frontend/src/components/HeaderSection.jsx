import React from 'react';
import TopLeftBlur from './TopLeftBlur';

const imgMerchantAstrapay1 = "http://localhost:3845/assets/eff943144ac69ca9d733f3e2d7df8569522b3e29.png";
const imgContainer = "http://localhost:3845/assets/ede5ed7deffd964ea5792eebc9aa66b1175a7c9e.svg";

export default function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="33:1909" data-name="Header Section">
      <div className="content-stretch flex items-center justify-between px-[30px] relative shrink-0 w-full" data-node-id="33:1910" data-name="Container">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[744px]" data-node-id="33:1911" data-name="Content">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[48px] not-italic relative shrink-0 text-[#252525] text-[32px] w-full" data-node-id="33:1912">
            Selangkah Lagi untuk Bisnis yang Lebih Berkembang!
          </p>
          <div className="content-stretch flex flex-col h-[64px] items-start pb-[24px] pt-[16px] relative shrink-0 w-full" data-node-id="33:1913" data-name="Paragraph">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] whitespace-nowrap" data-node-id="33:1914">
              Buat bisnis Anda semakin untung dengan proses transaksi yang mudah, aman, dan efisien.
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="33:1915" data-name="Button Group">
            <div className="bg-[#104bdd] content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[13px] relative rounded-[6px] shrink-0" data-node-id="33:1916" data-name="Button">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="33:1917">{`Daftar Sekarang `}</p>
            </div>
          </div>
        </div>
        <div className="h-[420px] relative shrink-0 w-[745.393px]" data-node-id="33:1918" data-name="merchant-astrapay 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMerchantAstrapay1} />
        </div>
      </div>
      <div className="h-[41px] relative shrink-0 w-full" data-node-id="33:1919" data-name="Container">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
      </div>
    </div>
  );
}
