import { FC } from "react";
import { twMerge } from "tailwind-merge";

import StarIcon from "./StarIcon";

type ReviewBoxProps = {
  review: string;
  customerName: string;
  detail: string;
};

const ReviewBox: FC<ReviewBoxProps> = ({ review, customerName, detail }) => {
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
        <div
          className={twMerge(
            "flex flex-1 max-w-80 leading-8 text-black",
            review.length > 180 ? "text-sm" : "text-base"
          )}
        >
          {review}
        </div>
        <div>
          <div className="text-xl leading-7 text-black font-bold">
            {customerName}
          </div>
          <div className="text-sm leading-7 text-black/50">{detail}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBox;
