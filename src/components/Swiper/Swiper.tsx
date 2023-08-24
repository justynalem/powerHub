import { Children } from "react";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { SwiperProps } from "./Swiper.types";

import "swiper/css";

export const Swiper = ({ children, ...props }: SwiperProps) => {
  return (
    <ReactSwiper {...props}>
      {
        Children.map(children, (child) => {
          return <SwiperSlide>{child}</SwiperSlide>;
        })
      }
    </ReactSwiper>
  );
};