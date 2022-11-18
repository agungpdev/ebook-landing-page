export default function FooterList({ value1, value2, value3, value4, value5 }) {
  return (
    <>
      <li className="text-white/80 leading-7">
        <a href="/">{value1}</a>
      </li>
      <li className="text-white/80 leading-7">
        <a href="/">{value2}</a>
      </li>
      <li className="text-white/80 leading-7">
        <a href="/">{value3}</a>
      </li>
      <li className="text-white/80 leading-7">
        <a href="/">{value4}</a>
      </li>
      <li className="text-white/80 leading-7">
        <a href="/">{value5}</a>
      </li>
    </>
  );
}
