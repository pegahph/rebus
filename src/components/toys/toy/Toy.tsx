import { MeasureIcon, MinusIcon, PlusIcon } from "@/components/icons";
import { ToyContext } from "@/providers/ToyProvider";
import Image from "next/image";
import { FunctionComponent, useContext } from "react";

interface ToyProps extends Toy {}

const Toy: FunctionComponent<ToyProps> = ({ ...toy }) => {
  const context = useContext(ToyContext);
  if (!context) throw new Error("Toy must be used within a ToyProvider");
  const { addToy, removeToy, getToyCount } = context;
  return (
    <div className="relative rounded-[18px] bg-white bg-opacity-70 p-3 flex flex-col justify-between gap-3">
      <div className="flex flex-col gap-3 -translate-y-[56px]">
        <Image src={toy.image} width={268} height={150} alt="" />
        <p className="bg-black rounded-[18px] text-primary-main text-[18px] italic font-black p-[11px]">
          {toy.description}
        </p>
      </div>
      <div className="flex flex-col gap-3 -mt-[56px]">
        <div className="flex items-center bg-white rounded-full gap-2 w-full p-2 font-black text-base text-secondary-main">
          <MeasureIcon />
          {`${toy.size.x}x${toy.size.y}x${toy.size.z} ${toy.size.unit}`}
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-secondary-main text-[22px] font-black">
            ${toy.cost}
          </p>
          <div className="flex items-center gap-6">
            {getToyCount(toy.id) > 0 ? (
              <>
                <button
                  className="bg-red-main rounded-full shadow-addButtonShadow w-8 h-8 flex items-center justify-center"
                  onClick={() => {
                    removeToy(toy.id);
                  }}
                >
                  <MinusIcon />
                </button>
                <span className="text-secondary-main text-[22px] font-black">
                  {getToyCount(toy.id)}
                </span>
              </>
            ) : null}
            <button
              className="bg-primary-main rounded-full shadow-addButtonShadow w-8 h-8 flex items-center justify-center"
              onClick={() => {
                addToy(toy);
              }}
            >
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
