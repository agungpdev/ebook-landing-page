export default function SectionTitle({className, children}) {
  const addClassName = className ? `${className}` : " ";
  return (
    <>
      <div className={`flex items-center space-x-2 ${addClassName}`}>
        <svg
          width="30"
          height="2"
          fill=""
          viewBox="0 0 30 2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="2" fill="" fillOpacity="0.4" />
        </svg>
        <p className="text-sm font-bold">{children}</p>
      </div>
    </>
  );
}
