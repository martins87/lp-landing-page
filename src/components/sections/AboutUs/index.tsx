import { FC } from "react";

import FeatureCard from "./FeatureCard";
import StopWatch from "../../../app/assets/images/Stopwatch.svg";
import MoneyBag from "../../../app/assets/images/MoneyBag.svg";
import Lock from "../../../app/assets/images/Lock.svg";
import Container from "../../ui/Container";

const icons = [
  {
    icon: StopWatch,
    label: "Fast",
    description: "Transactions complete fast with live updates",
  },
  {
    icon: MoneyBag,
    label: "Best rate",
    description: "Visit a location today and see how much you can save",
  },
  {
    icon: Lock,
    label: "Safe",
    description: "Regulated by State and Federal US Government Agencies",
  },
];

const AboutUs: FC = () => {
  return (
    <Container>
      <section
        className="w-full xl:w-[60%] h-auto flex flex-col mx-10 xl:mx-[12.5%] my-24 tablet:my-16"
        id="about-us"
      >
        <h2 className="text-2xl tablet:text-3xl text-green-xl text-center font-bold">
          Connecting you to your family since 2016
        </h2>
        <h5 className="text-green text-lg tablet:text-xl text-center mt-2">
          The fastest and cheapest way to send money to friends or loved ones.
        </h5>
        <div className="w-full flex flex-col tablet:flex-row justify-center mt-20 gap-16 tablet:gap-10">
          {icons.map((i) => (
            <FeatureCard
              key={i.label}
              icon={i.icon}
              label={i.label}
              description={i.description}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;
