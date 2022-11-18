import { useState } from "react";
import AuthorIntroduction from "./AuthorIntroduction";
import CardEveryone from "./CardEveryone";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

export default function Everyone() {
  const [evpost, setEvpost] = useState([
    {
      id: 1,
      image: "/images/thumbnail-1.png",
      title: "Utility-First Framework",
      description:
        "Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.",
    },
    {
      id: 2,
      image: "/images/thumbnail-2.png",
      title: "Tailwind JIT Engine",
      description:
        "JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik.",
    },
    {
      id: 3,
      image: "/images/thumbnail-3.png",
      title: "Unopinionated-Framework",
      description:
        "Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.",
    },
  ]);

  return (
    <>
      <article className="container mx-auto py-[200px] px-5" id="everyone">
        <div className="flex justify-between w-full flex-col md:flex-row">
          <div className="w-full md:w-5/12">
            <SectionTitle className="text-secondary fill-secondary md:mb-2.5">
              BUKU INI UNTUK SIAPA
            </SectionTitle>
            <SectionSubtitle className="text-primary">
              Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
              designer!
            </SectionSubtitle>
          </div>
          <div className="w-full md:w-5/12 mt-5 md:mt-0">
            <p className="text-primary/80 leading-8 pr-4">
              Buku ini bukan hanya untuk front-end developer yang ingin
              meningkatkan skill, buku ini juga cocok untuk back-end developer
              dan UI designer agar dapat menulis style tanpa harus menulis kode
              CSS dan tanpa mengandalkan front-end developer!
            </p>
          </div>
        </div>
        <div className="flex sm:mt-[84px] flex-col sm:flex-row">
          {evpost.map((post) => (
            <div key={post.id} className="w-full mt-20 sm:mt-0 sm:w-4/12 text-center px-3">
              <CardEveryone {...post} />
            </div>
            
          ))}
        </div>
      </article>
      <article className="bg-secondary">
        <AuthorIntroduction />
      </article>
    </>
  );
}
