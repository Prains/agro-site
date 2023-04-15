import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide/Slide";

const Slides = ({ setCurrentSlide }) => {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={(slide) => {
        setCurrentSlide(slide.activeIndex + 1);
      }}
    >
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slides;
