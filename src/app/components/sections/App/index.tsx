import { FC } from "react";
import Image from "next/image";

import App1 from "../../../assets/images/app-1.png";
import App2 from "../../../assets/images/app-2.png";
import App3 from "../../../assets/images/app-3.png";
import AppStore from "../../../assets/images/app-store.svg";
import GooglePlay from "../../../assets/images/google-play.svg";

const App: FC = () => {
  const buttonClass =
    "hover:scale-110 hover:duration-500 hover:cursor-pointer w-[160px] 2xl:min-w-[205px]";

  return (
    <section className="w-full h-auto flex items-center justify-center bg-white">
      <div className="w-full tablet:w-[60%] h-auto flex flex-col tablet:flex-row justify-between gap-4 tablet:gap-10 xl:gap-28 mx-10 xl:mx-0 my-24 tablet:my-16">
        <div className="scale-75 lg:scale-90 xl:scale-95 2xl:scale-100 relative flex items-center justify-center gap-3 xl:py-20 rounded-[50px]">
          <Image
            className="w-36 min-w-36 z-[2]"
            src={App1}
            alt="LibertyPay app"
          />
          <Image
            className="w-48 min-w-48 z-[2]"
            src={App2}
            alt="LibertyPay app"
          />
          <Image
            className="w-36 min-w-36 z-[2]"
            src={App3}
            alt="LibertyPay app"
          />
          <div className="absolute w-[440px] h-[440px] bg-regular-green/70 rounded-full z-[1]"></div>
        </div>
        <div className="flex flex-col items-center tablet:items-start justify-center gap-12">
          <div className="flex flex-col gap-4 text-center tablet:text-left">
            <h2 className="text-green-xl text-3xl font-bold">Mobile app</h2>
            <h5 className="text-green text-lg font-sans font-normal">
              <p>Send money home from the convenience of your own phone.</p>
              <p>Download the LibertyPay App and start saving.</p>
            </h5>
          </div>
          <div className="flex gap-4 lg:gap-4 flex-col xl:flex-row">
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
      </div>
    </section>
  );
};

export default App;
