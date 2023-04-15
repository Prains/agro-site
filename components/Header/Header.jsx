import React from "react";
import HeaderMobileNavigation from "@/components/Header/HeaderMobileNavigation/HeaderMobileNavigation";
import HeaderNavigationList from "@/components/Header/HeaderNavigationList/HeaderNavigationList";
import HeaderLogo from "@/components/Header/HeaderLogo/HeaderLogo";

import { navigationItems } from "./navigationItems";

const Header = () => {
  return (
    <header className="w-[87%] flex flex-row justify-between items-center h-[66px] md:h-[72px] xl:h-[84px]">
      <HeaderLogo />
      <HeaderNavigationList navigationItems={navigationItems} />
      <HeaderMobileNavigation navigationItems={navigationItems} />
    </header>
  );
};

export default Header;
