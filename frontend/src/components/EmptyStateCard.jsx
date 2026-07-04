import React from 'react';

export default function EmptyStateCard({
  headerTitle,
  iconSvg,
  emptyTitle,
  emptyDescription,
  buttonText,
  onAction
}) {
  return (
    <div className="flex flex-col items-start px-8 md:px-[160px] py-[16px] w-full h-full">
      <div className="bg-white border border-[rgba(37,37,37,0.13)] rounded-[12px] p-[17px] w-full flex flex-col">
        {/* Header */}
        <div className="pb-4 w-full">
          <h2 className="font-semibold text-[#252525] text-[16px]">
            {headerTitle}
          </h2>
        </div>

        {/* Empty State Content */}
        <div className="flex flex-col items-center justify-center py-12 w-full">
          <div className="w-12 h-12 text-gray-400 mb-4 flex items-center justify-center">
            {iconSvg || (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            )}
          </div>
          
          <h3 className="font-semibold text-[#252525] text-[14px]">
            {emptyTitle}
          </h3>
          
          <p className="font-normal text-[#444] text-[14px] mt-2 mb-6 text-center max-w-md">
            {emptyDescription}
          </p>

          <button
            onClick={onAction}
            className="bg-[#104bdd] hover:bg-[#0e3eae] transition-colors flex items-center justify-center px-[14px] py-[8px] rounded-[6px]"
          >
            <span className="font-semibold text-white text-[14px]">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
