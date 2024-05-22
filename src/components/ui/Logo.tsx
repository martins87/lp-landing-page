import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../app/assets/images/LibertyIcon.svg";
import logoWhite from "../../app/assets/images/libertypay-logo-white.png";

type LogoProps = {
  white?: boolean;
};

const Logo: FC<LogoProps> = ({ white }) => {
  return (
    <Link className="flex items-center" href="/">
      <div className={"visible md:hidden"}>
        <Image
          className={"w-36 md:w-44"}
          src={white ? logoWhite : logo}
          alt="Liberty Pay logo"
        />
      </div>
      <div className={"hidden md:flex"}>
        <Image className={"w-36 md:w-44"} src={logo} alt="Liberty Pay logo" />
      </div>
    </Link>
  );
};

export default Logo;
