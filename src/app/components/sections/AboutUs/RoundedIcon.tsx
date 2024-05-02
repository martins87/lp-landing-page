import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type RoundedIconProps = {
  icon: any;
  label: string;
  style?: string;
};

const RoundedIcon: FC<RoundedIconProps> = ({ icon, label, style }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-center w-[150px] h-[150px] bg-gradient-to-t  from-dark-green to-light-green rounded-full border">
        <Image className={twMerge(style)} src={icon} alt="Fast icon" />
      </div>
      <h5 className="text-4xl text-green text-center">{label}</h5>
    </div>
  );
};

export default RoundedIcon;
