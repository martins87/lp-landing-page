import { FC } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import YouTubeIcon from "./YouTubeIcon";
import Logo from "../../ui/Logo";

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
  const linksClass = "text-base text-green";

  return (
    <footer className="flex items-center justify-center w-full h-auto bg-really-light-green">
      <div className="flex flex-col tablet:flex-row gap-16 tablet:gap-0 justify-between w-full xl:w-[60%] mx-10 xl:mx-0 my-16">
        <div className="tablet:-mt-4 max-w-52 min-w-48">
          <Logo />
        </div>
        <div className="max-w-56 min-w-48 tablet:ml-10">
          <h3 className="text-lg 2xl:text-xl uppercase text-green font-bold mb-8">
            company
          </h3>
          <ul>
            {links.map((link) => (
              <li className="mb-2 hover:font-bold" key={link.label}>
                <Link href={link.url} rel="noopener noreferrer" target="_blank">
                  <h5 className={linksClass}>{link.label}</h5>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-56 min-w-48">
          <h3 className="text-lg 2xl:text-xl uppercase text-green font-bold mb-8">
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
          <h3 className={twMerge(linksClass, "mb-2")}>
            TIAGN I, Inc. NMLS # 1505655
          </h3>
          <h3 className={linksClass}>
            TIAGN I Brasil Serviços De Tecnologia LTDA
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
