import React from 'react';

export default function DashboardStatCard({ title, value, iconSvg, colorHex = '#104bdd' }) {
  return (
    <div className="bg-white border border-[rgba(37,37,37,0.13)] rounded-[12px] p-6 flex flex-col items-start w-full transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between w-full mb-4">
        <h3 className="font-semibold text-[#444] text-[14px]">
          {title}
        </h3>
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center opacity-90"
          style={{ backgroundColor: `${colorHex}15`, color: colorHex }}
        >
          {iconSvg}
        </div>
      </div>
      <div className="flex items-end gap-2">
        <span className="font-bold text-[#252525] text-[28px] leading-none">
          {value}
        </span>
      </div>
    </div>
  );
}
