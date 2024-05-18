import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "w-full h-auto flex items-center justify-center bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
