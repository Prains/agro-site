import React from "react";
import HeaderNavigationItem from "./HeaderNavigationItem/HeaderNavigationItem";

export default function HeaderNavigationList({ navigationItems }) {
  return (
    <nav>
      <ul className="hidden md:flex md:flex-row md:block md:text-center">
        {navigationItems.map((nav, i) => (
          <HeaderNavigationItem key={i} {...nav} />
        ))}
      </ul>
    </nav>
  );
}
