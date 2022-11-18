import Button from "./Button";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import TestimonialSlide from "./TestimonialSlide";

export default function Testimonials() {
  return (
    <>
      <article className="pt-[200px] px-5" id="author">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center pb-[200px]">
            <div className="w-full lg:w-6/12">
              <div>
                <img src="/images/author.png" alt="author" />
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <p className="text-sm font-bold text-secondary mb-[10px]">
                PENULIS BUKU
              </p>
              <SectionSubtitle className="text-primary text-[32px] mb-5 leading-[44px]">
                Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
              </SectionSubtitle>
              <p className="text-primary leading-8">
                “Halo, saya Agung. Mungkin nama ini terdengar asing di telinga
                kamu. Namun, kedepannya saya berharap nama ini tidak lagi
                terdengar asing di telinga kamu sebagai orang yang rajin berbagi
                hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer.
                Saya seorang web developer yang masuk kategori
                apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya
                lebih senang fokus di front-end development, karena --menurut
                saya-- ini lebih sederhana saja. Di front-end development pada
                dasarnya hanya perlu menguasai tiga bahasa: HTML, CSS, dan
                JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu
                sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake
                React.”
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-thirdty pb-[100px] px-5" id="testimoni">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row py-[100px] sm:p-[100px]">
            <div className="w-full lg:w-6/12">
              <SectionTitle className="text-secondary fill-secondary mb-[10px]">
                TESTIMONIAL
              </SectionTitle>
              <SectionSubtitle className="text-primary text-[32px] font-medium leading-[44px]">
                Apa kata orang-orang yang membaca buku ini?
              </SectionSubtitle>
            </div>
            <div className="w-full lg:w-6/12">
              <p className="text-primary/80 text-lg leading-8 mt-5 sm:mt-0">
                Kalo seandainya kamu belum percaya dengan buku ini maka tidak
                apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi,
                mungkin beberapa ulasan ini bisa membangkitkan hasratmu untuk
                membeli buku ini.
              </p>
            </div>
          </div>
          <TestimonialSlide />
        </div>
      </article>
      <article className="py-[150px] px-5">
        <div className="flex justify-center">
          <div className="min-[1170px]:w-8/12 w-full text-center">
            <Button className="bg-thirdty text-secondary mb-[10px] px-7 py-3">
              Beli Buku
            </Button>
            <SectionSubtitle className="text-primary font-medium mb-5">Anda ingin segera memesan buku ini?</SectionSubtitle>
            <p className="text-lg leading-8 text-primary/80 w-full sm:w-4/12 mx-auto mb-10">
              Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
            </p>
            <div className="min-[1170px]:w-6/12 mx-auto">
              <div className="flex flex-col sm:space-x-5 justify-center sm:flex-row">
                <div className="flex space-x-5 justify-center">
                  <svg
                    className="stroke-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <p className="text-primary/80 font-sansPro font-bold tracking-widest">
                      SUDAH TERJUAL
                    </p>
                    <p className="text-primary text-2xl font-Inter font-semibold">
                      501,234+
                    </p>
                  </div>
                </div>
                <Button className="bg-secondary shadow-lg shadow-secondary/50 text-white px-7 py-3 mt-5 sm:mt-0">
                  <div className="flex items-center justify-center pt-1 space-x-2 ">
                    <p>Beli Sekarang</p>
                    <span>
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 18.8337C14.6024 18.8337 18.3333 15.1027 18.3333 10.5003C18.3333 5.89795 14.6024 2.16699 10 2.16699C5.39763 2.16699 1.66667 5.89795 1.66667 10.5003C1.66667 15.1027 5.39763 18.8337 10 18.8337Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 13.8337L13.3333 10.5003L10 7.16699"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66667 10.5H13.3333"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
