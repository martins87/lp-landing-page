"use client";

import { FC, Fragment, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./HamburgerIcon";
import CloseIcon from "./CloseIcon";
import Logo from "../../ui/Logo";

const navLinks = [
  { id: "#about-us", section: "About us" },
  { id: "#countries", section: "Countries" },
  { id: "#contact-us", section: "Contact Us" },
];

const Navbar: FC = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

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
          "flex justify-center sticky top-0 left-0 z-[10] w-full",
          isScrolling ? "border-b border-green/10 h-[65px]" : "h-16",
          isMobileMenuOpen ? "bg-regular-green md:bg-white" : "bg-white"
        )}
      >
        <div className="flex items-center justify-between w-full xl:w-[60%] ultrawide:w-[50%] mx-10 xl:mx-0">
          <Logo white={isMobileMenuOpen} />
          <NavLinks links={navLinks} />
          {!isMobileMenuOpen && <HamburgerIcon onClick={openMobileMenu} />}
          {isMobileMenuOpen && <CloseIcon onClick={closeMobileMenu} />}
        </div>
      </nav>
      <MobileMenu
        open={isMobileMenuOpen}
        links={navLinks}
        onClick={closeMobileMenu}
      />
    </Fragment>
  );
};

export default Navbar;
