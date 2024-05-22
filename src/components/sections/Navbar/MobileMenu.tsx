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
        "md:hidden fixed w-full h-screen flex z-[1] border-t border-green/10 bg-regular-green origin-left duration-500 shadow-2xl transform",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="w-full mx-10">
        <NavLinks links={links} onClick={onClick} mobile />
      </div>
    </div>
  );
};

export default MobileMenu;
