import React from "react";
import Link from "next/link";

export default function NavigationHamburgerItem({ link, title }) {
  return (
    <li className="py-[10px]">
      <Link href={link}>{title}</Link>
    </li>
  );
}
