import { FC } from "react";

type HamburgerIconProps = {
  onClick: () => void;
};

const HamburgerIcon: FC<HamburgerIconProps> = ({ onClick }) => {
  return (
    <div
      className="md:hidden hover:cursor-pointer hover:scale-110 hover:duration-200"
      onClick={onClick}
    >
      <svg
        className="md:hidden hover:cursor-pointer hover:scale-105 hover:duration-200 fill-current text-regular-green"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        // stroke-linecap="round"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </div>
  );
};

export default HamburgerIcon;
