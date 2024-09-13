import { Package, packageSizes } from "@/enums/packageSizes";
import { ToyContext } from "@/providers/ToyProvider";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { DollarIcon, IconProps, MeasureIcon } from "../icons";

interface CartProps {}

interface PriceDivProps extends PropsWithChildren {
  className?: string;
  title: string;
  Icon: React.ComponentType<IconProps>;
  price: number;
}

const PriceDiv: FunctionComponent<PriceDivProps> = ({
  Icon,
  title,
  className = "",
  price,
}) => (
  <div
    className={`bg-[#EFEFEF] p-2 flex gap-2 items-center justify-between rounded-full font-black h-10 ${className}`}
  >
    <div className="flex items-center gap-2">
      <Icon />
      <span>{title}</span>
    </div>
    ${price.toFixed(2)}
  </div>
);

const Cart: FunctionComponent<CartProps> = () => {
  const t = useTranslations();
  const context = useContext(ToyContext);
  if (!context)
    throw new Error("ShoppingCart must be used within a ToyProvider");
  const { getTotalCount, selectedToys } = context;
  const count = getTotalCount();
  const findPackageSize = (totalVolume: number): Package => {
    const sortedPackages = [...packageSizes].sort((a, b) => {
      const volumeA = a.size.x * a.size.y * a.size.z;
      const volumeB = b.size.x * b.size.y * b.size.z;
      return volumeA - volumeB;
    });

    const appropriatePackage = sortedPackages.find((pkg) => {
      const packageVolume = pkg.size.x * pkg.size.y * pkg.size.z;
      return packageVolume >= totalVolume;
    });

    return appropriatePackage || packageSizes[0]; // Return null if no package is large enough
  };

  const packagePrice = useMemo(() => {
    const totalVolume = selectedToys.reduce((total, toy) => {
      const { x, y, z, unit } = toy.size;
      const conversionFactor = unit === "cm" ? 1 : 0.1; // 1 cm = 10 mm
      const volume = x * y * z * conversionFactor ** 3;
      return total + volume * toy.count;
    }, 0);
    const bestPackage = findPackageSize(totalVolume);

    return bestPackage.cost || 0;
  }, [selectedToys]);
  const price = useMemo(
    () =>
      selectedToys.reduce((sumPrice, toy) => toy.cost + sumPrice, 0) +
      packagePrice,
    [selectedToys, packagePrice]
  );
  return (
    <div className="w-full flex justify-center items-center fixed bottom-10">
      {count > 0 ? (
        <div className="bg-white rounded-[30px] flex items-center md:w-[987px] p-[14px] relative pr-20 gap-[30px]">
          <span className="bg-[#D7D7D7] text-black w-[40px] h-[40px] rounded-full font-black flex items-center justify-center">
            {count}
          </span>
          <div className="flex-1 flex items-start gap-1">
            {selectedToys.map((selectedToy) => (
              <div
                key={selectedToy.id}
                className="flex flex-col gap-2 justify-center items-center"
              >
                <div
                  className="w-[85px] h-[40px]"
                  style={{
                    background:
                      "inear-gradient(180deg, rgba(255, 255, 255, 0.79) 0%, #FFF 100%)",
                  }}
                >
                  <Image
                    src={selectedToy.image}
                    alt=""
                    width={71}
                    height={39}
                  />
                </div>

                <span className="bg-red-main rounded-full text-white flex items-center justify-center w-6 h-6">
                  {selectedToy.count}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <PriceDiv
              Icon={MeasureIcon}
              title={t("packtingPrice")}
              className="text-base"
              price={packagePrice}
            />
            <PriceDiv
              Icon={DollarIcon}
              title={t("price")}
              className="text-[22px]"
              price={price}
            />
          </div>
          <Image
            src="/assets/cart.png"
            width={190}
            height={190}
            alt="cart"
            className="absolute -right-28"
          />
        </div>
      ) : null}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../locales/${context.locale}.json`)).default,
    },
  };
};

export default Cart;
