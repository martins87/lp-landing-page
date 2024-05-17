import { FC } from "react";
import Image from "next/image";

import ConvenienceStore from "../../../assets/images/convenience-store-3.jpeg";
import Button from "../../ui/Button";

const Agents: FC = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center bg-white">
      <div className="w-full tablet:w-[60%] h-auto mx-10 xl:mx-0 my-24 tablet:my-16 flex flex-col tablet:flex-row justify-between gap-4 tablet:gap-10 xl:gap-28">
        <div className="scale-75 lg:scale-90 xl:scale-95 2xl:scale-100 relative flex items-center justify-center gap-3 xl:py-20 rounded-[50px]">
          <div className="mx-auto">
            <Image
              className="w-fit rounded-3xl z-[2]"
              src={ConvenienceStore}
              alt="Convenience store"
            />
          </div>
        </div>
        <div className="flex flex-col items-center tablet:items-start justify-center gap-12">
          <div className="flex flex-col gap-4 text-center tablet:text-left">
            <h2 className="text-green-xl text-3xl font-bold">
              Licensed Agent Stores
            </h2>
            <h5 className="text-green text-lg font-sans font-normal">
              Ideally located on your trusted convenience store, all the
              benefits of sending with LibertyPay at your everyday store.
            </h5>
          </div>
          <div className="flex gap-4 lg:gap-4 flex-col xl:flex-row">
            <Button href="https://libertypay.activehosted.com/f/1">
              Add LibertyPay to my store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
