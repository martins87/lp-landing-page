import { FC } from "react";

type InstagramIconProps = {
  width: string;
  height: string;
};

const FacebookIcon: FC<InstagramIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0137 22.25L27.7913 17.1827H22.9291V13.8943C22.9291 12.508 23.6083 11.1566 25.786 11.1566H27.9964V6.84234C27.9964 6.84234 25.9905 6.5 24.0726 6.5C20.0684 6.5 17.451 8.92703 17.451 13.3206V17.1827H13V22.25H17.451V34.5H22.9291V22.25H27.0137Z"
        fill="#5A4F4F"
        data-darkreader-inline-fill=""
      />
    </svg>
  );
};

export default FacebookIcon;
