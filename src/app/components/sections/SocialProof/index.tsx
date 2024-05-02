import { FC } from "react";

import ReviewBox from "./ReviewBox";

const reviews = [
  {
    review:
      "So happy to have this app! I've been suffering dealing with terrible money transfer services like Western Union for years. LibertyPay is so much better!",
    customerName: "Simon$S",
    date: "10/11/2023",
  },
  {
    review:
      "O APP é muito fácil de usar! Fiz o meu cadastro, inseri um destinatário e em menos de 4h após o depósito do valor já chegou no Brasil. Seguro, rápido e prático!",
    customerName: "Samara Brito",
    date: "01/03/2024",
  },
  {
    review:
      "Usei pela primeira vez o aplicativo durante uma viagem de férias para a Flórida. Em pleno feriado transferi dinheiro para o Brasil de forma segura, rápida e eficiente. Recomendo com certeza.",
    customerName: "vaniahohenstein",
    date: "01/05/2024",
  },
];

const SocialProof: FC = () => {
  return (
    <div
      className="w-full h-[1100px] flex justify-center bg-white"
      id="social-proof"
    >
      <div className="flex flex-col gap-y-28 my-48 w-[60%] items-center">
        <div className="flex flex-col gap-y-4 text-center">
          <div className="text-4xl font-bold text-btn-green tracking-wide">
            Customer reviews
          </div>
          <div className="text-2xl text-black">
            What our customers and agents say about us
          </div>
        </div>
        <div className="grid grid-flow-col gap-x-[80px]">
          {reviews.map((review, index) => (
            <ReviewBox
              key={+review + index}
              review={review.review}
              customerName={review.customerName}
              date={review.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
