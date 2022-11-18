export default function Button({className, children}) {
    const addClassName = className ? `${className}` : " ";
  return (
    <a
      href="/"
      className={`rounded-full lg:px-7 lg:py-3 font-bold inline-block ${addClassName}`}
    >
      {children}
    </a>
  );
}
