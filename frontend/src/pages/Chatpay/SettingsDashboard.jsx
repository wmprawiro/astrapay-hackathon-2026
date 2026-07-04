import React from 'react';

const imgImagePengaturanBisnis = "http://localhost:3845/assets/d413de071cb74f551853c9981a9e81dedd604822.png";

export default function SettingsDashboard({ userNumber, onLogout }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[160px] py-[16px] relative size-full" data-node-id="33:2440" data-name="Header Section">
        <div className="bg-white border border-[rgba(37,37,37,0.13)] border-solid content-stretch flex flex-col items-start p-px relative rounded-[12px] shrink-0 w-full" data-node-id="33:2441" data-name="Container">
          <div className="bg-[rgba(37,37,37,0.03)] border-[rgba(37,37,37,0.13)] border-b border-solid relative rounded-t-[12px] shrink-0 w-full" data-node-id="33:2442" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
              <div className="relative shrink-0 w-full" data-node-id="33:2443" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                  <div className="relative shrink-0" data-node-id="33:2444" data-name="Image (Pengaturan Bisnis):margin">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[8px] relative size-full">
                      <div className="relative shrink-0 size-[24px]" data-node-id="33:2445" data-name="Image (Pengaturan Bisnis)">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagePengaturanBisnis} />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-auto" data-node-id="33:2446" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-node-id="33:2447" data-name="Heading 6">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <p className="[word-break:break-word] font-semibold leading-[21px] not-italic relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap" data-node-id="33:2448">
                            Akun Payment Chat
                          </p>
                        </div>
                      </div>
                      <div className="h-[25px] relative shrink-0 w-full" data-node-id="33:2449" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
                          <p className="[word-break:break-word] font-normal leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] whitespace-nowrap" data-node-id="33:2450">
                            Informasi akun yang tertaut pada Payment Chat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-node-id="33:2451" data-name="Container:margin">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
              <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="33:2452" data-name="Container">
                <div className="flex-[1_0_0] min-w-px relative" data-node-id="33:2453" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="relative shrink-0 w-full" data-node-id="33:2454" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <p className="[word-break:break-word] font-medium leading-[21px] not-italic relative shrink-0 text-[#252525] text-[14px] whitespace-nowrap" data-node-id="33:2455">
                          Nomor WhatsApp
                        </p>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full mt-[4px]" data-node-id="33:2456" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                        <div className="relative shrink-0" data-node-id="33:2457" data-name="Paragraph">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <p className="[word-break:break-word] font-normal leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] whitespace-nowrap" data-node-id="33:2458">
                              {userNumber || 'Nomor Tidak Tersedia'}
                            </p>
                          </div>
                        </div>
                        <div className="relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity" data-node-id="33:2459" data-name="Link" onClick={onLogout}>
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <p className="[word-break:break-word] font-bold leading-[18px] not-italic relative shrink-0 text-[#104bdd] text-[12px] whitespace-nowrap" data-node-id="33:2460">
                              Ganti Akun
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
