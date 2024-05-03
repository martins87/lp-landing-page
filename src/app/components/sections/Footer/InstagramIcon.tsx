import { FC } from "react";

type InstagramIconProps = {
  width: string;
  height: string;
};

const InstagramIcon: FC<InstagramIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.6397 0C46.3577 0 44.1888 0.0755694 37.4011 0.384471C30.6267 0.694698 26.0026 1.76724 21.9565 3.34091C17.7712 4.96629 14.221 7.14053 10.684 10.679C7.14429 14.2161 4.97011 17.7665 3.33948 21.9506C1.76188 25.9981 0.688047 30.6237 0.383132 37.3956C0.0795425 44.1835 0 46.3538 0 63.6364C0 80.9189 0.0768928 83.0813 0.384459 89.8691C0.696003 96.6438 1.76851 101.268 3.34081 105.314C4.96746 109.5 7.14164 113.05 10.68 116.587C14.2157 120.127 17.7659 122.306 21.9486 123.932C25.9973 125.506 30.6227 126.578 37.3958 126.888C44.1835 127.197 46.3511 127.273 63.6318 127.273C80.9152 127.273 83.0774 127.197 89.8651 126.888C96.6395 126.578 101.269 125.506 105.318 123.932C109.502 122.306 113.047 120.127 116.582 116.587C120.122 113.05 122.296 109.5 123.927 105.316C125.491 101.268 126.565 96.6424 126.883 89.8705C127.188 83.0826 127.268 80.9189 127.268 63.6364C127.268 46.3538 127.188 44.1848 126.883 37.397C126.565 30.6223 125.491 25.9981 123.927 21.9519C122.296 17.7665 120.122 14.2161 116.582 10.679C113.043 7.1392 109.503 4.96496 105.314 3.34091C101.257 1.76724 96.6302 0.694698 89.8558 0.384471C83.0681 0.0755694 80.9072 0 63.6199 0H63.6397ZM57.9312 11.4678C59.6255 11.4652 61.5159 11.4678 63.6397 11.4678C80.6301 11.4678 82.6439 11.5288 89.3534 11.8337C95.5577 12.1174 98.925 13.1542 101.168 14.0252C104.138 15.1786 106.255 16.5574 108.481 18.7847C110.708 21.0119 112.087 23.1331 113.243 26.1028C114.114 28.3434 115.152 31.7108 115.434 37.9153C115.739 44.6237 115.805 46.6388 115.805 63.6218C115.805 80.6047 115.739 82.6199 115.434 89.3282C115.15 95.5328 114.114 98.9002 113.243 101.141C112.089 104.11 110.708 106.225 108.481 108.451C106.254 110.678 104.139 112.057 101.168 113.21C98.9277 114.085 95.5577 115.12 89.3534 115.403C82.6452 115.708 80.6301 115.774 63.6397 115.774C46.648 115.774 44.6343 115.708 37.9261 115.403C31.7218 115.117 28.3544 114.08 26.11 113.209C23.1404 112.056 21.0192 110.677 18.792 108.45C16.5648 106.222 15.1861 104.106 14.0301 101.135C13.1591 98.8949 12.121 95.5275 11.8387 89.3229C11.5337 82.6146 11.4728 80.5994 11.4728 63.6059C11.4728 46.6123 11.5337 44.6078 11.8387 37.8994C12.1224 31.6949 13.1591 28.3275 14.0301 26.0843C15.1834 23.1146 16.5648 20.9934 18.792 18.7661C21.0192 16.5388 23.1404 15.16 26.11 14.004C28.3531 13.129 31.7218 12.0949 37.9261 11.8098C43.7964 11.5447 46.0713 11.4652 57.9312 11.4519V11.4678ZM97.6073 22.0341C93.3915 22.0341 89.9711 25.4506 89.9711 29.6678C89.9711 33.8837 93.3915 37.3042 97.6073 37.3042C101.823 37.3042 105.243 33.8837 105.243 29.6678C105.243 25.4519 101.823 22.0314 97.6073 22.0314V22.0341ZM63.6397 30.9564C45.5927 30.9564 30.9608 45.5888 30.9608 63.6364C30.9608 81.6839 45.5927 96.3097 63.6397 96.3097C81.6867 96.3097 96.3134 81.6839 96.3134 63.6364C96.3134 45.5888 81.6854 30.9564 63.6384 30.9564H63.6397ZM63.6397 42.4242C75.3538 42.4242 84.8512 51.9206 84.8512 63.6364C84.8512 75.3508 75.3538 84.8485 63.6397 84.8485C51.9244 84.8485 42.4283 75.3508 42.4283 63.6364C42.4283 51.9206 51.9244 42.4242 63.6397 42.4242Z"
        // The icon color was defined here
        fill="#5A4F4F"
      />
    </svg>
  );
};

export default InstagramIcon;