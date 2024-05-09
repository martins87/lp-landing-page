import { FC } from "react";

import StarIcon from "./StarIcon";

type ReviewBoxProps = {
  review: string;
  customerName: string;
  date: string;
};

const ReviewBox: FC<ReviewBoxProps> = ({ review, customerName, date }) => {
  return (
    <div className="w-full sm:w-auto h-auto min-h-[360px] flex rounded-[30px] shadow-card">
      <div className="flex flex-col p-8 gap-2">
        <div className="flex mb-4">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="flex flex-1 max-w-80 font-sans font-normal text-base leading-8 text-black">
          {review}
        </div>
        <div>
          <div className="text-xl leading-7 text-black font-bold mb-1">
            {customerName}
          </div>
          <div className="text-base leading-7 text-black/50">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
