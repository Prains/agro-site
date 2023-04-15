import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fallDown as Menu } from "react-burger-menu";
import NavigationHamburgerItem from "@/components/Header/HeaderMobileNavigation/HeaderHamburger/NavigationHamburgerItem/NavigationHamburgerItem";

import { burger, close } from "@/images/icons/icons.js";

// стили для библиотеки react-burger-menu
const styles = {
  bmBurgerButton: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  bmCrossButton: {
    position: "absolute",
    top: "17px",
    right: "17px",
    height: "26px",
    width: "26px",
  },
  bmMenuWrap: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  bmMenu: {
    background: "#ffffff",
    fontSize: "20px",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#191919",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    fontFamily: "HeliosCond",
    display: "inline-block",
    padding: "16px 7%",
  },
  bmOverlay: {
    background: "transparent",
  },
};

export default function HeaderHamburger({ navigationItems }) {
  return (
    <div className="ml-[6px] md:hidden">
      <Menu
        customBurgerIcon={<Image src={burger} alt="menu" priority />}
        customCrossIcon={<Image src={close} alt="close" />}
        styles={styles}
      >
        <h1 className="font-bold border-b-[1px] border-solid border-[#c2c2c2]">
          Меню раздела
        </h1>
        <nav>
          <ul>
            <li className="py-[10px]">
              <Link href={"/"}>Главная</Link>
            </li>
            {navigationItems.map((nav, i) => (
              <NavigationHamburgerItem key={i} {...nav} />
            ))}
          </ul>
        </nav>
      </Menu>
    </div>
  );
}
