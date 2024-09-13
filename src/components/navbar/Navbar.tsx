import { navItems } from "@/enums/navItems";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import NavbarItem from "./items/NavbarItem";
import Profile from "../profile/Profile";
import ShoppingCart from "../shoppingCart/ShoppingCart";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [active, setActive] = useState<string>("toys");
  return (
    <div className="fixed top-5 left-0 right-0 flex justify-center w-full">
      <div className="bg-white rounded-full px-5 flex items-center justify-between backdrop-blur md:w-[987px] py-2">
        <Image src="/logo.svg" width={108} height={55} alt="logo" />
        <div className="flex items-center gap-[56px]">
          {navItems.map((item, i) => (
            <NavbarItem
              key={i}
              {...item}
              active={active === item.id}
              onItemSelect={(id) => setActive(id)}
            />
          ))}
          <ShoppingCart />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
