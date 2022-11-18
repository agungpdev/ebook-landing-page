import { useState } from "react";
import FooterList from "./FooterList";
import FooterMenuTitle from "./FooterMenuTitle";
export default function FooterMenu() {
  const [footerMenu, setFooterMenu] = useState([
    {
      id: 1,
      title: "PRODUCTS",
      value1: "Courses", value2: "Books", value3: "Freebies", value4: "classes", value5: " "
    },
    {
      id: 2,
      title: "COMPANY",
      value1: "About Us", value2: "Contact", value3: "Privacy Policy", value4: "Terms of Service", value5: "Help"
    },
    {
      id: 3,
      title: "GET IN TOUCH",
      value1: "Twitter", value2: "Facebook", value3: "Dribble", value4: "Github", value5: "Instagram"
    },
  ]);
  return (
    <div className="flex flex-col sm:flex-row justify-between mt-5 lg:mt-0 lg:px-10">
      {footerMenu.map((list) => {
        return (
          <ul
            className="text-white/80"
            key={list.id}
          >
            <FooterMenuTitle {...list}/>
            <FooterList {...list}/>
          </ul>
        );
      })}
    </div>
  );
}
