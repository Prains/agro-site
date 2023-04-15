import React from "react";
import Image from "next/image";
import AboutMainCard from "./AboutMainCard/AboutMainCard";
import AboutCompany from "./AboutCompany/AboutCompany";

import { expertsPng } from "@/images/Homepage/about/about.js";

export default function AboutMain() {
  const infoBlocks = [
    {
      title: "Собственное производство",
      text: "Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ",
    },
    {
      title: "Любой объем, ширина, цвет",
      text: "Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ",
    },
    {
      title: "Специальные условия для новых клиентов",
      text: "Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ",
    },
    {
      title: "Оперативная отгрузка и доставка в любой регион",
      text: "Благодаря собственному производству мы в кратчайшие сроки реализуем ваш заказ",
    },
  ];
  return (
    <div className="flex flex-col flex-wrap lg:flex-row">
      <Image
        className="w-full mb-[24px] order-1 object-cover md:h-[340px] lg:order-3 lg:w-[50%]"
        src={expertsPng}
        alt="experts"
      />
      <div className="flex flex-row flex-wrap mb-[60px] order-2 lg:order-1 lg:mb-0 lg:border-solid lg:border-t">
        {infoBlocks.map((infoBlock, i) => (
          <AboutMainCard key={i} {...infoBlock} />
        ))}
      </div>
      <AboutCompany />
    </div>
  );
}
