import { Paragraph } from "@/components/ui";
import Image from "next/image";
import { arrowdown } from "@/images/icons/icons";

const Tab = ({ tab }) => {
  return (
    <Paragraph
      key={tab.name}
      className="flex items-center justify-between w-full text-[#898989] hover:text-textBase cursor-pointer border-y border-[#C4C4C4] py-[23px] px-[32px]"
    >
      {tab.name}
      <Image src={arrowdown} alt="серенькая стрелочка смотрит вниз" />
    </Paragraph>
  );
};

export default Tab;
