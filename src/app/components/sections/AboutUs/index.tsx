import { FC } from "react";

import FeatureCard from "./FeatureCard";
import StopWatch from "../../../assets/StopWatch.svg";
import MoneyBag from "../../../assets/MoneyBag.svg";
import Lock from "../../../assets/Lock.svg";

const icons = [
  {
    icon: StopWatch,
    label: "Fast",
    description: "Transactions complete fast with live updates.",
  },
  {
    icon: MoneyBag,
    label: "Best rate",
    description: "Visit a location today and see how much you can save.",
  },
  {
    icon: Lock,
    label: "Safe",
    description: "Regulated by State and Federal US Government Agencies.",
  },
];

const AboutUs: FC = () => {
  return (
    <div
      className="w-full h-auto flex items-center justify-center bg-white"
      id="about-us"
    >
      <div className="flex flex-col mx-[12.5%] my-48 w-full">
        <h2 className="text-5xl text-green text-center font-bold tracking-wide">
          Connecting you to your family since 2016
        </h2>
        <h5 className="font-sans font-normal text-green text-[24px] text-center mt-4">
          The fastest and cheapest way to send money to friends or loved ones.
        </h5>
        <div className="flex justify-between mt-28 gap-8">
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
    </div>
  );
};

export default AboutUs;
