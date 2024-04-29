import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  href: string;
  white?: boolean;
  capitalize?: boolean;
  children: ReactNode;
};

const Button = ({ href, white, capitalize, children }: ButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className={twMerge(
        "flex items-center justify-center rounded-full px-10 py-3 mt-14 mx-auto text-center text-4xl drop-shadow-3xl",
        capitalize ? "capitalize" : "",
        white
          ? "bg-white text-btn-text hover:bg-btn-green hover:bg-opacity-10 hover:text-white"
          : "bg-btn-green text-white hover:bg-white hover:bg-opacity-10 hover:text-btn-text"
      )}
    >
      {children}
    </a>
  );
};

export default Button;