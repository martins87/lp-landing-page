import { FC } from "react";
import Image from "next/image";

import ConvenienceStore from "../../../assets/images/convenience-store-3.jpeg";
import Button from "../../ui/Button";

const Agents: FC = () => {
  return (
    <section className="w-full flex items-center justify-center bg-white">
      {/* <div className="w-[75%] h-[75%] flex items-center justify-around gap-10"> */}
      <div className="w-[42.5%] h-[700px] flex flex-col justify-between p-14 bg-really-light-green rounded-[50px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-green text-3xl font-bold">
            Licensed Agent Stores
          </h2>
          <h5 className="text-green font-sans font-normal text-xl">
            Ideally located on your trusted convenience store, all the benefits
            of sending with LibertyPay at your everyday store.
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
    </section>
  );
};

export default Agents;
