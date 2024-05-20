import { FC } from "react";

import ReviewBox from "./ReviewBox";
import Container from "../../ui/Container";

const reviews = [
  {
    review:
      "So happy to have this app! I've been suffering dealing with terrible money transfer services like Western Union for years. LibertyPay is so much better!",
    customerName: "Simon S.",
    detail: "10/11/2023",
    version: "app",
  },
  {
    review:
      "O APP é muito fácil de usar! Fiz o meu cadastro, inseri um destinatário e em menos de 4h após o depósito do valor já chegou no Brasil. Seguro, rápido e prático!",
    customerName: "Samara Brito",
    detail: "01/03/2024",
    version: "app",
  },
  {
    review:
      "Usei pela primeira vez o aplicativo durante uma viagem de férias para a Flórida. Em pleno feriado transferi dinheiro para o Brasil de forma segura, rápida e eficiente. Recomendo com certeza.",
    customerName: "Vania Hohenstein",
    detail: "01/05/2024",
    version: "app",
  },
  {
    review:
      "A Libertypay é minha favorita, devido à grande facilidade que tenho para trabalhar com essa empresa. Fácil acesso para falarmos, ajudam quando necessário, pagam pontualmente e me dão o melhor profit, se comparando com as demais. Os funcionários são bastante educados e cordiais.",
    customerName: "Cirlene",
    detail: "Store Owner - Somerville, MA",
    version: "agent",
  },
  {
    review:
      "My first LibertyPay transaction I got a call from my family back home that the money arrived before I left the store!",
    customerName: "Maria J.",
    detail: "Customer - Boston, MA",
    version: "agent",
  },
  {
    review:
      "LibertyPay added a new revenue stream for my store, but the amount of new foot traffic I receive is incredible",
    customerName: "Vagmar S",
    detail: "Store Owner - Plymouth, MA",
    version: "agent",
  },
];

type SocialProofProps = {
  agentsVersion?: boolean;
};

const SocialProof: FC<SocialProofProps> = ({ agentsVersion }) => {
  const reviewsToShow = agentsVersion
    ? reviews.filter((r) => r.version === "agent")
    : reviews.filter((r) => r.version !== "agent");

  return (
    <Container>
      <section
        className="w-full xl:w-[60%] ultrawide:w-[50%] flex flex-col gap-y-10 tablet:gap-y-14 mx-10 xl:mx-0 my-24 tablet:my-16 items-center"
        id="social-proof"
      >
        <div className="flex flex-col gap-y-1 text-center">
          <div className="text-2xl mobile:text-3xl font-bold text-regular-green">
            Customer reviews
          </div>
          <div className="text-base mobile:text-lg xl:text-xl text-green">
            What our customers and agents say about us
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-evenly gap-6">
          {reviewsToShow.map((review, index) => (
            <ReviewBox
              key={+review + index}
              review={review.review}
              customerName={review.customerName}
              detail={review.detail}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default SocialProof;
