import { FC } from "react";
import Image from "next/image";

import Button from "../../ui/Button";
import AppScreenshots from "../../../assets/hero.png";

const Hero: FC = () => {
  return (
    <div className="relative flex items-center w-full h-[998px] bg-white border-b overflow-hidden">
      <div className="absolute flex flex-col ml-[12.5%] gap-y-10">
        <h1 className="text-7xl text-green font-bold drop-shadow-3xl leading-[86.4px] text-center">
          Save when you send
        </h1>
        <h5 className="mt-6 text-green text-center text-[27px] leading-10">
          Join us today and start sending with
          <br />
          the best rate in the market
        </h5>
        <Button href="https://qrfy.com/p/vHeSi1I1Bv">Download the app</Button>
      </div>
      <Image
        className="absolute right-[20%] w-[420px] min-w-4 rotate-[30deg]"
        src={AppScreenshots}
        alt="App screenshots"
      />
    </div>
  );
};

export default Hero;
