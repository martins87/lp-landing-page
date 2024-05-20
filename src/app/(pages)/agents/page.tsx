import { Fragment } from "react";
import Image from "next/image";

import SupportedCountries from "../../../components/sections/SupportedCountries";
import AboutUs from "../../../components/sections/AboutUs";
import Agents from "../../../components/sections/Agents";
import Button from "../../../components/ui/Button";
import Sticker from "../../assets/images/sticker.png";
import SocialProof from "../../../components/sections/SocialProof";

const AgentsPage = () => {
  return (
    <Fragment>
      <section className="flex items-center justify-center w-full h-auto tablet:h-[80vh] bg-white">
        <div className="w-full xl:w-[60%] ultrawide:w-[50%] flex flex-col tablet:flex-row items-center justify-between gap-20 tablet:gap-16 my-24 tablet:my-16 mx-10">
          <div className="w-[90%] mobile:w-[60%] tablet:w-[50%] xl:w-[45%] ultrawide:w-[50%] flex items-center justify-center">
            <Image className="tablet:mt-0" src={Sticker} alt="Agents" />
          </div>
          <div className="tablet:order-first flex flex-col justify-evenly gap-6 tablet:gap-y-6 text-center tablet:text-left">
            <h1 className="text-5xl tablet:text-5xl text-green font-bold drop-shadow-3xl">
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
        </div>
      </section>
      <SupportedCountries />
      <AboutUs />
      <Agents />
      <SocialProof agentsVersion />
    </Fragment>
  );
};

export default AgentsPage;
