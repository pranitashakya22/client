import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Image from '../../images/teaIcon.png';


const HomeCat =()=>{
    return(
      <section className="homeCat">
      <div className="container">
          <h2 className="mb-3 hd">FEATURED CATEGORIES</h2>
          <Swiper
              spaceBetween={5}
              slidesPerView={10}
              navigation={true}
              slidesPerGroup={1}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
          >
              {[...Array(100)].map((_, index) => (
                  <SwiperSlide key={index}>
                      <div className="item text-center">
                          <img src={Image} alt={`Category ${index + 1}`}/>
                          <h6>Tea</h6>
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>
  </section>

    )
}

export default HomeCat;