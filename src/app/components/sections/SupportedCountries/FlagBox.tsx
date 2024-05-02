import { FC } from "react";
import Image from "next/image";

type FlagBoxProps = {
  flag: any;
};

const FlagBox: FC<FlagBoxProps> = ({ flag }) => {
  return (
    <div>
      <Image
        className="rounded-full w-32 h-32 min-w-32 min-h-32 drop-shadow-2xl"
        src={flag}
        alt="country flag"
      />
    </div>
  );
};

export default FlagBox;
