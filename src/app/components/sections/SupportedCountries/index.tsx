import { FC } from "react";

import FlagBox from "./FlagBox";
import BrazilFlag from "../../../assets/images/Brazil-flag.jpg";
import GuatemalaFlag from "../../../assets/images/Guatemala-flag.png";
import DominicanRepublicFlag from "../../../assets/images/Dominican-Republic-flag.png";

const Where: FC = () => {
  return (
    <section
      className="w-full h-[500px] flex items-center justify-center bg-white"
      id="countries"
    >
      <div className="w-[75%] tablet:w-[60%] h-[80%] flex flex-col gap-2 my-24 tablet:my-16 xl:gap-8 xl:flex-row items-center justify-evenly px-10 lg:px-20 xl:px-12 text-center tracking-wider bg-really-light-green rounded-[50px]">
        <div className="xl:order-first flex gap-6 mobile:gap-8">
          <FlagBox flag={BrazilFlag} />
          <FlagBox flag={GuatemalaFlag} />
          <FlagBox flag={DominicanRepublicFlag} />
        </div>
        <div className="order-first flex flex-col justify-between text-left gap-4 xl:w-[30%] 2xl:w-[40%]">
          <h5 className="capitalize text-green-xl text-center xl:text-left text-2xl tablet:text-3xl font-bold">
            supported countries
          </h5>
          <h5 className="text-black text-center xl:text-left text-base">
            LibertyPay currently allows you to send to friends and family in
            Brazil, Guatemala and Dominican Republic
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Where;
