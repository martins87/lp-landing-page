import { FC } from "react";
import Image from "next/image";

import Button from "../../ui/Button";
import AgentModel from "../../../assets/Agent-model.png";
import MobileApp from "../../../assets/Mobile-App.svg";

const AgentVsApp: FC = () => {
  return (
    <div className="relative w-full h-[1100px] flex justify-center bg-really-light-green">
      <div className="absolute flex justify-between w-[70%] mt-40">
        <Image src={AgentModel} alt="Agent Model" />
        <div className="flex flex-col items-center justify-center w-[589px] text-center">
          <h2 className="text-green text-[52px] leading-[60px] font-bold">
            Licensed Agent Stores
          </h2>
          <h5 className="text-green font-sans font-normal text-[27px] mt-8">
            Ideally located on your trusted convenience store, all the benefits
            of sending with LibertyPay at your everyday store!
          </h5>
          <Button href="#">Add LibertyPay to my store</Button>
        </div>
      </div>
      <Image
        className="absolute right-[10%] bottom-0 w-[549px] h-[549px]"
        src={MobileApp}
        alt="Mobile app"
      />
      <div className="absolute bottom-28 left-[20%] mt-[35%]">
        <div className="flex flex-col items-center justify-center w-[589px] text-center">
          <h2 className="text-green text-[52px] leading-[60px] font-bold">
            Mobile app
          </h2>
          <h5 className="text-green font-sans font-normal text-[27px] mt-8">
            Send money home from the convenience of your own phone. Download the
            LibertyPay App and start saving!
          </h5>
          <Button href="#">Download the LibertyPay App</Button>
        </div>
      </div>
    </div>
  );
};

export default AgentVsApp;
