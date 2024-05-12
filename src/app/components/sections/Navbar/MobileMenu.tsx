import { FC } from "react";
import { twMerge } from "tailwind-merge";

import NavLinks from "./NavLinks";

type MobileMenuProps = {
  open: boolean;
  links: any[];
  handleClick?: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ open, links, handleClick }) => {
  return (
    <div
      className={twMerge(
        "md:hidden fixed w-full h-screen flex z-[1] border-t border-green/10 bg-white origin-left duration-500 overflow-hidden shadow-2xl",
        open ? "w-full" : "w-0"
      )}
    >
      <div className="m-10">
        <NavLinks links={links} handleClick={handleClick} mobile />
      </div>
    </div>
  );
};

export default MobileMenu;
