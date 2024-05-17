import { FC } from "react";
import Image from "next/image";

import ConvenienceStore from "../../../assets/images/convenience-store-3.jpeg";
import Button from "../../ui/Button";

const Agents: FC = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center bg-white">
      <div className="w-full xl:w-[60%] h-auto flex items-center justify-center flex-col tablet:flex-row mx-10 xl:mx-0 my-24 tablet:my-32 gap-10 tablet:gap-20 xl:gap-28">
        <div className="w-[80%] mobile:w-[75%] tablet:w-full rounded-[50px]">
          <Image
            className="rounded-2xl z-[2]"
            src={ConvenienceStore}
            alt="Convenience store"
          />
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
              Add to my store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
