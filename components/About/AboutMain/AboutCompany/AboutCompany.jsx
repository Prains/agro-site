import React from "react";
import { Paragraph } from "@/components/ui";

export default function AboutCompany() {
  return (
    <article className="order-3 lg:order-2 lg:w-[50%]">
      <h3 className="text-[30px] font-title font-bold mb-[20px] leading-[100%] lg:mt-[20px]">
        О КОМПАНИИ
      </h3>
      <Paragraph className="text-[9px] leading-[120%] mb-[20px] lg:w-[90%] lg:leading-[120%]">
        Компания «Агросфера» была основана в январе 2017 года. Основным
        направлением деятельности является производство и поставка укрывных
        материалов и полиэтиленовой пленки, а также сопутствующих товаров.
        Основным направлением деятельности является производство и поставка
        укрывных материалов и полиэтиленовой пленки, а также сопутствующих
        товаров.
      </Paragraph>
      <a className="inline-block text-[#969696] text-[12px] leading-[110%] border-b border-solid pb-[2px] mb-[64px] cursor-pointer">
        Подробнее о компании
      </a>
    </article>
  );
}
