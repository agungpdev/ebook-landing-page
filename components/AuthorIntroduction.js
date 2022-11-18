import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

export default function AuthorIntroduction() {
  return (
    <div className="container mx-auto w-full flex py-[100px] flex-col lg:flex-row px-5">
      <div className="lg:w-4/12 w-full">
        <SectionTitle className="text-white fill-white mb-[10px]">BUKU INI UNTUK SIAPA</SectionTitle>
        <SectionSubtitle className="text-white pr-8 pb-10">Kata Pengantar Dari Penulis Buku</SectionSubtitle>
        <div className="flex pt-10 space-x-5">
          <img src="/images/avatar.png" alt="avatar" />
          <div>
            <h5 className="text-white text-lg font-medium">Agung Perdana</h5>
            <p className="text-white/80 font-normal text-sm">@fadilgemilang</p>
          </div>
        </div>
      </div>
      <div className="lg:w-8/12 w-full mt-5 lg:mt-0">
        <p className="text-lg leading-10 font-normal text-white">
          "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain
          website yang unik dan tanpa kamu perlu menulis kode CSS sedikitpun.
          Mungkin kamu akan berpikir bahwa kamu akan membutuhkan waktu yang
          lebih lama ketika membangun sebuah website dengan utility-first
          framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu
          harus memikirkan desain dan mengimplementasikan desain tersebut dari
          awal sendiri. Namun, kamu perlu ingat manfaat-manfaat yang diberikan
          oleh utility-first framework, sehingga kamu dapat mempertimbangkannya.
          Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai
          dari konsep, workflow, hingga membuat sebuah website responsive dengan
          TailwindCSS. Buku ini tidak untuk semua orang, setidaknya kamu
          memahami cara mengoperasikan komputer, memahami HTML, memahami CSS,
          atau bisa dibilang kamu sudah pernah membangun website sebelumnya dan
          ingin mempelajari hal baru untuk meningkatkan skill."
        </p>
      </div>
    </div>
  );
}
