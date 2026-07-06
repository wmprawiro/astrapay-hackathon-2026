import React from 'react';
import HeaderSection from '../../components/HeaderSection';
import CardSection from '../../components/CardSection';
import TopLeftBlur from '../../components/TopLeftBlur';

const imgMerchantAstrapay1 = "/assets/eff943144ac69ca9d733f3e2d7df8569522b3e29.png";
const imgVector4 = "/assets/6b3bfb05efc8ad20434727282726374fcc98ba2f.png";
const imgVector5 = "/assets/942c06c5a5e07a267eae39d854b32307ac5d0e5b.png";
const imgGroup = "/assets/103308619a1eb6a68fb3a91cb4bb425966a2099c.svg";
const imgChevronDown1 = "/assets/921993f4d7705b7f55459336d0f11d508c3c0f68.svg";
const imgContainer = "/assets/31023dcecb8159da0a309b6e2849c922a29c1a3b.svg";
const imgContainer1 = "/assets/ede5ed7deffd964ea5792eebc9aa66b1175a7c9e.svg";
const imgInformationBlue1 = "/assets/56d08776671874febb5c20c151e174128c15f3ec.svg";
const imgVector = "/assets/8bc1f4b683bde6102446d4afcc756e244839c96e.svg";
const imgVector1 = "/assets/b4ef1d9020689c5b652aaee276e4af8d6ae75a1b.svg";
const imgVector2 = "/assets/52fde205d935133250488da34fc6a8e86e9a5162.svg";
const imgVector3 = "/assets/0f33c38cb876bdef84e28279d54e8c28c572e494.svg";
const imgBoxArrowRight1 = "/assets/c6f61da675caf3242a23c177f812aea56f35d1f8.svg";

export default function Dashboard() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[60px] relative size-full" data-node-id="33:1884" data-name="Dashboard">
      <TopLeftBlur />
      <div className="content-stretch flex items-center py-[5px] px-[30px] relative shrink-0 w-full" data-node-id="33:1885" data-name="Main Header">
        <div className="content-stretch flex flex-col items-start py-[5px] relative shrink-0 w-fit" data-node-id="33:1886" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="33:1887" data-name="astrapay-logo">
            <div className="h-[30px] relative shrink-0 w-[124px]" data-node-id="33:1888" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="33:1892" data-name="Nav Link">
          <div className="border-[#f2f2f2] border-b border-solid content-stretch flex flex-col items-start pb-px px-[24px] relative shrink-0 w-[137px]" data-node-id="33:1893" data-name="Container">
            <div className="border-[#104bdd] border-b-3 border-solid content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full" data-node-id="33:1894" data-name="Text Container">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[#104bdd] text-[14px] whitespace-nowrap" data-node-id="33:1895">
                Beranda
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-node-id="33:1896" data-name="User Info">
          <div className="bg-white border border-[#e5e5e5] border-solid content-stretch flex gap-[8px] items-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-node-id="33:1897" data-name="User Info">
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] whitespace-nowrap" data-node-id="33:1898" data-name="User Details">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0" data-node-id="33:1899">
                Nakama
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0" data-node-id="33:1900">
                prengkytampan@gmail.com
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center pl-[24px] relative shrink-0" data-node-id="33:1901" data-name="Dropdown Icon">
              <div className="relative shrink-0 size-[14px]" data-node-id="33:1902" data-name="chevron-down 1">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown1} />
              </div>
            </div>
          </div>
          <div className="h-[16px] relative shrink-0 w-[24px]" data-node-id="33:1904" data-name="Container">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center pl-[18px] pr-[8px] py-[4px] relative shrink-0 cursor-pointer" data-node-id="33:1899" data-name="Button">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBoxArrowRight1} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] whitespace-nowrap" data-node-id="33:1900">
              Keluar
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="33:1908" data-name="Main Container">
        <HeaderSection />
        <CardSection />
      </div>
    </div>
  );
}
