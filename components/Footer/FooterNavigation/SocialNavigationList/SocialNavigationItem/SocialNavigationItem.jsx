import Image from "next/image";
import Link from "next/link";

export default function SocialNavigationItem({ title, img }) {
  return (
    <li className="text-[#c4c4c4] text-text text-[12px] leading-[95%] cursor-pointer ml-[12px] first:ml-[0px] md:ml-0 md:mt-[18px] md:first:mt-0 lg:mt-[22px]">
      <Link className="hidden md:block" href={"/"}>
        {title}
      </Link>
      <Link className="md:hidden" href={"/"}>
        <Image className="" src={img} alt={title} />
      </Link>
    </li>
  );
}
