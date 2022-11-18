import { useState } from "react";
import Navitem from "./Navitem";
export default function Nav() {
  const [navlist, setNavList] = useState([
    {
      id: 1,
      title: "Top",
      idTarget: "#top",
    },
    {
      id: 2,
      title: "For Everyone",
      idTarget: "#everyone",
    },
    {
      id: 3,
      title: "Benefit",
      idTarget: "#benefit",
    },
    {
      id: 4,
      title: "Penulis",
      idTarget: "#author",
    },
    {
      id: 5,
      title: "Testimonials",
      idTarget: "#testimoni",
    },
  ]);
  return (
    <ul className="flex justify-center items-center space-x-10 text-white/80">
      {navlist.map((list) => {
        return <Navitem key={list.id} {...list}/>;
      })}
    </ul>
  );
}
