import { FC } from "react";

import StarIcon from "./StarIcon";

type ReviewBoxProps = {
  review: string;
  customerName: string;
  date: string;
};

const ReviewBox: FC<ReviewBoxProps> = ({ review, customerName, date }) => {
  return (
    <div className="w-96 h-96 flex rounded-[30px] shadow-xl">
      <div className="relative flex flex-col p-8 gap-2">
        <div className="flex mb-4">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="max-w-80 font-sans font-normal text-[18px] leading-8 text-black">
          {review}
        </div>
        <div className="absolute bottom-5">
          <div className="text-2xl leading-7 text-black font-bold mb-1">
            {customerName}
          </div>
          <div className="text-base leading-7 text-black/50">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
