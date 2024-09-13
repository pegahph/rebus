import { FunctionComponent } from "react";
import { IconProps } from ".";

export const MinusIcon: FunctionComponent<IconProps> = ({ size = 30 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M7.87944 16.4417H22.2474C22.9863 16.4417 23.5944 15.8336 23.5944 15.0947C23.5944 14.3558 22.9863 13.7477 22.2474 13.7477H7.87944C7.14056 13.7477 6.53245 14.3558 6.53245 15.0947C6.53245 15.8336 7.14056 16.4417 7.87944 16.4417Z"
        fill="white"
        stroke="white"
        stroke-width="0.897996"
      />
    </svg>
  );
};
