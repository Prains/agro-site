import SocialNavigationItem from "@/components/Footer/FooterNavigation/SocialNavigationList/SocialNavigationItem/SocialNavigationItem";
import {
  instagramm,
  facebook,
  linkendin,
  youtube,
} from "@/images/icons/icons.js";

export default function SocialNavigationList() {
  const socials = [
    {
      img: instagramm,
      title: "Instagram",
    },
    {
      img: facebook,
      title: "Facebook",
    },

    {
      img: linkendin,
      title: "Linkedin",
    },
    {
      img: youtube,
      title: "Youtube",
    },
  ];

  return (
    <nav className="md:ml-[120px] ">
      <p className="hidden text-c4 font-title font-bold text-[16px] leading-[95%] mb-[20px] md:mb-[24px] lg:mb-[27px] md:block">
        Следи за нами
      </p>
      <ul className="flex flex-row items-center md:flex-col md:items-start">
        {socials.map((social, i) => (
          <SocialNavigationItem key={i} {...social} />
        ))}
      </ul>
    </nav>
  );
}
