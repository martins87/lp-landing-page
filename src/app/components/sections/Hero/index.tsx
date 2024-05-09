import { FC } from "react";
import Image from "next/image";

import Button from "../../ui/Button";
import AppScreenshots from "../../../assets/hero.png";
import Screenshot from "../../../assets/map-1.png";

const Hero: FC = () => {
  return (
    <section className="flex items-center justify-center w-full h-auto bg-white">
      <div className="w-full xl:w-[75%] h-[80%] flex flex-col tablet:flex-row items-center justify-between gap-10 my-24 mx-10">
        <div className="flex flex-col tablet:gap-y-10 2xl:ml-[10%]">
          <h1 className="text-6xl text-green font-bold drop-shadow-3xl leading-[86.4px] text-center">
            Save when you send
          </h1>
          <h5 className="mt-6 text-green text-center text-xl ">
            Join us today and start sending with
            <br />
            the best rate in the market
          </h5>
          <Button href="https://qrfy.com/p/vHeSi1I1Bv">Download the app</Button>
        </div>
        <Image
          className="w-64 rounded-3xl shadow-hero-app 2xl:mr-[10%] mt-24 tablet:mt-0"
          src={Screenshot}
          alt="App screenshots"
        />
      </div>
    </section>
  );
};

export default Hero;
