import { FC } from "react";
import Image from "next/image";

import ConvenienceStore from "../../../app/assets/images/convenience-store-2.jpeg";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

const Agents: FC = () => {
  return (
    <Container>
      <section className="w-full xl:w-[60%] ultrawide:w-[50%] h-auto flex items-center justify-center flex-col tablet:flex-row mx-10 xl:mx-0 my-24 tablet:my-32 gap-16 tablet:gap-20 xl:gap-28">
        <div className="w-[90%] mobile:w-[60%] tablet:w-full ultrawide:w-[50%] rounded-[50px]">
          <Image
            className="rounded-[50px] z-[2] drop-shadow-agents-card"
            src={ConvenienceStore}
            alt="Convenience store"
          />
        </div>
        <div className="flex flex-col items-center tablet:items-start justify-center gap-12">
          <div className="flex flex-col gap-4 text-center tablet:text-left">
            <h2 className="text-green-xl text-3xl font-bold">
              Licensed Agent Stores
            </h2>
            <h5 className="text-green text-lg font-normal">
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
      </section>
    </Container>
  );
};

export default Agents;
