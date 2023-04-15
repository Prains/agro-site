import React from "react";
import Link from "next/link";

export default function HeaderNavigationItem({ title, link }) {
  return (
    <li className="font-text text-[13px] text-[#5D5E61] pl-[12px] first:pl-0 lg:text-[14px] lg:pl-[30px] xl:pl-[42px]">
      <Link href={link}>{title}</Link>
    </li>
  );
}
