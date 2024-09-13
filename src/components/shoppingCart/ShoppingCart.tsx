import { ToyContext } from "@/providers/ToyProvider";
import { FunctionComponent, useContext } from "react";
import { BasketIcon } from "../icons";

interface ShoppingCardProps {}

const ShoppingCart: FunctionComponent<ShoppingCardProps> = () => {
  const context = useContext(ToyContext);
  if (!context)
    throw new Error("ShoppingCart must be used within a ToyProvider");
  const { getTotalCount } = context;
  const count = getTotalCount();
  return (
    <div className="relative">
      <BasketIcon />
      {count > 0 ? (
        <span className="bg-red-main text-white border-2 border-white rounded-full absolute w-[26px] h-[26px] -right-1/2  bottom-0 flex items-center justify-center font-black shrink-0 p-1">
          {count}
        </span>
      ) : null}
    </div>
  );
};

export default ShoppingCart;
