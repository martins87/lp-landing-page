import { FC } from "react";
import Image from "next/image";

import Button from "../../ui/Button";
import AppScreenshots from "../../../assets/hero.png";

const Hero: FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-auto bg-white">
      <div className="w-[75%] h-[80%] flex items-center justify-between gap-10">
        <div className="flex flex-col gap-y-10">
          <h1 className="text-6xl text-green font-bold drop-shadow-3xl leading-[86.4px] text-center">
            Save when you send
          </h1>
          <h5 className="mt-6 text-green text-center text-xl leading-10">
            Join us today and start sending with
            <br />
            the best rate in the market
          </h5>
          <Button href="https://qrfy.com/p/vHeSi1I1Bv">Download the app</Button>
        </div>
        <Image
          className="w-[25%] min-w-[25%] rotate-[30deg] mt-[8%] mr-[10%]"
          src={AppScreenshots}
          alt="App screenshots"
        />
      </div>
    </div>
  );
};

export default Hero;
