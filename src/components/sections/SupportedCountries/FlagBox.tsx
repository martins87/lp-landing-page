import { FC } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type FlagBoxProps = {
  flag: any;
};

const responsiveClasses = {
  default: "rounded-full w-16 h-16 min-w-16 drop-shadow-2xl",
  mobile: "mobile:w-20 mobile:h-20 mobile:min-w-20 mobile:min-h-20",
  xl: "xl:w-28 xl:h-28 xl:min-w-28 xl:min-h-28",
};

const FlagBox: FC<FlagBoxProps> = ({ flag }) => {
  return (
    <div>
      <Image
        className={twMerge(Object.values(responsiveClasses))}
        src={flag}
        alt="country flag"
      />
    </div>
  );
};

export default FlagBox;
