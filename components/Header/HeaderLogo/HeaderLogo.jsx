import React from "react";
import Link from "next/link";
import Image from "next/image";

import { logo } from "@/images/logo/logo.js";

export default function HeaderLogo() {
  return (
    <Link
      href={"/"}
      className="w-[113px] md:w-[130px] lg:w-[140px] xl:w-[160px]"
    >
      <Image src={logo} alt="Лого" className="w-full h-full" priority />
    </Link>
  );
}
