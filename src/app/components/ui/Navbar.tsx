"use client";

import { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import logo from "../../assets/LibertyIcon.svg";
import HamburgerIcon from "../../assets/hamburger.svg";
import CloseIcon from "../../assets/close.svg";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { id: "#about-us", section: "About us" },
  // { id: "#send-now", section: "Send Now" },
  { id: "#countries", section: "Countries" },
  { id: "#contact-us", section: "Contact Us" },
];

const Navbar: FC = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      setIsScrolling(true);
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

  const openMobileMenu = () => setIsMobileMenuOpen(true);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <Fragment>
      <nav
        className={twMerge(
          "flex justify-center sticky top-0 left-0 z-[10] w-full bg-white",
          isScrolling ? "border-b border-green/10 h-[81px]" : "h-20"
        )}
      >
        <div className="flex items-center justify-between w-full xl:w-[75%] mx-10 xl:mx-0">
          <Link className="flex items-center" href="/">
            <Image
              className="w-36 md:w-auto"
              src={logo}
              alt="Liberty Pay logo"
            />
          </Link>
          <NavLinks links={navLinks} />
          {!isMobileMenuOpen && (
            <Image
              className="md:hidden hover:cursor-pointer hover:scale-110 hover:duration-200"
              src={HamburgerIcon}
              alt="Hamburger icon"
              onClick={openMobileMenu}
            />
          )}
          {isMobileMenuOpen && (
            <Image
              className="w-[40px] hover:cursor-pointer hover:scale-110"
              src={CloseIcon}
              alt="Close icon"
              onClick={closeMobileMenu}
            />
          )}
        </div>
      </nav>
      <MobileMenu
        open={isMobileMenuOpen}
        links={navLinks}
        handleClick={closeMobileMenu}
      />
    </Fragment>
  );
};

export default Navbar;
