import Button from "./Button";
import FooterMenu from "./FooterMenu";
import Logo from "./Logo";
import { useState, useEffect } from "react";

export default function Footer() {
  const [years, setYears] = useState();
  const getYears = () => setYears(new Date().getFullYear());

  useEffect(()=>{
      getYears();
  }, [])
  return (
    <div className="container mx-auto py-[50px] px-5">
      <div className="flex items-center mb-[50px]">
        <div className="w-full lg:w-6/12">
          <div>
            <h2 className="text-white tex-[26px] font-medium leading-[44px]">
              Sudah siap meningkatkan skill kamu?
            </h2>
            <p className="text-lg text-white/80 font-medium leading-8">
              Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
              pertanyaan kamu di halaman bantuan.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/12">
            
        </div>
        <div className="hidden lg:block lg:w-5/12">
          <div className="space-x-10">
            <Button className="bg-white/5 text-[#F4F7FF] font-bold leading-5 rounded-lg px-8 py-4">
              Pusat Bantuan
            </Button>
            <Button className="bg-secondary shadow-lg shadow-secondary/50 text-[#F4F7FF] font-bold leading-5 rounded-lg px-8 py-4">
              Mendaftar
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center py-[50px]">
        <div className="w-full lg:w-6/12">
            <Logo/>
            <h2 className="text-white font-bold text-lg mt-[15px]">The Malaka</h2>
            <p className="mt-[15px] text-white/80 leading-7">Malaka adalah situs penyedia kursus ilmu komputer berbahasa Indonesia, mulai dari pengembangan hingga desain grafis.</p>
        </div>
        <div className="w-full lg:w-6/12">
          <FooterMenu/>
        </div>
        
      </div>
      <div className="mx-auto text-center pt-[50px]">
          <span className="inline-block text-white/40 text-sm tracking-[10%] font-bold">&#169; 2022 - {years} COPYRIGTH - AGUNG PERDANA</span>
        </div>
    </div>
  );
}
