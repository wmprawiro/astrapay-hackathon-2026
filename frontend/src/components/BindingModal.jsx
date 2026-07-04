import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { QRCodeCanvas } from 'qrcode.react';

const imgItalicText = "http://localhost:3845/assets/354d1ce42bfebc06a7f902f70beb5618c05714a6.png";
const imgInformationBlue1 = "http://localhost:3845/assets/92f7d10e746c39d4f6a4713e40d1544d5db23f21.svg";
const imgVector = "http://localhost:3845/assets/93ae763e8f742cbeb80f73cce3d76ba5cb1b5670.svg";

export default function BindingModal({ onClose }) {
  const navigate = useNavigate();
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('qr', (qrStr) => {
      setQrCode(qrStr);
    });

    socket.on('authenticated', (data) => {
      window.dispatchEvent(new CustomEvent('chatpay_login', { detail: data?.number }));
      if (onClose) onClose();
    });

    return () => socket.disconnect();
  }, [onClose]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/chatpay');
    }
  };

  return (
    <div className="fixed bg-[rgba(37,37,37,0.5)] content-stretch flex flex-col items-center justify-center inset-0 z-50 py-[28px]" data-node-id="39:2625" data-name="Modal">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-[800px]" data-node-id="39:2626" data-name="Modal heading">
        <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 shadow-xl" data-node-id="39:2627" data-name="Content">
          <div className="border-[#f2f2f2] border-b border-solid content-stretch flex items-center justify-between pb-[21px] pt-[20px] px-[20px] relative rounded-tl-[11px] rounded-tr-[11px] shrink-0 w-[800px]" data-node-id="39:2628" data-name="Container">
            <div className="relative shrink-0" data-node-id="39:2629" data-name="Heading 5">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="39:2630">
                  Hubungkan WhatsApp
                </p>
              </div>
            </div>
            <div 
              className="relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" 
              data-node-id="39:2631" 
              data-name="Button"
              onClick={handleClose}
            >
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[9px] py-[3px] relative size-full">
                <div className="h-[33px] opacity-50 relative rounded-[4px] shrink-0 w-[16px]" data-node-id="39:2632" data-name="Italic Text">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                    <img alt="" className="absolute h-[37.12%] left-[11.72%] max-w-none top-[31.44%] w-[76.56%]" src={imgItalicText} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[40px] pt-[24px] px-[24px] relative shrink-0 w-[800px]" data-node-id="39:2633" data-name="Container">
            <div className="border border-[rgba(37,37,37,0.13)] border-solid content-stretch flex gap-[40px] items-center px-[16px] py-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="39:2634" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="39:2635" data-name="Content">
                <div className="content-stretch flex flex-col h-[32px] items-start pb-[8px] relative shrink-0 w-full" data-node-id="39:2636" data-name="Heading 6">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#252525] text-[16px] whitespace-nowrap" data-node-id="39:2637">
                    Cara Menghubungkan Akun
                  </p>
                </div>
                <div className="bg-[#e6f6ff] content-stretch flex items-start justify-between px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="39:2638" data-name="NgbAlert">
                  <div className="flex-[1_0_0] min-w-px relative" data-node-id="39:2639" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                      <div className="relative shrink-0" data-node-id="39:2640" data-name="Image (info icon):margin">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[12px] relative size-full">
                          <div className="relative shrink-0 size-[20px]" data-node-id="39:2641" data-name="information-blue 1">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInformationBlue1} />
                          </div>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-w-px relative self-stretch" data-node-id="39:2645" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-full" data-node-id="39:2646">
                            Pastikan WhatsApp Business Anda aktif
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[16px] relative shrink-0 w-full" data-node-id="39:2647" data-name="Container">
                  <div className="relative shrink-0 w-full" data-node-id="39:2648" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                      <div className="bg-[#e6f6ff] relative rounded-[999px] shrink-0 size-[20px]" data-node-id="39:2649" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[12px] not-italic relative shrink-0 text-[#104bdd] text-[12px] whitespace-nowrap" data-node-id="39:2650">
                            1
                          </p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-w-px relative self-stretch" data-node-id="39:2651" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="39:2652">
                            Buka WhatsApp Business di ponsel Anda
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="39:2653" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                      <div className="bg-[#e6f6ff] relative rounded-[999px] shrink-0 size-[20px]" data-node-id="39:2654" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[12px] not-italic relative shrink-0 text-[#104bdd] text-[12px] whitespace-nowrap" data-node-id="39:2655">
                            2
                          </p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-w-px relative" data-node-id="39:2656" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="39:2657">
                            Ketuk ikon titik tiga di pojok kanan atas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="39:2658" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                      <div className="bg-[#e6f6ff] relative rounded-[999px] shrink-0 size-[20px]" data-node-id="39:2659" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[12px] not-italic relative shrink-0 text-[#104bdd] text-[12px] whitespace-nowrap" data-node-id="39:2660">
                            3
                          </p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-w-px relative" data-node-id="39:2661" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="39:2662">
                            Pilih menu “Perangkat Tertaut”
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="39:2663" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                      <div className="bg-[#e6f6ff] relative rounded-[999px] shrink-0 size-[20px]" data-node-id="39:2664" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[12px] not-italic relative shrink-0 text-[#104bdd] text-[12px] whitespace-nowrap" data-node-id="39:2665">
                            4
                          </p>
                        </div>
                      </div>
                      <div className="flex-[1_0_0] min-w-px relative" data-node-id="39:2666" data-name="Paragraph">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] relative size-full">
                          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a4a4a] text-[16px] w-full" data-node-id="39:2667">
                            Arahkan kamera ke kode QR di sebelah kiri
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[232.406px] relative shrink-0 w-[232.175px] flex items-center justify-center" data-node-id="39:2668" data-name="Vector">
                {qrCode ? (
                  <QRCodeCanvas 
                    value={qrCode} 
                    size={232} 
                    level="H"
                    imageSettings={{
                      src: "/whatsapp-logo.svg",
                      height: 40,
                      width: 40,
                      excavate: true
                    }}
                  />
                ) : (
                  <div className="animate-pulse bg-gray-200 size-full rounded-[12px] flex items-center justify-center text-sm text-gray-500 text-center px-4">
                    Memuat QR Code...
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="border-[#f2f2f2] border-solid border-t content-stretch flex h-[72px] items-center justify-end pb-[12px] pt-[13px] px-[12px] relative rounded-bl-[11px] rounded-br-[11px] shrink-0 w-[800px]" data-node-id="39:2669" data-name="Container">
            <div className="flex-[1_0_0] min-w-px relative" data-node-id="39:2670" data-name="Button Group">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end justify-center p-[4px] relative size-full">
                <div 
                  className="border border-[#104bdd] border-solid content-stretch flex items-center justify-center pb-[10px] pt-[8px] px-[13px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
                  data-node-id="39:2671" 
                  data-name="Button"
                  onClick={handleClose}
                >
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[21px] not-italic relative shrink-0 text-[#104bdd] text-[14px] text-center whitespace-nowrap" data-node-id="39:2672">
                    Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
