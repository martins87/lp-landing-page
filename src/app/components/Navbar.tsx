"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import logo from "../assets/LibertyIcon.svg";

const navLinks = [
  { id: "#about-us", section: "About us" },
  { id: "#send-now", section: "Send Now!" },
  { id: "#countries", section: "Countries" },
  { id: "#contact-us", section: "Contact Us" },
];

const Navbar: FC = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      setIsScrolling(true);
      console.log("scrollTop", scrollTop);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={twMerge(
        "flex justify-center sticky top-0 left-0 z-[10] w-full h-20 bg-white",
        isScrolling ? "border-b border-green/10" : ""
      )}
    >
      <div className="flex items justify-between w-[75%]">
        <Link className="flex items-center" href="/">
          <Image src={logo} alt="Liberty Pay logo" />
        </Link>
        <ul className="flex items-center justify-between gap-8 pr-10">
          {navLinks.map((link) => (
            <li key={link.id} className="text-green text-2xl hover:font-bold">
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
