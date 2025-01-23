import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Banner1 from '../../../src/images/banner1.jpeg';
import Banner2 from '../../../src/images/banner2.jpeg';

const HomeBanner = () => {
  return (
    <div className="homeBannerSec">
      <Swiper
        spaceBetween={0}
        slidesPerView={1} // Adjust based on the number of slides
        navigation={true}
        slidesPerGroup={2} // Match slidesPerView
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="item">
            <img src={Banner1} alt="homebanner 1" className="w-100" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={Banner2} alt="homebanner 2" className="w-100" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
