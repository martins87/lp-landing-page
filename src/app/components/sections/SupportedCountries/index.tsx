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
      <div className="w-[75%] h-[80%] flex flex-col lg:flex-row items-center justify-evenly lg:justify-between px-10 lg:px-20 xl:px-24 text-center tracking-wider bg-really-light-green rounded-[50px]">
        {/* <div className="flex items-center justify-center gap-28 w-[80%] h-[80%] text-center tracking-wider bg-regular-green rounded-[50px]"> */}
        <div className="lg:order-first flex gap-8">
          <FlagBox flag={BrazilFlag} />
          <FlagBox flag={GuatemalaFlag} />
          <FlagBox flag={DominicanRepublicFlag} />
        </div>
        <div className="order-first lg:w-[30%] xl:w-[40%]">
          <h5 className="mt-6 text-green text-center text-3xl 2xl:text-4xl font-bold ">
            {/* <h5 className="mt-6 text-white text-center text-4xl font-bold drop-shadow-lg"> */}
            Supported countries
          </h5>
          <h5 className="mt-6 text-green text-center text-xl 2xl:text-[24px] ">
            {/* <h5 className="mt-6 text-white text-center text-[24px] drop-shadow-lg"> */}
            LibertyPay currently allows you to send to friends and family in
            Brazil, Guatemala and Dominican Republic
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Where;
