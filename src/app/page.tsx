"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-Noto_Sans_Thai)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">        
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <Image
          className="w-20 h-20 sm:w-32 sm:h-32"
          src="/geo_reserve.svg"
          alt="GeoReserved logo"
          width={128}
          height={128}
          priority
          />
          <div className="flex flex-col items-start">
            <h1 className="text-2xl sm:text-4xl font-medium text-center sm:text-left">
              GeoReserved
            </h1>
            <h1 className="text-md sm:text-lg font-medium text-center sm:text-left">
              ระบบจองห้องคอมเอกภูมิศาสตร์ อักษรศาสตร์ จุฬาฯ
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-start justify-center flex-col">
            <label className="text-base sm:text-lg font-medium w-24" htmlFor="search">
              รหัสนิสิต
            </label>
            <input
            type="text"
            placeholder="ป้อนรหัสนิสิต..."
            className="w-full sm:w-[400px] h-10 sm:h-12 px-4 sm:px-5 border border-solid border-neutral-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-colors"
            aria-label="Search for a room"
            />          
          </div>
          <div className="flex gap-2 items-start justify-center flex-col">
            <label className="text-base sm:text-lg font-medium w-24" htmlFor="search">
              รหัสผ่าน
            </label>
            <input
            type="password"
            placeholder="ป้อนรหัสผ่าน..."
            className="w-full sm:w-[400px] h-10 sm:h-12 px-4 sm:px-5 border border-solid border-neutral-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-neutral-800 transition-colors"
            aria-label="Search for a room"
          />          
          </div>
        </div>
        

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="transition-colors flex items-center justify-center gap-2 hover:bg-[#486308] bg-[#69910C] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-[140px] hover:cursor-pointer text-white"
            onClick={() => window.location.href = "#err"}
            rel="noopener noreferrer"
          >
            เข้าสู่ระบบ
          </button>
          <a
            className="transition-colors flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-[140px] hover:cursor-pointer"
            href="https://www.arts.chula.ac.th/geography/"
            target="_blank"
            rel="noopener noreferrer"
          >
            เว็บไซต์หลัก
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>อยู่ในระหว่างการพัฒนา</p>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/artsgoz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          เอกสาร API Spec →
        </a>
      </footer>
    </div>
  );
}
