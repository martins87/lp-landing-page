import Image from "next/image";

import ModernDownloadApp from "../assets/Modern-Download-App-Instagram-Post.svg";

const Hero = () => {
  return (
    <div className="relative w-full h-[998px] bg-gradient-to-t  from-dark-green-bg to-light-green-bg">
      <div className="absolute flex flex-col w-[592px] h-96 mt-48 ml-44">
        <h1 className="text-7xl text-white drop-shadow-3xl leading-[86.4px] text-center">
          Save When
          <br />
          You Send With LibertyPay
        </h1>
        <h5 className="mt-6 text-white text-center font-sans text-[27px] font-bold leading-9 tracking-wider">
          Join us today and start sending with
          <br />
          the best rate in the market
        </h5>
        <a
          href="https://qrfy.com/p/vHeSi1I1Bv"
          target="_blank"
          className="bg-white rounded-full mt-14 w-[506px] h-[67px] py-3 mx-auto text-center capitalize text-btn-text text-4xl drop-shadow-3xl hover:bg-btn-text hover:text-white"
        >
          download the app
        </a>
      </div>
      <Image
        className="absolute right-0 w-[897.4px] h-[1039.5px]"
        src={ModernDownloadApp}
        alt="Modern Download App"
      />
    </div>
  );
};

export default Hero;
