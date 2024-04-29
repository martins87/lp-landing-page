import Image from "next/image";

import logo from "../assets/LibertyIcon.svg";

const navLinks = [
  { id: "#about-us", section: "About us" },
  { id: "#send-now", section: "Send Now!" },
  { id: "#countries", section: "Countries" },
  { id: "#contact-us", section: "Contact Us" },
];

const Navbar = () => {
  return (
    <nav className="w-full h-28 pl-10 flex items-center justify-between bg-white border-b">
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
    </nav>
  );
};

export default Navbar;
