import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  href: string;
  white?: boolean;
  capitalize?: boolean;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ href, white, capitalize, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={twMerge(
        "flex items-center justify-center rounded-full px-10 py-3 w-fit text-xl drop-shadow-3xl",
        capitalize ? "capitalize" : "",
        white
          ? "bg-white text-btn-text hover:bg-regular-green hover:bg-opacity-10 hover:text-white"
          : "bg-regular-green text-white hover:bg-green-xl hover:duration-100"
      )}
    >
      {children}
    </a>
  );
};

export default Button;
