import Button from "./Button";
import SectionTitle from "./SectionTitle";
import Technology from "./Technology";
export default function Hero() {
  return (
    <article className="flex lg:mt-12 px-5 flex-col-reverse lg:flex-row" id="hero">
      <div className="xl:w-5/12 lg:w-6/12 w-full">
        <h1 className="text-white text-xl leading-8 sm:text-3xl sm:leading-10 lg:text-5xl lg:leading-[62.5px]">
          Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS
        </h1>
        <p className="text-white/80 mt-5 w-5/6 leading-8">
          Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
          diakhiri dengan membangun sebuah website yang responsive dengan
          Tailwind CSS.
        </p>
        <div className="lg:mt-12 lg:mb-24 mt-10">
          <div className="flex items-center space-x-10">
            <Button className="bg-secondary shadow-lg shadow-secondary/50 text-white px-6 py-3 text-sm">
              Beli Sekarang
            </Button>
            <div>
              <div className="flex space-x-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <p className="text-white/60 font-sansPro font-bold text-sm lg:tracking-widest">
                    SUDAH TERJUAL
                  </p>
                  <p className="text-white text-sm lg:text-2xl font-Inter font-semibold">
                    501,234+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionTitle className="hidden xl:block mb-4 text-white/40 fill-white">
          TEKNOLOGI YANG DIGUNAKAN
        </SectionTitle>
        <div className="items-center space-x-5 hidden xl:flex">
          <Technology />
        </div>
      </div>
      <div className="xl:w-7/12 lg:w-6/12 flex justify-center -mt-5">
        <img src="./bg/bg-book.png" alt="bg-ebook" className="w-8/12 lg:w-full"/>
      </div>
    </article>
  );
}
