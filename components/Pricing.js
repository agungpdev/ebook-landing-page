import { useState } from "react";
import Button from "./Button";
import CardPricing from "./CardPricing";
import SectionSubtitle from "./SectionSubtitle";

export default function Pricing() {
  const [pricing, setPricing] = useState([
    {
      id: 1,
      title: "Buku Digital",
      price: "Rp.100.000",
      image: "/images/check.png",
      fitur: { value1: "Buku Lengkap", value2: "Akses Secara Digital", value3: "Buku Fisik", value4: "Mendapat Pembaruan", value5: "Konsultasi", value6: "Dapat diunduh" },
    },
    {
      id: 2,
      title: "Buku Fisik",
      price: "Rp.185.000",
      image: "/images/check.png",
      fitur: { value1: "Buku Lengkap", value2: "Akses Secara Digital", value3: "Buku Fisik", value4: "Mendapat Pembaruan", value5: "Konsultasi", value6: "Dapat diunduh" }
    },
    {
      id: 3,
      title: "Buku Digital+Fisik",
      price: "Rp.250.000",
      image: "/images/check.png",
      fitur: { value1: "Buku Lengkap", value2: "Akses Secara Digital", value3: "Buku Fisik", value4: "Mendapat Pembaruan", value5: "Konsultasi", value6: "Dapat diunduh" }
    },
  ]);
  return (
    <article className="bg-pricing bg-no-repeat bg-cover py-[300px] px-5">
      <div className="container w-full mx-auto"> 
        <div className="flex justify-center">
          <div className="lg:w-8/12 w-full px-10 text-center">
            <Button className="bg-fourty/10 text-secondary mb-[10px] px-7 py-3">
              Harga Buku
            </Button>
            <SectionSubtitle className="text-white mb-5">
              Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
              perangkat kamu
            </SectionSubtitle>
            <p className="text-white/80 xl:px-40 lg:px-24 md:px-32 mb-20">
              Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis.
              Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-center lg:space-x-4 box-border">
          {pricing.map((item) => (
            <div key={item.id} className="w-full lg:w-4/12 xl:w-3/12 bg-white rounded-xl mt-4">
              <CardPricing {...item} />
            </div>
          ))}
        </div>
        <p className="mt-20 text-center text-white/80 text-lg leading-8">
        *Buku digital akan dikirimkan ke alamat email kamu <br></br> *Buku fisik dikirim 7
        hari setelah pemesanan
      </p>
      </div>
    </article>
  );
}
