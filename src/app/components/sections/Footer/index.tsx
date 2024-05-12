import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../assets/images/LibertyIcon.svg";
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
    <footer className="flex items-center justify-center w-full h-auto min-h-[500px] bg-really-light-green/50">
      <div className="flex flex-col tablet:flex-row gap-16 tablet:gap-0 justify-between w-full xl:w-[75%] mx-10 xl:mx-0 my-16">
        <div className="tablet:-mt-5 max-w-52 min-w-48">
          <Image
            className="w-36 md:w-auto md:min-w-[243px] md:min-h-[63px]"
            src={logo}
            alt="Liberty Pay logo"
          />
        </div>
        <div className="max-w-56 min-w-48 tablet:ml-10">
          <h3 className="text-xl 2xl:text-2xl uppercase text-green font-bold mb-8">
            company
          </h3>
          <ul>
            {links.map((link) => (
              <li className="mb-2 hover:font-bold" key={link.label}>
                <Link href={link.url} rel="noopener noreferrer" target="_blank">
                  <h5 className="text-lg 2xl:text-xl text-green">
                    {link.label}
                  </h5>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-56 min-w-48">
          <h3 className="text-xl 2xl:text-2xl uppercase text-green font-bold mb-8">
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
        <div className="tablet:max-w-56 min-w-48">
          <h3 className="text-lg 2xl:text-xl text-green mb-2">
            TIAGN I, Inc. NMLS # 1505655
          </h3>
          <h3 className="text-lg 2xl:text-xl text-green ">
            TIAGN I Brasil Serviços De Tecnologia LTDA
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
