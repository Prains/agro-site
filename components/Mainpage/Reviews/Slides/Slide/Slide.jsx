import Image from "next/image";
import { face } from "@/images/Homepage/Reviews/reviews";

const Slide = () => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row md:gap-[49px] md:items-start">
      <div className="flex items-start justify-center gap-[15px] mb-[30px] md:flex-col">
        <Image
          src={face}
          alt="Лицо мужика в очках с черными волосами"
          className="w-[69px] md:w-[235px]"
        />
        <div>
          <h3 className="font-title text-[#000000] text-2xl font-bold">
            ИЛЬЯ Митронин
          </h3>
          <p className="font-text text-[#898989] text-xs">
            Директор АНО СО “ГЕОТЕКС”
          </p>
        </div>
      </div>
      <div className="w-[278px] md:w-[766px] lg:w-[566px]">
        <h3 className="font-title text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
          Качественно и оперативно, используя новейшие материалы и технологии
        </h3>
        <p className="font-text text-[#2E2E2E]">
          Компания «Агросфера» была основана в январе 2017 года. Основным
          направлением деятельности является производство и поставка укрывных
          материалов и полиэтиленовой пленки, а также сопутствующих товаров .
        </p>
      </div>
    </div>
  );
};

export default Slide;
