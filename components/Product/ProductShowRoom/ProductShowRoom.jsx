import TabsList from "./TabsList/TabsList";
import Image from "next/image";
import { material } from "@/images/Homepage/Product/Product";

const ProductShowRoom = ({ list }) => {
  return (
    <div className="mt-[27px] flex items-start justify-between w-full lg:mt-[82px]">
      <TabsList list={list} />
      <Image
        src={material}
        alt="Укрывной материал черного цвета на зеленой траве"
        className="hidden lg:block"
      />
    </div>
  );
};

export default ProductShowRoom;
