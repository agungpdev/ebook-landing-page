export default function SectionSubtitle({className,children}) {
    const addClassName = className ? `${className}` : " ";
  return (
    <>
      <h2 className={`text-lg leading-8 sm:text-[32px] sm:leading-[44px] font-medium ${addClassName}`}>
        {children}
      </h2>
    </>
  );
}
