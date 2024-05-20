import { FC } from "react";

import FlagBox from "./FlagBox";
import BrazilFlag from "../../../app/assets/images/Brazil-flag.jpg";
import GuatemalaFlag from "../../../app/assets/images/Guatemala-flag.png";
import DominicanRepublicFlag from "../../../app/assets/images/Dominican-Republic-flag.png";
import Container from "../../ui/Container";

const Where: FC = () => {
  return (
    <Container className="">
      <div
        className="w-[75%] tablet:w-full xl:w-[60%] ultrawide:w-[50%] flex flex-col tablet:flex-row items-center justify-evenly gap-8 xl:gap-8 mx-10 xl:mx-0 my-20 tablet:mt-16 tablet:mb-32 py-10 tablet:py-16 px-10 lg:px-20 xl:px-12 text-center tracking-wider bg-really-light-green rounded-[50px]"
        id="countries"
      >
        <div className="tablet:order-first flex gap-5 mobile:gap-6 xl:gap-8">
          <FlagBox flag={BrazilFlag} />
          <FlagBox flag={GuatemalaFlag} />
          <FlagBox flag={DominicanRepublicFlag} />
        </div>
        <div className="order-first flex flex-col justify-between text-left gap-2 tablet:w-[40%] xl:w-[30%] 2xl:w-[40%]">
          <h5 className="text-green-xl text-center tablet:text-left text-2xl font-bold">
            Supported countries
          </h5>
          <h5 className="text-green text-center tablet:text-left text-lg">
            LibertyPay currently allows you to send to friends and family in
            Brazil, Guatemala and Dominican Republic
          </h5>
        </div>
      </div>
    </Container>
  );
};

export default Where;
