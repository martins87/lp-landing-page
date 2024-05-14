import { Fragment } from "react";
import Image from "next/image";

import SupportedCountries from "../components/sections/SupportedCountries";
import AboutUs from "../components/sections/AboutUs";
import Button from "../components/ui/Button";
import GeneralAgents from "../assets/images/general-agents.png";

const Agents = () => {
  return (
    <Fragment>
      <section className="flex items-center justify-center w-full h-auto tablet:h-[80vh] bg-white">
        <div className="w-full xl:w-[60%] flex flex-col tablet:flex-row items-center justify-between gap-20 tablet:gap-0 my-24 tablet:my-16 mx-10">
          <div className="flex flex-col justify-evenly gap-6 tablet:gap-y-6 text-center tablet:text-left">
            <h1 className="text-5xl tablet:text-5xl text-green font-bold drop-shadow-3xl leading-[64px] tablet:leading-[80px]">
              Save when you send
            </h1>
            <h5 className="text-green text-lg">
              Join us today and start sending with the best rate in the market
            </h5>
            <div className="flex justify-center tablet:justify-normal mt-2">
              <Button href="https://libertypay.activehosted.com/f/1">
                Add to my store
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center w-[50%]">
            <Image
              className="mt-24 tablet:mt-0"
              src={GeneralAgents}
              alt="Agents"
            />
          </div>
        </div>
      </section>
      <SupportedCountries />
      <AboutUs />
    </Fragment>
  );
};

export default Agents;
