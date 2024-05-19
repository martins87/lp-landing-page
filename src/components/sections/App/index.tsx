import { FC } from "react";
import Image from "next/image";

import App1 from "../../../app/assets/images/app-1.png";
import App2 from "../../../app/assets/images/app-2.png";
import App3 from "../../../app/assets/images/app-3.png";
import AppStore from "../../../app/assets/images/app-store.svg";
import GooglePlay from "../../../app/assets/images/google-play.svg";
import Container from "../../ui/Container";

const App: FC = () => {
  const buttonClass =
    "hover:scale-110 hover:duration-500 hover:cursor-pointer w-[160px] 2xl:min-w-[176px]";
  const sidePhoneClass = "w-[122px] 2xl:min-w-36 z-[2]";
  const centerPhoneClass = "w-[163px] 2xl:min-w-48 z-[2]";

  return (
    <Container>
      <section className="w-full xl:w-[60%] h-auto flex flex-col tablet:flex-row justify-between gap-10 tablet:gap-4 xl:gap-12 mx-10 xl:mx-0 my-20 tablet:mt-32 tablet:mb-44 xl:my-20">
        <div className="scale-75 sm:scale-[0.9] tablet:scale-100 relative flex items-center justify-center gap-3 xl:py-20 rounded-[50px]">
          <Image className={sidePhoneClass} src={App1} alt="LibertyPay app" />
          <Image className={centerPhoneClass} src={App2} alt="LibertyPay app" />
          <Image className={sidePhoneClass} src={App3} alt="LibertyPay app" />
          <div className="absolute w-[396px] h-[396px] 2xl:w-[440px] 2xl:h-[440px] bg-regular-green/70 rounded-full z-[1]"></div>
        </div>
        <div className="w-auto flex flex-col items-center tablet:items-start justify-center gap-12 tablet:w-[40%]">
          <div className="flex flex-col gap-4 text-center tablet:text-left">
            <h2 className="text-green-xl text-3xl font-bold">Mobile app</h2>
            <h5 className="text-green text-lg font-normal">
              <p>Send money home from the convenience of your own phone.</p>
              <p>Download the LibertyPay App and start saving.</p>
            </h5>
          </div>
          <div className="flex flex-col tablet:flex-row xl:flex-col 2xl:flex-row gap-4 lg:gap-4 ">
            <a
              className={buttonClass}
              href="https://apps.apple.com/us/app/libertypay-money-transfer/id6454528073"
            >
              <Image src={AppStore} alt="Download on the App Store" />
            </a>
            <a
              className={buttonClass}
              href="https://play.google.com/store/apps/details?id=com.libertypay.b2c"
            >
              <Image src={GooglePlay} alt="Download on Google Play" />
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default App;
