import { Paragraph } from "@/components/ui";

const BottomListItem = ({ item }) => {
  return (
    <div
      className={`w-[25%] ${item.border} border-solid border-[#C8C8C8] flex items-center justify-center flex-col`}
    >
      <div className="flex items-start flex-col justify-center">
        <p className={"font-text text-textBase text-lg md:text-[11px]"}>
          {item.title}
        </p>
        <h2
          className={
            "font-title font-bold text-3xl lg:text-[32px] text-textBase"
          }
        >
          {item.subtitle}
        </h2>
      </div>
    </div>
  );
};

export default BottomListItem;
