import React from 'react';
import { NavLink } from 'react-router-dom';

// Asset constants dari Figma
const imgGroup = "/assets/103308619a1eb6a68fb3a91cb4bb425966a2099c.svg";
const imgChevronDown1 = "/assets/921993f4d7705b7f55459336d0f11d508c3c0f68.svg";
const imgContainer = "/assets/31023dcecb8159da0a309b6e2849c922a29c1a3b.svg";
const imgBoxArrowRight1 = "/assets/c6f61da675caf3242a23c177f812aea56f35d1f8.svg";

export default function TopNavigation({ activeTab = 'beranda' }) {
  return (
    <div className="content-stretch flex items-center py-[5px] px-[30px] relative shrink-0 w-full" data-name="Main Header">
      {/* Logo */}
      <div className="content-stretch flex flex-col items-start py-[5px] relative shrink-0 w-fit">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="h-[30px] relative shrink-0 w-[124px]">
            <img alt="AstraPay" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
          </div>
        </div>
      </div>

      {/* Nav Link */}
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
        <div className="border-[#f2f2f2] border-b border-solid content-stretch flex flex-col items-start pb-px px-[24px] relative shrink-0 w-[137px]">
          <NavLink
            to="/"
            end
            className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 w-full"
          >
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] whitespace-nowrap">
              Beranda
            </p>
          </NavLink>
        </div>
      </div>

      {/* User Info */}
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="bg-white border border-[#e5e5e5] border-solid content-stretch flex gap-[8px] items-center px-[20px] py-[8px] relative rounded-[12px] shrink-0 cursor-pointer">
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] whitespace-nowrap">
            <p className="font-bold relative shrink-0">
              Nakama
            </p>
            <p className="font-normal relative shrink-0">
              prengkytampan@gmail.com
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center pl-[24px] relative shrink-0">
            <div className="relative shrink-0 size-[14px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown1} />
            </div>
          </div>
        </div>
        <div className="h-[16px] relative shrink-0 w-[24px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
        </div>
        <button className="content-stretch flex gap-[4px] items-center justify-center pl-[18px] pr-[8px] py-[4px] relative shrink-0 cursor-pointer">
          <div className="relative shrink-0 size-[14px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBoxArrowRight1} />
          </div>
          <p className="[word-break:break-word] font-bold leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] whitespace-nowrap">
            Keluar
          </p>
        </button>
      </div>
    </div>
  );
}
