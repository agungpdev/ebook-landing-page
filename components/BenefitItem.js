import BenefitList from "./BenefitList";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

export default function BenefitItem() {
  return (
    <>
      <div className="flex py-[200px] mx-auto flex-col lg:flex-row">
        <div className="lg:w-6/12 w-full">
          <SectionTitle className="text-secondary fill-secondary mb-[10px]">
            MANFAAT BUKU
          </SectionTitle>
          <SectionSubtitle className="text-primary mb-5">
            Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
          </SectionSubtitle>
          <p className="text-lg text-primary/80 leading-8 mb-10 font-normal">
            "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang
            yang bodoh, engkau tak bisa berharap yang terpantul adalah seorang
            yang jenius." - J.K Rowling
          </p>
          <BenefitList />
        </div>
        <div className="lg:w-6/12 w-full px-10 mt-5 lg:mt-0 relative flex justify-center">
          <div className="flex bg-secondary shadow-xl shadow-secondary/50 py-5 rounded-2xl justify-center absolute max-[450px]:-bottom-10 min-[450px]:bottom-10 min-[450px]:left-x-auto">
            <div className="px-5 sm:px-10">
              <h5 className="text-white font-bold text-lg sm:text-3xl">19</h5>
              <span className="inline-block text-white text-sm">
                Jumlah Chapter
              </span>
            </div>
            <div className="px-5 sm:px-10">
              <h5 className="text-white font-bold text-lg sm:text-3xl">253</h5>
              <span className="inline-block text-white text-sm">
                Jumlah Halaman
              </span>
            </div>
            <div className="px-5 sm:px-10">
              <h5 className="text-white font-bold text-lg sm:text-3xl">60</h5>
              <span className="inline-block text-white text-sm">
                Hari Menulis
              </span>
            </div>
          </div>
          <div className="">
            <img
              src="/bg/benefit-book.png"
              alt="benefit-book"
              className="-z-20"
            />
          </div>
        </div>
      </div>
      <div className="flex pb-[200px] flex-col lg:flex-row lg:items-center">
        <div className="lg:w-6/12 w-full">
          <img src="/bg/benefit-vector.png" alt="benefit-vector" />
        </div>
        <div className="lg:w-6/12 w-full">
          <SectionTitle className="text-secondary fill-secondary mb-[10px]">
            SELAIN ITU
          </SectionTitle>
          <SectionSubtitle className="text-primary mb-5">
            Buku dengan studi kasus nyata, juga komunitas yang ramah
          </SectionSubtitle>
          <p className="text-lg text-primary/80 leading-8 mb-10 font-normal">
            Buku ini diakhiri dengan membangun website yang responsive dengan
            Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas
            untuk bertanya ketika mengalami kesulitan.
          </p>
          <div className="flex py-5 px-[30px] bg-white shadow-xl rounded-2xl items-center mb-[30px] justify-between">
            <div className="flex space-x-6">
              <div>
                <svg
                  width="30"
                  height="47"
                  viewBox="0 0 30 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.75 12.5525H6.25C4.86929 12.5525 3.75 13.6718 3.75 15.0525V32.5525C3.75 33.9332 4.86929 35.0525 6.25 35.0525H23.75C25.1307 35.0525 26.25 33.9332 26.25 32.5525V15.0525C26.25 13.6718 25.1307 12.5525 23.75 12.5525Z"
                    stroke="#00BAC7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 20.0525H26.25"
                    stroke="#00BAC7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.25 35.0525V20.0525"
                    stroke="#00BAC7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <a href="/">
                    <h5 className="text-secondary font-medium text-lg leading-8">
                      Live Demo Project
                    </h5>
                  </a>
                  <p className="text-primary/80 pr-10 leading-8">
                    Lihat live demo project yang akan kamu buat di akhir buku
                    ini.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <a href="/">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.80249"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#00BAC7"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M13 20.8025H27"
                    stroke="#00BAC7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 13.8025L27 20.8025L20 27.8025"
                    stroke="#00BAC7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex py-5 px-[30px] bg-white shadow-xl rounded-2xl items-center justify-between">
            <div className="flex space-x-6">
              <div>
                <svg
                  width="30"
                  height="47"
                  viewBox="0 0 30 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.25 27.5525C26.25 28.2155 25.9866 28.8514 25.5178 29.3203C25.0489 29.7891 24.413 30.0525 23.75 30.0525H8.75L3.75 35.0525V15.0525C3.75 14.3894 4.01339 13.7536 4.48223 13.2847C4.95107 12.8159 5.58696 12.5525 6.25 12.5525H23.75C24.413 12.5525 25.0489 12.8159 25.5178 13.2847C25.9866 13.7536 26.25 14.3894 26.25 15.0525V27.5525Z"
                    stroke="#00BAC7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div>
                  <a href="/">
                    <h5 className="text-secondary font-medium text-lg leading-8">
                      Dukungan Komunitas
                    </h5>
                  </a>
                  <p className="text-primary/80 pr-10 leading-8">
                    Sebuah server Discord berisi teman-teman yang akan membantu
                    kamu.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <a href="/">
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.80249"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#00BAC7"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M13 20.8025H27"
                    stroke="#00BAC7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 13.8025L27 20.8025L20 27.8025"
                    stroke="#00BAC7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
