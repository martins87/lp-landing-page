import { FC } from "react";
import Image from "next/image";

type FlagBoxProps = {
  flag: any;
};

const FlagBox: FC<FlagBoxProps> = ({ flag }) => {
  return (
    <div>
      <Image
        className="rounded-full w-16 h-16 min-w-16 mobile:w-20 mobile:h-20 mobile:min-w-20 mobile:min-h-20 sm:w-28 sm:h-28 sm:min-w-28 xl:w-32 xl:h-32 xl:min-h-32 drop-shadow-2xl"
        src={flag}
        alt="country flag"
      />
    </div>
  );
};

export default FlagBox;
