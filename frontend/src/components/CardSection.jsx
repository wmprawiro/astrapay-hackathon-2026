import React from 'react';
import { useNavigate } from 'react-router-dom';

const imgVector4 = "/assets/6b3bfb05efc8ad20434727282726374fcc98ba2f.png";
const imgVector5 = "/assets/942c06c5a5e07a267eae39d854b32307ac5d0e5b.png";
const imgInformationBlue1 = "/assets/56d08776671874febb5c20c151e174128c15f3ec.svg";
const imgVector = "/assets/8bc1f4b683bde6102446d4afcc756e244839c96e.svg";
const imgVector1 = "/assets/b4ef1d9020689c5b652aaee276e4af8d6ae75a1b.svg";
const imgVector2 = "/assets/52fde205d935133250488da34fc6a8e86e9a5162.svg";
const imgVector3 = "/assets/0f33c38cb876bdef84e28279d54e8c28c572e494.svg";

export default function CardSection() {
  const navigate = useNavigate();

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative size-full" data-node-id="33:1921" data-name="Card Section">
      <div className="content-stretch flex flex-col items-start pt-[40px] px-[30px] relative shrink-0 w-full" data-node-id="33:1922" data-name="Container">
        <div className="content-stretch flex gap-[21px] items-center relative shrink-0 w-full" data-node-id="33:1923" data-name="Header">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[36px] not-italic relative shrink-0 text-[#252525] text-[24px] whitespace-nowrap" data-node-id="33:1924">{`Aksi Cepat `}</p>
          <div className="border border-[#104bdd] border-solid content-stretch flex gap-[4px] items-center justify-center px-[13px] py-[9px] relative rounded-[6px] shrink-0" data-node-id="33:1925" data-name="Button">
            <div className="relative shrink-0 size-[18px]" data-node-id="33:1926" data-name="information-blue 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInformationBlue1} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[#104bdd] text-[12px] text-center whitespace-nowrap" data-node-id="33:1930">
              Panduan AstraPay Bisnis
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch grid grid-cols-4 gap-[20px] px-[30px] relative shrink-0 w-full" data-node-id="33:1931" data-name="Section Cards">
        <div className="border border-[rgba(37,37,37,0.1)] border-solid content-stretch flex flex-col items-end justify-end pb-[22px] pt-[16px] px-[16px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow" data-node-id="33:1932" data-name="Card" onClick={() => navigate('/chatpay')}>
          <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-node-id="33:1933" data-name="qris_card 1">
            <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:1934" data-name="Clip path group">
              <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:1937" data-name="Group">
                <div className="absolute inset-[0_3.87%_-7.08%_3.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[381px_214.153px]" data-node-id="33:1938" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[14.42%_36.45%_-3.74%_14.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-42.925px_-28.837px] mask-size-[381px_214.153px]" data-node-id="33:1939" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[3.37%_32.55%_-7.01%_10.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.354px_-6.736px] mask-size-[381px_214.153px]" data-node-id="33:1940" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <div className="absolute inset-[-0.24%_-0.21%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector3} />
                  </div>
                </div>
                <div className="absolute contents inset-[20.16%_20.33%_9.05%_55.93%]" data-node-id="33:1941" data-name="Group">
                  <div className="absolute inset-[20.16%_20.33%_9.05%_55.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-215.009px_-40.327px] mask-size-[381px_214.153px]" data-node-id="33:1942" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="141.563" src={imgVector4} width="98.035" />
                  </div>
                </div>
                <div className="absolute contents inset-[19.61%_52.7%_-7.08%_20.26%]" data-node-id="33:1943" data-name="Group">
                  <div className="absolute inset-[19.61%_52.7%_-7.08%_20.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-67.678px_-39.215px] mask-size-[381px_214.153px]" data-node-id="33:1944" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="174.938" src={imgVector5} width="111.682" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[113px] items-start py-[16px] relative shrink-0 w-full" data-node-id="33:1945" data-name="Container">
            <div className="relative shrink-0 w-full" data-node-id="33:1946" data-name="Heading 5">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="33:1947">{`Payment Chat AstraPay `}</p>
              </div>
            </div>
            <div className="h-[54px] relative shrink-0 w-[413px]" data-node-id="33:1948" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] w-[392px]" data-node-id="33:1949">
                  Terima pembayaran dengan mudah langsung melalui aplikasi pesan instan.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#104bdd] content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="33:1950" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="33:1951">{`Aktifkan Sekarang `}</p>
          </div>
        </div>
        <div className="border border-[rgba(37,37,37,0.1)] border-solid content-stretch flex flex-col items-end justify-end pb-[22px] pt-[16px] px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="33:1952" data-name="Card">
          <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-node-id="33:1953" data-name="qris_card 1">
            <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:1954" data-name="Clip path group">
              <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:1957" data-name="Group">
                <div className="absolute inset-[0_3.87%_-7.08%_3.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[381px_214.153px]" data-node-id="33:1958" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[14.42%_36.45%_-3.74%_14.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-42.925px_-28.837px] mask-size-[381px_214.153px]" data-node-id="33:1959" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[3.37%_32.55%_-7.01%_10.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.354px_-6.736px] mask-size-[381px_214.153px]" data-node-id="33:1960" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <div className="absolute inset-[-0.24%_-0.21%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector3} />
                  </div>
                </div>
                <div className="absolute contents inset-[20.16%_20.33%_9.05%_55.93%]" data-node-id="33:1961" data-name="Group">
                  <div className="absolute inset-[20.16%_20.33%_9.05%_55.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-215.009px_-40.327px] mask-size-[381px_214.153px]" data-node-id="33:1962" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="141.563" src={imgVector4} width="98.035" />
                  </div>
                </div>
                <div className="absolute contents inset-[19.61%_52.7%_-7.08%_20.26%]" data-node-id="33:1963" data-name="Group">
                  <div className="absolute inset-[19.61%_52.7%_-7.08%_20.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-67.678px_-39.215px] mask-size-[381px_214.153px]" data-node-id="33:1964" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="174.938" src={imgVector5} width="111.682" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[113px] items-start py-[16px] relative shrink-0 w-full" data-node-id="33:1965" data-name="Container">
            <div className="relative shrink-0 w-full" data-node-id="33:1966" data-name="Heading 5">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="33:1967">
                  QRIS AstraPay
                </p>
              </div>
            </div>
            <div className="h-[54px] relative shrink-0 w-[413px]" data-node-id="33:1968" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] whitespace-nowrap" data-node-id="33:1969">
                  Terima pembayaran QRIS dari semua e-wallet dan bank.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#104bdd] content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="33:1970" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="33:1971">{`Aktifkan Sekarang `}</p>
          </div>
        </div>
        <div className="border border-[rgba(37,37,37,0.1)] border-solid content-stretch flex flex-col items-end justify-end pb-[22px] pt-[16px] px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="33:1972" data-name="Card">
          <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-node-id="33:1973" data-name="qris_card 1">
            <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:1974" data-name="Clip path group">
              <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:1977" data-name="Group">
                <div className="absolute inset-[0_3.87%_-7.08%_3.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[381px_214.153px]" data-node-id="33:1978" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[14.42%_36.45%_-3.74%_14.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-42.925px_-28.837px] mask-size-[381px_214.153px]" data-node-id="33:1979" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[3.37%_32.55%_-7.01%_10.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.354px_-6.736px] mask-size-[381px_214.153px]" data-node-id="33:1980" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <div className="absolute inset-[-0.24%_-0.21%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector3} />
                  </div>
                </div>
                <div className="absolute contents inset-[20.16%_20.33%_9.05%_55.93%]" data-node-id="33:1981" data-name="Group">
                  <div className="absolute inset-[20.16%_20.33%_9.05%_55.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-215.009px_-40.327px] mask-size-[381px_214.153px]" data-node-id="33:1982" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="141.563" src={imgVector4} width="98.035" />
                  </div>
                </div>
                <div className="absolute contents inset-[19.61%_52.7%_-7.08%_20.26%]" data-node-id="33:1983" data-name="Group">
                  <div className="absolute inset-[19.61%_52.7%_-7.08%_20.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-67.678px_-39.215px] mask-size-[381px_214.153px]" data-node-id="33:1984" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="174.938" src={imgVector5} width="111.682" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[113px] items-start py-[16px] relative shrink-0 w-full" data-node-id="33:1985" data-name="Container">
            <div className="relative shrink-0 w-full" data-node-id="33:1986" data-name="Heading 5">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="33:1987">{`Mitra AstraPay `}</p>
              </div>
            </div>
            <div className="h-[54px] relative shrink-0 w-[413px]" data-node-id="33:1988" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] w-[392px]" data-node-id="33:1989">{`Dapatkan komisi dari penjualan layanan dan produk digital AstraPay! `}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#104bdd] content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="33:1990" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="33:1991">{`Aktifkan Sekarang `}</p>
          </div>
        </div>
        <div className="border border-[rgba(37,37,37,0.1)] border-solid content-stretch flex flex-col items-end justify-end pb-[22px] pt-[16px] px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="33:1992" data-name="Card">
          <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-node-id="33:1993" data-name="qris_card 1">
            <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:1994" data-name="Clip path group">
              <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:1997" data-name="Group">
                <div className="absolute inset-[0_3.87%_-7.08%_3.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[381px_214.153px]" data-node-id="33:1998" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[14.42%_36.45%_-3.74%_14.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-42.925px_-28.837px] mask-size-[381px_214.153px]" data-node-id="33:1999" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[3.37%_32.55%_-7.01%_10.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.354px_-6.736px] mask-size-[381px_214.153px]" data-node-id="33:2000" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <div className="absolute inset-[-0.24%_-0.21%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector3} />
                  </div>
                </div>
                <div className="absolute contents inset-[20.16%_20.33%_9.05%_55.93%]" data-node-id="33:2001" data-name="Group">
                  <div className="absolute inset-[20.16%_20.33%_9.05%_55.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-215.009px_-40.327px] mask-size-[381px_214.153px]" data-node-id="33:2002" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="141.563" src={imgVector4} width="98.035" />
                  </div>
                </div>
                <div className="absolute contents inset-[19.61%_52.7%_-7.08%_20.26%]" data-node-id="33:2003" data-name="Group">
                  <div className="absolute inset-[19.61%_52.7%_-7.08%_20.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-67.678px_-39.215px] mask-size-[381px_214.153px]" data-node-id="33:2004" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="174.938" src={imgVector5} width="111.682" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[113px] items-start py-[16px] relative shrink-0 w-full" data-node-id="33:2005" data-name="Container">
            <div className="relative shrink-0 w-full" data-node-id="33:2006" data-name="Heading 5">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="33:2007">{`Disbursement AstraPay `}</p>
              </div>
            </div>
            <div className="h-[54px] relative shrink-0 w-[413px]" data-node-id="33:2008" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] w-[392px]" data-node-id="33:2009">{`Transfer dana sekaligus dengan Disbursement AstraPay. `}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#104bdd] content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="33:2010" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="33:2011">{`Aktifkan Sekarang `}</p>
          </div>
        </div>

        <div className="border border-[rgba(37,37,37,0.1)] border-solid content-stretch flex flex-col items-end justify-end pb-[22px] pt-[16px] px-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="33:2013" data-name="Card">
          <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-node-id="33:2014" data-name="qris_card 1">
            <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:2015" data-name="Clip path group">
              <div className="absolute contents inset-[0_3.87%_-7.08%_3.87%]" data-node-id="33:2018" data-name="Group">
                <div className="absolute inset-[0_3.87%_-7.08%_3.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[381px_214.153px]" data-node-id="33:2019" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                </div>
                <div className="absolute inset-[14.42%_36.45%_-3.74%_14.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-42.925px_-28.837px] mask-size-[381px_214.153px]" data-node-id="33:2020" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                </div>
                <div className="absolute inset-[3.37%_32.55%_-7.01%_10.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26.354px_-6.736px] mask-size-[381px_214.153px]" data-node-id="33:2021" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                  <div className="absolute inset-[-0.24%_-0.21%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector3} />
                  </div>
                </div>
                <div className="absolute contents inset-[20.16%_20.33%_9.05%_55.93%]" data-node-id="33:2022" data-name="Group">
                  <div className="absolute inset-[20.16%_20.33%_9.05%_55.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-215.009px_-40.327px] mask-size-[381px_214.153px]" data-node-id="33:2023" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="141.563" src={imgVector4} width="98.035" />
                  </div>
                </div>
                <div className="absolute contents inset-[19.61%_52.7%_-7.08%_20.26%]" data-node-id="33:2024" data-name="Group">
                  <div className="absolute inset-[19.61%_52.7%_-7.08%_20.26%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-67.678px_-39.215px] mask-size-[381px_214.153px]" data-node-id="33:2025" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" height="174.938" src={imgVector5} width="111.682" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-[113px] items-start py-[16px] relative shrink-0 w-full" data-node-id="33:2026" data-name="Container">
            <div className="relative shrink-0 w-full" data-node-id="33:2027" data-name="Heading 5">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[27px] not-italic relative shrink-0 text-[#252525] text-[18px] whitespace-nowrap" data-node-id="33:2028">{`Payment Channel AstraPay `}</p>
              </div>
            </div>
            <div className="h-[54px] relative shrink-0 w-[413px]" data-node-id="33:2029" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[21px] not-italic relative shrink-0 text-[#444] text-[14px] w-[392px]" data-node-id="33:2030">
                  Terima pembayaran dengan metode pembayaran AstraPay.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#104bdd] content-stretch flex items-center justify-center px-[14px] py-[8px] relative rounded-[6px] shrink-0" data-node-id="33:2031" data-name="Button">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="33:2032">{`Aktifkan Sekarang `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
