import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

type NavLinksProps = {
  links: any[];
  mobile?: boolean;
  onClick?: () => void;
};

const NavLinks: FC<NavLinksProps> = ({ links, mobile, onClick }) => {
  return (
    <ul
      className={twMerge(
        "items-start justify-between gap-10",
        mobile ? "md:hidden flex flex-col gap-0" : "hidden md:flex"
      )}
    >
      {links.map((link) => (
        <li
          key={link.id}
          className={twMerge(
            "min-w-[70px]",
            mobile ? "p-4 flex-1 w-full border-b hover:text-green" : ""
          )}
        >
          <a
            className={twMerge(
              "text-sm no-underline",
              link.id === "#contact-us"
                ? "text-white rounded-full px-4 py-2 bg-regular-green hover:bg-green-xl"
                : "text-green hover:font-bold",
              mobile ? "text-white tracking-wide" : "",
              mobile && link.id === "#contact-us"
                ? "bg-white text-green font-bold hover:bg-white"
                : ""
            )}
            href={
              link.id === "#contact-us"
                ? "https://libertypay.activehosted.com/f/1"
                : link.id
            }
            onClick={onClick}
          >
            {link.section}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
