import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderProps } from "./Slider.types";

import "swiper/css";

export const Slider = ({ children, ...props }: SliderProps) => {
  return (
    <Swiper {...props}>
      {
        Children.map(children, (child) => {
          return <SwiperSlide>{child}</SwiperSlide>;
        })
      }
    </Swiper>
  );
};