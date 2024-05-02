import { FC } from "react";
import Image from "next/image";

import ExchangeBox from "../../../assets/Exchange-box.png";

const Where: FC = () => {
  return (
    <div
      className="w-full h-[1100px] flex items-center justify-center bg-really-light-green"
      id="countries"
    >
      <div className="flex flex-col w-[594px] items-center gap-y-12 text-center text-green">
        <h2 className="text-7xl font-bold drop-shadow-3xl">
          Send from the
          <br />
          US to LATAM
        </h2>
        <h5 className="text-3xl">Find the full list here</h5>
        <Image src={ExchangeBox} alt="Exchange box" />
      </div>
    </div>
  );
};

export default Where;
