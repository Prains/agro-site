import AboutNavigationItem from "@/components/Footer/FooterNavigation/AboutNavigationList/AboutNavigationItem/AboutNavigationItem";
import { Paragraph } from "@/components/ui";

export default function AboutNavigationList() {
  const tabsAbout = [
    {
      title: "О компании",
    },
    {
      title: "Контакты",
    },
    {
      title: "Оплата и доставка",
    },
    {
      title: "Оптовые доставки",
    },
  ];

  return (
    <nav className="mb-[47px] md:mb-0">
      <Paragraph className="text-c4 font-title font-bold text-[16px] leading-[95%] mb-[20px] md:mb-[24px] lg:mb-[27px]">
        О компании
      </Paragraph>
      <ul>
        {tabsAbout.map((tab, i) => (
          <AboutNavigationItem key={i} {...tab} />
        ))}
      </ul>
    </nav>
  );
}
