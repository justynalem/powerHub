import { Swiper, SwiperSlide } from "swiper/react";
import { SliderProps } from "./Slider.types";
import { Children } from "react";

export const Slider = ({ children }: SliderProps) => {
  return (
    <Swiper>
      {Children.map(children, (child) => {
        return <SwiperSlide>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
};