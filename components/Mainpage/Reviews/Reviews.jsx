import "swiper/swiper.min.css";
import { Subtitle } from "@/components/ui";
import { useState } from "react";
import Slides from "./Slides/Slides";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className="w-[87%] py-[60px]">
      <div className="border-b border-solid border-[#C4C4C4] pb-7 mb-[17px] md:mb-[31px]">
        <Subtitle className="">
          ОТЗЫВЫ ДОВОЛЬНЫХ <br />
          КЛИЕНТОВ
        </Subtitle>
      </div>
      <p className="font-text text-[#C4C4C4] mb-[17px] md:mb-[36px]">
        {currentSlide} / 4
      </p>
      <Slides setCurrentSlide={setCurrentSlide} />
    </section>
  );
};

export default Reviews;
