import { IconProps } from ".";

export const ChevronDownIcon = ({ size = 16 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size - 5}
      viewBox="0 0 16 11"
      fill="none"
    >
      <path
        d="M7.72618 4.45265L7.99386 4.62255L8.26169 4.45289L13.8175 0.933487L15.3049 2.4874L7.99439 9.99115L0.694833 2.48765L2.18225 0.933759L7.72618 4.45265Z"
        fill="white"
        stroke="black"
      />
    </svg>
  );
};
