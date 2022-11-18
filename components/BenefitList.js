export default function BenefitList() {
  const BenefitList = [
    "Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap",
    "Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi",
    "Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer",
    "Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS",
  ];
  return (
    <ul className="text-primary/80">
      {BenefitList.map((list) => {
        return (
          <li key={list} className="flex mt-5 space-x-5">
            <div>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.814941"
                  width="30"
                  height="30"
                  rx="15"
                  fill="#20D27D"
                />
                <path
                  d="M20 12.3774L13.125 19.2524L10 16.1274"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>{list}</p>
          </li>
        );
      })}
    </ul>
  );
}
