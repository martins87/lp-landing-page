import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type NavLinksProps = {
  links: any[];
  mobile?: boolean;
  handleClick?: () => void;
};

const NavLinks: FC<NavLinksProps> = ({ links, mobile, handleClick }) => {
  return (
    <ul
      className={twMerge(
        "hidden md:flex items-center justify-between gap-10",
        mobile ? "flex flex-col" : ""
      )}
    >
      {links.map((link) => (
        <li key={link.id} className="text-green text-lg">
          <a
            className={
              link.id === "#contact-us"
                ? "bg-regular-green rounded-full px-6 py-3 text-white tracking-wide no-underline hover:bg-green-xl"
                : "hover:font-bold no-underline"
            }
            href={
              link.id === "#contact-us"
                ? "https://libertypay.activehosted.com/f/1"
                : link.id
            }
            onClick={handleClick}
          >
            {link.section}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
