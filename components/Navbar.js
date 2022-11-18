import { useState } from "react";
import Brand from "./Brand";
import Button from "./Button";
import Nav from "./Nav";
import Navitem from "./Navitem";

export default function Navbar() {
  const [contohData, setContohData] = useState([
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
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <div className="flex items-center py-5 justify-between px-5 fixed top-0 left-0 bg-[#2F364B] shadow-xl w-full z-20">
      <div className="brand">
        <Brand />
      </div>
      <nav className="hidden md:block">
        <Nav />
      </nav>
      <div className="hidden lg:block">
        <Button className="bg-white text-primary">Download</Button>
      </div>
      <div className="md:hidden">
        <div className="text-xl text-white">
          <span
            onClick={() => {
              setOffCanvas(!offCanvas);
            }}
            className="inline-block"
          >
            <i className="uil uil-bars"></i>
          </span>
        </div>
      </div>
      <aside
        className={`w-6/12 bg-gray-900/50 fixed h-full top-0 transition-all ${
          offCanvas ? "left-0" : "-left-full"
        }`}
      ></aside>
      <aside
        className={`w-6/12 bg-gradient-to-b from-gray-600 to-fivety fixed top-0 h-full transition-all ${
          offCanvas ? "right-0" : "-right-full"
        }`}
      >
        <div>
          <div
            className="text-white text-xl absolute right-10 top-10"
            onClick={() => {
              setOffCanvas(false);
            }}
          >
            <span>
              <i className="uil uil-multiply"></i>
            </span>
          </div>
          <ul className="text-white/80 p-10 mt-10">
            {contohData.map((xcontoh) => (
              <Navitem key={xcontoh.id} className="py-[10px]" {...xcontoh} />
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
