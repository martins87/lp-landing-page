import { FC } from "react";
import Image from "next/image";

import Button from "../../ui/Button";
import Screenshot from "../../../assets/images/map-1.png";
import Container from "../../ui/Container";

const Hero: FC = () => {
  return (
    <Container className="tablet:h-[80vh]">
      <section className="w-full xl:w-[60%] flex flex-col tablet:flex-row items-center justify-between gap-20 tablet:gap-0 my-24 tablet:my-16 mx-10 xl:mx-0">
        <div className="flex flex-col justify-evenly gap-6 tablet:gap-y-6 text-center tablet:text-left">
          <h1 className="text-5xl tablet:text-5xl text-green font-bold drop-shadow-3xl leading-[64px] tablet:leading-[80px]">
            Save when you send
          </h1>
          <h5 className="text-green text-lg">
            Join us today and start sending with the best rate in the market
          </h5>
          <div className="flex justify-center tablet:justify-normal mt-2">
            <Button href="https://qrfy.com/p/vHeSi1I1Bv">
              Download the app
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center tablet:justify-end w-[50%]">
          <Image
            className="w-60 rounded-3xl shadow-hero-app tablet:mt-0"
            src={Screenshot}
            alt="App screenshots"
          />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
