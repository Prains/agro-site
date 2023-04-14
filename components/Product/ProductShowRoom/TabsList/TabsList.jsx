import { Paragraph } from "@/components/ui";
import Tab from "./Tab/Tab";

const TabsList = ({ list }) => {
  return (
    <div className="flex items-center justify-center flex-col lg:w-1/2 w-full">
      {list.map((tab) => {
        return <Tab tab={tab} key={tab.name} />;
      })}
      <div className="flex items-end justify-end flex-col border-y border-solid border-[#898989] w-full lg:h-[130px] h-[64px]">
        <Paragraph className="text-[#898989] border-b border-solid border-[#898989] lg:mr-[36px] lg:mb-[16px] hover:opacity-50 mb-[13px]">
          Посмотреть все материалы
        </Paragraph>
      </div>
    </div>
  );
};

export default TabsList;
