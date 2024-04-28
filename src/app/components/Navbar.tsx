import Image from "next/image";

import logo from "../assets/logo-green-2.svg";

const Navbar = () => {
  return (
    <nav className="w-full h-28 pl-10 flex items-center justify-between bg-white border-b">
      <Image src={logo} alt="Liberty Pay logo" />
      <ul className="flex items-center justify-between gap-8 pr-10">
        <li className="text-green text-2xl">About us</li>
        <li className="text-green text-2xl">Send Now!</li>
        <li className="text-green text-2xl">Countries</li>
        <li className="text-green text-2xl">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
