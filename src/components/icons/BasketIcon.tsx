import { FunctionComponent } from "react";
import { IconProps } from ".";
import Image from "next/image";

export const BasketIcon: FunctionComponent<IconProps> = ({ size = 28 }) => {
  return (
    <Image src={"/icons/basket.png"} width={size} height={size} alt="icon" />
  );
};
