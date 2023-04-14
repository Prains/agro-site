import { Paragraph, Subtitle } from "@/components/ui";

const BottomListItem = ({ item }) => {
  return (
    <div
      className={`w-[25%] ${item.border} border-solid border-[#C8C8C8] flex items-center justify-center flex-col py-[21px]`}
    >
      <div className="flex items-start flex-col justify-center">
        <Paragraph className="md:text-[12px]">{item.title}</Paragraph>
        <Subtitle className="md:text-[32px]">{item.subtitle}</Subtitle>
      </div>
    </div>
  );
};

export default BottomListItem;
