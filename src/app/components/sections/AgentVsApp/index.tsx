import { FC } from "react";
import Image from "next/image";

import Button from "../../ui/Button";
import App1 from "../../../assets/delivered.png";
import App2 from "../../../assets/map.png";
import App3 from "../../../assets/new-transaction.png";
import App4 from "../../../assets/overview.png";
import App5 from "../../../assets/my-account.png";
import AppStore from "../../../assets/app-store.svg";
import GooglePlay from "../../../assets/google-play.svg";
import ConvenienceStore from "../../../assets/convenience-store-3.jpeg";

const AgentVsApp: FC = () => {
  return (
    <section className="w-full h-[800px] flex items-center justify-center bg-white">
      <div className="w-[75%] h-[75%] flex items-center justify-around gap-10">
        <div className="w-[42.5%] h-[700px] flex flex-col justify-between p-14 bg-really-light-green rounded-[50px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-green text-3xl font-bold">
              Licensed Agent Stores
            </h2>
            <h5 className="text-green font-sans font-normal text-xl">
              Ideally located on your trusted convenience store, all the
              benefits of sending with LibertyPay at your everyday store.
            </h5>
            <div className="mx-auto">
              <Image
                className="rounded-3xl object-scale-down"
                src={ConvenienceStore}
                // src={AgentModel}
                alt="Convenience store"
              />
            </div>
          </div>
          <div className="w-fit -mt-4">
            <Button href="https://libertypay.activehosted.com/f/1">
              Add LibertyPay to my store
            </Button>
          </div>
        </div>
        <div className="w-[42.5%] h-[700px] flex flex-col justify-between p-14 bg-slate-50 rounded-[50px]">
          <div className="flex items-center justify-center gap-3">
            <Image className="w-[27.5%]" src={App3} alt="LibertyPay app" />
            <Image className="w-[35%]" src={App2} alt="LibertyPay app" />
            <Image className="w-[27.5%]" src={App1} alt="LibertyPay app" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <h2 className="text-green text-3xl font-bold mt-8">Mobile app</h2>
              <h5 className="text-green font-sans font-normal text-xl">
                Send money home from the convenience of your own phone. Download
                the LibertyPay App and start saving.
              </h5>
            </div>
            <div className="flex gap-10">
              <a
                className="hover:scale-110 hover:duration-500 hover:cursor-pointer"
                href="https://apps.apple.com/us/app/libertypay-money-transfer/id6454528073"
              >
                <Image src={AppStore} alt="Download on the App Store" />
              </a>
              <a
                className="hover:scale-110 hover:duration-500 hover:cursor-pointer"
                href="https://play.google.com/store/apps/details?id=com.libertypay.b2c"
              >
                <Image src={GooglePlay} alt="Download on Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentVsApp;
