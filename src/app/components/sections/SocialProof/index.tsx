import { FC } from "react";

import ReviewBox from "./ReviewBox";

const reviews = [
  {
    review:
      "So happy to have this app! I've been suffering dealing with terrible money transfer services like Western Union for years. LibertyPay is so much better!",
    customerName: "Simon S.",
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
    customerName: "Vania Hohenstein",
    date: "01/05/2024",
  },
];

const SocialProof: FC = () => {
  return (
    <section
      className="w-full h-auto flex items-center justify-center bg-white"
      id="social-proof"
    >
      <div className="w-full xl:w-[60%] flex flex-col gap-y-20 tablet:gap-y-28 mx-10 xl:mx-0 my-24 tablet:my-16 items-center">
        <div className="flex flex-col gap-y-2 xl:gap-y-2 text-center">
          <div className="text-2xl mobile:text-3xl xl:text-4xl font-bold text-regular-green tracking-wide">
            Customer reviews
          </div>
          <div className="text-base mobile:text-lg xl:text-xl text-black">
            What our customers and agents say about us
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly gap-6">
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
    </section>
  );
};

export default SocialProof;
