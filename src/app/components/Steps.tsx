import { FC } from "react";
import Image from "next/image";

import Step1 from "../assets/Step1.png";
import Step2 from "../assets/Step2.png";
import Step3 from "../assets/Step3.png";
import Step4 from "../assets/Step4.png";
import Step5 from "../assets/Step5.png";

const Steps: FC = () => {
  return (
    <div className="w-full h-[1100px] flex flex-col items-center justify-center bg-white">
      <h1 className="text-[64px] text-green-bg mb-20">5 simple steps</h1>
      <div className="flex items-center gap-x-10">
        <Image className="w-[253px] h-[497px]" src={Step1} alt="Step 1" />
        <Image className="w-[253px] h-[497px]" src={Step2} alt="Step 2" />
        <Image className="w-[326px] h-[574px]" src={Step3} alt="Step 3" />
        <Image className="w-[253px] h-[497px]" src={Step4} alt="Step 4" />
        <Image className="w-[253px] h-[497px]" src={Step5} alt="Step 5" />
      </div>
    </div>
  );
};

export default Steps;
