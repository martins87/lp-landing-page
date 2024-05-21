import { FC } from "react";
import { twMerge } from "tailwind-merge";

import NavLinks from "./NavLinks";

type MobileMenuProps = {
  open: boolean;
  links: any[];
  onClick?: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ open, links, onClick }) => {
  return (
    <div
      className={twMerge(
        "md:hidden fixed w-full h-screen flex z-[1] border-t border-green/10 bg-regular-green origin-left duration-500 overflow-hidden shadow-2xl",
        open ? "w-full" : "w-0"
      )}
    >
      <div className="w-full mx-10">
        <NavLinks links={links} onClick={onClick} mobile />
      </div>
    </div>
  );
};

export default MobileMenu;
