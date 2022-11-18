import { useState } from "react";
import Navitem from "./Navitem";
export default function NavMobile() {
  const Navlist = ["Top", "For Everyone", "Benefit", "Preview", "Penulis"];
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <>
      <aside className="w-6/12 bg-gray-900/50 fixed h-full top-0 left-0 -left-full"></aside>
      <aside className="w-6/12 bg-gradient-to-b from-gray-600 to-fivety fixed top-0 right-0 h-full -right-full">
        <div>
          <div className="text-white text-xl absolute right-10 top-10">
            <i className="uil uil-multiply"></i>
          </div>
          <ul className="text-white/80 p-10 mt-10">
            {Navlist.map((list) => {
              return (
                <Navitem key={list} className="py-[10px]">
                  {list}
                </Navitem>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
