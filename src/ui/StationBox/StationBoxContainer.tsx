import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { StationBox } from "..";

export const StationContainer = () => {
  return (

    <Swiper spaceBetween={0} slidesPerView={5}>
      <SwiperSlide>
        <StationBox />
      </SwiperSlide>
      <SwiperSlide>
        <StationBox />
      </SwiperSlide>
      <SwiperSlide>
        <StationBox />
      </SwiperSlide>
      <SwiperSlide>
        <StationBox />
      </SwiperSlide>
    </Swiper>
  );
};
