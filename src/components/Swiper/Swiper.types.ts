import { ReactNode } from "react";
import { SwiperProps as ReactSwiperProps } from "swiper/react";

export type SwiperProps = {
  children: ReactNode;
} & ReactSwiperProps;

