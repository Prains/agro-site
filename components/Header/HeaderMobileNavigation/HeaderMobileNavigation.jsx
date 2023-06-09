import React from "react";
import { Button } from "@/components/ui";
import HeaderHamburger from "@/components/Header/HeaderMobileNavigation/HeaderHamburger/HeaderHamburger";

export default function HeaderNavigation({ navigationItems }) {
  return (
    <div className="flex flex-row items-center ">
      <Button
        type={"primary"}
        href={"/"}
        className="px-[11px] w-[110px] flex items-center font-bold md:text-[9px] lg:w-[180px] lg:text-[13px] lg:px-[30px] xl:w-[210px]"
      >
        Оставить заявку
      </Button>
      <HeaderHamburger navigationItems={navigationItems} />
    </div>
  );
}
