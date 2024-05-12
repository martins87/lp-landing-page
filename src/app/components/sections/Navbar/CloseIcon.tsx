import { FC } from "react";

type CloseIconProps = {
  handleClickFn: () => void;
};

const CloseIcon: FC<CloseIconProps> = ({ handleClickFn }) => {
  return (
    <div
      className="md:hidden hover:cursor-pointer hover:scale-110 fill-current text-regular-green"
      onClick={handleClickFn}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </div>
  );
};

export default CloseIcon;
