import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../app/assets/images/LibertyIcon.svg";

const Logo: FC = () => {
  return (
    <Link className="flex items-center" href="/">
      <Image className="w-36 md:w-44" src={logo} alt="Liberty Pay logo" />
    </Link>
  );
};

export default Logo;
