import { ChevronDownIcon } from "@/components/icons";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { FunctionComponent } from "react";

export interface NavbarItemType {
  id: string;
  title: string;
  children?: Omit<NavbarItemType, "children">[];
}

interface NavbarItemProps extends NavbarItemType {
  active?: boolean;
  onItemSelect: (id: string) => void;
}

const NavbarItem: FunctionComponent<NavbarItemProps> = ({
  id,
  title,
  active,
  children,
  onItemSelect,
}) => {
  const t = useTranslations("navbar");
  return (
    <div
      className={`py-2 px-4 rounded-full text-white transition-all duration-300 cursor-pointer flex items-center gap-1 ${
        active ? "bg-primary-main" : ""
      } uppercase font-mickyMouse text-xl font-normal`}
      style={{
        WebkitTextStroke: "1px black"
      }}
      onClick={() => onItemSelect(id)}
    >
      {t(title)}
      {children ? <ChevronDownIcon /> : null}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../../../locales/${context.locale}.json`))
        .default,
    },
  };
};

export default NavbarItem;
