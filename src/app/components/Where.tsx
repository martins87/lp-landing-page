import Image from "next/image";

import ExchangeBox from "../assets/Exchange-box.png";

const Where = () => {
  return (
    <div className="w-full h-[1100px] flex items-center justify-center bg-gradient-to-t from-dark-green to-light-green">
      <div className="flex flex-col w-[594px] items-center gap-y-12 text-center text-white">
        <h2 className="text-7xl">
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
