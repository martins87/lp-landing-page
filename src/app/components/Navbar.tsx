import { FC } from "react";
import Image from "next/image";

import logo from "../assets/LibertyIcon.svg";

const navLinks = [
  { id: "#about-us", section: "About us" },
  { id: "#send-now", section: "Send Now!" },
  { id: "#countries", section: "Countries" },
  { id: "#contact-us", section: "Contact Us" },
];

const Navbar: FC = () => {
  return (
    <nav className="flex justify-center sticky top-0 left-0 z-[10] w-full h-20 pl-10 bg-white border-b">
      <div className="flex items-center justify-between w-[80%]">
        <Image src={logo} alt="Liberty Pay logo" />
        <ul className="flex items-center justify-between gap-8 pr-10">
          {navLinks.map((link) => (
            <li key={link.id} className="text-green text-2xl">
              <a className="no-underline" href={link.id}>
                {link.section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
