import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type FeatureCardProps = {
  icon: any;
  label: string;
  description: string;
};

const responsiveClasses = {
  mobile: "w-auto h-auto",
  tablet: "tablet:h-[311px]",
  xl: "xl:w-[384px] xl:min-w-[336] xl:h-[320px]",
  xl2: "2xl:w-[420px] 2xl:h-[360px]",
};

const FeatureCard: FC<FeatureCardProps> = ({ icon, label, description }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col mobile:flex-row tablet:flex-col items-center justify-center rounded-[30px] xl:shadow-card gap-y-4 xl:gap-y-6",
        Object.values(responsiveClasses)
      )}
    >
      <div className="flex items-center justify-center w-[135px] h-[135px] xl:w-[150px] xl:h-[150px] bg-really-light-green rounded-full">
        <Image
          className="w-[65px] h-[65px] xl:w-[72px] xl:h-[72px]"
          src={icon}
          alt="icon"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-2xl text-green text-center font-bold tracking-wide">
          {label}
        </h5>
        <h5 className="text-base text-green text-center px-8 max-w-[312px] xl:max-w-[346px]">
          {description}
        </h5>
      </div>
    </div>
  );
};

export default FeatureCard;
