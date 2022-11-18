export default function Navitem({className, idTarget, title}) {
  const addClassName = className ? `${className}` : " ";
  // console.log(allMenu);
  return (
    <li className={`${addClassName}`}>
      <a href={idTarget}>{title}</a>
    </li>
  );
}
