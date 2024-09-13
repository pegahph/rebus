import { FunctionComponent } from "react";
import { IconProps } from ".";
import Image from "next/image";

export const ProfileIcon: FunctionComponent<IconProps> = ({ size = 28 }) => {
  return (
    <Image src={"/icons/profile.png"} width={size} height={size} alt="icon" />
  );
};
