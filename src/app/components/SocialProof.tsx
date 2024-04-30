import { FC } from "react";
import Image from "next/image";

import Customer1 from "../assets/Customer-1.png";
import Customer2 from "../assets/Customer-2.png";
import Customer3 from "../assets/Customer-3.png";

type ReviewBoxProps = {
  title: string;
  review: string;
  customerName: string;
  customerImage: any;
};

const ReviewBox: FC<ReviewBoxProps> = ({
  title,
  review,
  customerName,
  customerImage,
}) => {
  return (
    <div className="relative w-96 h-96 flex bg-card-gray rounded-[30px] drop-shadow-3xl">
      <div className="flex flex-col p-8">
        <div className="absolute top-7 text-4xl leading-[41px] text-black mb-4">
          {title}
        </div>
        <div className="absolute top-1/4 max-w-80 font-sans font-normal text-2xl leading-8 text-black">
          {review}
        </div>
        <div className="absolute bottom-7 flex items-center gap-10">
          <Image src={customerImage} alt="Customer image" />
          <div className="text-2xl leading-7 text-black">{customerName}</div>
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    title: "Best rate!",
    review:
      "Best rates, super-fast transfers, and excellent customer service. This app is a game-changer!",
    customerName: "Maria Souza",
    customerImage: Customer1,
  },
  {
    title: "Great Service",
    review:
      "Unmatched speed and value for US-Brazil transfers. Highly recommended!",
    customerName: "Denisse Silva",
    customerImage: Customer2,
  },
  {
    title: "Fastest option",
    review:
      "Fast, efficient, great rates! Makes sending money to Brazil a breeze.",
    customerName: "Joao Almeida",
    customerImage: Customer3,
  },
];

const SocialProof = () => {
  return (
    <div
      className="w-full h-[1100px] flex justify-center bg-white"
      id="social-proof"
    >
      <div className="flex flex-col gap-y-28 my-48 w-[60%] items-center">
        <div className="flex flex-col gap-y-4">
          <div className="text-[64px] capitalize leading-[74px] text-green-bg">
            customer reviews
          </div>
          <div className="font-sans font-normal text-black text-[27px] leading-[37px]">
            What our customers and agents say about us
          </div>
        </div>
        <div className="grid grid-flow-col gap-x-[80px]">
          {reviews.map((review, index) => (
            <ReviewBox
              key={+review + index}
              title={review.title}
              review={review.review}
              customerName={review.customerName}
              customerImage={review.customerImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
