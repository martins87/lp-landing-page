import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../assets/LibertyIcon.svg";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import YouTubeIcon from "./YouTubeIcon";

const links = [
  { label: "Contact us", url: "https://libertypay.activehosted.com/f/1" },
  { label: "Careers", url: "https://libertypay.com/careers.html" },
  { label: "Privacy Policy", url: "https://libertypay.com/privacy.html" },
  { label: "Terms of Service", url: "https://libertypay.com/terms.html" },
  { label: "Licensed States", url: "https://libertypay.com/licenses.html" },
  {
    label: "Prevention on frauds",
    url: "https://libertypay.com/fraud.html",
  },
];

const Footer: FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-[500px] bg-really-light-green/50">
      <div className="flex justify-between w-[75%] gap-x-32">
        <div className="-mt-5 min-w-48">
          <Image
            className="min-w-[243px] min-h-[63px]"
            src={logo}
            alt="Liberty Pay logo"
          />
        </div>
        <div className="min-w-48">
          <h3 className="text-2xl uppercase text-green font-bold mb-8">
            company
          </h3>
          <ul>
            {links.map((link) => (
              <li className="mb-2 hover:font-bold" key={link.label}>
                <Link href={link.url} rel="noopener noreferrer" target="_blank">
                  <h5 className="text-xl text-green">{link.label}</h5>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-48">
          <h3 className="text-2xl uppercase text-green font-bold mb-8">
            follow us
          </h3>
          <div className="flex gap-x-6">
            <Link
              className="hover:scale-110"
              href="https://www.instagram.com/getlibertypay/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon width="36" height="36" />
            </Link>
            <Link
              className="-mt-[2px] hover:scale-110"
              href="https://www.facebook.com/GetLibertyPay/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon width="40" height="40" />
            </Link>
            <Link
              className="-m-[1px] hover:scale-110"
              href="https://www.youtube.com/@libertypay6761"
              rel="noopener noreferrer"
              target="_blank"
            >
              <YouTubeIcon width="40" height="40" />
            </Link>
          </div>
        </div>
        <div className="min-w-48">
          <h3 className="text-xl text-green mb-2">
            TIAGN I, Inc. NMLS # 1505655
          </h3>
          <h3 className="text-xl text-green ">
            TIAGN I Brasil Serviços De Tecnologia LTDA
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
