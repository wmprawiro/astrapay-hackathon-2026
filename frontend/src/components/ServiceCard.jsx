import React from 'react';

// Asset constants dari Figma - card illustration vectors
const imgVector = "http://localhost:3845/assets/8bc1f4b683bde6102446d4afcc756e244839c96e.svg";
const imgVector1 = "http://localhost:3845/assets/b4ef1d9020689c5b652aaee276e4af8d6ae75a1b.svg";
const imgVector2 = "http://localhost:3845/assets/52fde205d935133250488da34fc6a8e86e9a5162.svg";
const imgVector3 = "http://localhost:3845/assets/0f33c38cb876bdef84e28279d54e8c28c572e494.svg";
const imgVector4 = "http://localhost:3845/assets/6b3bfb05efc8ad20434727282726374fcc98ba2f.png";
const imgVector5 = "http://localhost:3845/assets/942c06c5a5e07a267eae39d854b32307ac5d0e5b.png";

/**
 * ServiceCard - Reusable component for service cards on Dashboard
 * Props:
 *   - title: string (e.g. "Payment Chat AstraPay")
 *   - description: string
 *   - buttonText: string (default: "Aktifkan Sekarang")
 *   - onClick: function
 */
export default function ServiceCard({ title, description, buttonText = "Aktifkan Sekarang", onClick }) {
  return (
    <div className="border border-[rgba(37,37,37,0.1)] border-solid content-stretch flex flex-col items-end justify-end pb-[22px] pt-[16px] px-[16px] relative rounded-[12px] shrink-0 w-[445px]">
      {/* Card Illustration */}
      <div className="h-[200px] overflow-clip relative shrink-0 w-full">
        <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]">
          <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]">
            <div className="absolute inset-[0_3.87%_-7.08%_3.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[381px_214.153px]" style={{ maskImage: `url("${imgVector}")` }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
            </div>
            <div className="absolute inset-[14.42%_36.45%_-3.74%_14.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-42.925px_-28.837px] mask-size-[381px_214.153px]" style={{ maskImage: `url("${imgVector}")` }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
            </div>
            <div className="absolute inset-[3.37%_32.55%_-7.01%_10.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.354px_-6.736px] mask-size-[381px_214.153px]" style={{ maskImage: `url("${imgVector}")` }}>
              <div className="absolute inset-[-0.24%_-0.21%]">
                <img alt="" className="block max-w-none size-full" src={imgVector3} />
              </div>
            </div>
            <div className="absolute contents inset-[20.16%_20.33%_9.05%_55.93%]">
              <div className="absolute inset-[20.16%_20.33%_9.05%_55.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-215.009px_-40.327px] mask-size-[381px_214.153px]" style={{ maskImage: `url("${imgVector}")` }}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="141.563" src={imgVector4} width="98.035" />
              </div>
            </div>
            <div className="absolute contents inset-[19.61%_52.7%_-7.08%_20.26%]">
              <div className="absolute inset-[19.61%_52.7%_-7.08%_20.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-67.678px_-39.215px] mask-size-[381px_214.153px]" style={{ maskImage: `url("${imgVector}")` }}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="174.938" src={imgVector5} width="111.682" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="content-stretch flex flex-col h-[113px] items-start py-[16px] relative shrink-0 w-full">
        <div className="relative shrink-0 w-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
            <p className="[word-break:break-word] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap">
              {title}
            </p>
          </div>
        </div>
        <div className="h-[54px] relative shrink-0 w-[413px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
            <p className="[word-break:break-word] font-normal leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] w-[392px]">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Card Button */}
      <button 
        className="bg-[#104bdd] content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer"
        onClick={onClick}
      >
        <p className="[word-break:break-word] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          {buttonText}
        </p>
      </button>
    </div>
  );
}
