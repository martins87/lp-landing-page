import { FC } from "react";
import Image from "next/image";

type FeatureCardProps = {
  icon: any;
  label: string;
  description: string;
};

const FeatureCard: FC<FeatureCardProps> = ({ icon, label, description }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[420px] min-w-[400px] h-96 rounded-[30px] shadow-md gap-y-8">
      {/* <div className="flex flex-col items-center justify-center w-[420px] min-w-[400px] h-96 gap-y-8"> */}
      <div className="flex items-center justify-center w-[150px] h-[150px] bg-really-light-green rounded-full">
        {/* <div className="flex items-center justify-center w-[150px] h-[150px]"> */}
        <Image src={icon} alt="icon" />
      </div>
      <h5 className="text-3xl text-green text-center font-bold tracking-wide">
        {label}
      </h5>
      <h5 className="text-xl text-green text-center px-8">{description}</h5>
    </div>
  );
};

export default FeatureCard;
