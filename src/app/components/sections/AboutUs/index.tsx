import { FC } from "react";
import Image from "next/image";

import Button from "../../ui/Button";
import RoundedIcon from "./RoundedIcon";
import FastIcon from "../../../assets/FastIcon.svg";
import WalletIcon from "../../../assets/WalletIcon.svg";
import ClipIcon from "../../../assets/ClipIcon.svg";
import AppleLogo from "../../../assets/AppleLogoWhite.png";
import GooglePlayLogo from "../../../assets/GooglePlayLogo.svg";

const icons = [
  { icon: FastIcon, label: "Fast", style: "-mt-6" },
  { icon: WalletIcon, label: "Best rate", style: "-mt-3 ml-2" },
  { icon: ClipIcon, label: "Safe", style: "mt-2" },
];

const AboutUs: FC = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-white" id="about-us">
      <div className="flex flex-col my-48  w-[60%]">
        <h2 className="text-[52px] text-dark-green text-center leading-[60px]">
          Connecting you to your family since 2016
        </h2>
        <h5 className="mt-2 font-sans font-normal text-[27px] text-center">
          The fastest and cheapest way to send money to friends or loved ones.
        </h5>
        <div className="flex justify-between mt-28">
          {icons.map((i) => (
            <RoundedIcon
              key={i.label}
              icon={i.icon}
              label={i.label}
              style={i.style}
            />
          ))}
        </div>
        <div className="flex items-center justify-evenly mt-20">
          <Button href="#">
            <div className="flex items-center gap-4">
              <Image width={50} height={50} src={AppleLogo} alt="Apple logo" />
              <div className="flex flex-col">
                <span className="text-xl">{"Available on the"}</span>
                <span className="-mt-1">{"Apple Store"}</span>
              </div>
            </div>
          </Button>
          <Button href="#">
            <div className="flex items-center gap-4">
              <Image
                width={50}
                height={50}
                src={GooglePlayLogo}
                alt="Apple logo"
              />
              <div className="flex flex-col">
                <span className="text-xl">{"Available on"}</span>
                <span className="-mt-1">{"Google Play"}</span>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
