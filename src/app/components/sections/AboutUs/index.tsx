import { FC } from "react";

import FeatureCard from "./FeatureCard";
import StopWatch from "../../../assets/images/Stopwatch.svg";
import MoneyBag from "../../../assets/images/MoneyBag.svg";
import Lock from "../../../assets/images/Lock.svg";

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
    <section
      className="w-full h-auto min-h-[1000px] flex items-center justify-center bg-white"
      id="about-us"
    >
      <div className="w-full xl:w-[60%] h-auto flex flex-col mx-10 xl:mx-[12.5%] my-24 tablet:my-48">
        <h2 className="text-2xl tablet:text-3xl 2xl:text-4xl text-green-xl text-center font-bold">
          Connecting you to your family since 2016
        </h2>
        <h5 className="font-sans font-normal text-green text-lg tablet:text-xl text-center mt-2">
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
      </div>
    </section>
  );
};

export default AboutUs;
