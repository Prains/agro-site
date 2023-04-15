import { Paragraph } from "../ui";
import FooterFeedback from "@/components/Footer/FooterFeedback/FooterFeedback";
import FooterNavigation from "@/components/Footer/FooterNavigation/FooterNavigation";

export default function Footer() {
  return (
    <footer className="w-full bg-backgroundBlack pt-[63px]">
      <div className="flex flex-col items-start w-[87%] mx-auto md:flex-row md:justify-between">
        <FooterNavigation />
        <FooterFeedback />
      </div>
      <hr className="w-[87%] mx-auto mb-[25px]" />
      <div className="w-[87%] mx-auto mb-[25px] flex flex-col items-start justify-between md:flex-row">
        <Paragraph className="text-[#c4c4c4] text-[11px] md:text-[13px]">
          2023. Все права защищены
        </Paragraph>
        <Paragraph className="text-[#c4c4c4] text-[11px] md:text-[13px]">
          Сайт разработан ---
        </Paragraph>
      </div>
    </footer>
  );
}
