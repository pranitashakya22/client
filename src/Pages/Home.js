import HomeBanner from "../Components/HomeBanner";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../Components/ProductItem";
import HomeCat from "../Components/HomeCategory";

import banner1 from '../../src/images/imageBanner1.png';
import banner2 from '../../src/images/imageBanner2.png';

const Home =()=>{
   
    return(
        <>
          <HomeBanner/>
          <HomeCat/>


          <section className="bestSellerSec">
            <div className="container">
              <div className="row">
               
                <div className="col-md-12 productRow">
                  <div className="d-flex align-items-center">
                    <div className="info w-75">
                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                    <p className="text-light text-sml mb-0">Do not miss the current offers.</p>
                    
                    </div>

                    <Button className="viewallBtn ml-auto">View All <IoIosArrowRoundForward/></Button>
                  </div>        

                  <div className="product_row w-100 mt-4">
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={4}
                      navigation={true}
                      slidesPerGroup={3}
                      modules={[Navigation]}
                      className="mySwiper"
                    >
                        <SwiperSlide>
                           <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                           <ProductItem/>
                        </SwiperSlide>
                          </Swiper>

                    </div> 



                 <div className="d-flex align-items-center mt-5">
                    <div className="info w-75">
                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                    <p className="text-light text-sml mb-0">New products and updated stocks</p>
                    
                    </div>

                    <Button className="viewallBtn ml-auto">View All <IoIosArrowRoundForward/></Button>
                  </div>        

                  <div className="product_row productRow2 w-100 mt-4 d-flex">
                     <ProductItem />
                     <ProductItem />
                     <ProductItem />
                     <ProductItem />
                     <ProductItem />
                     <ProductItem />
                     <ProductItem />
                     <ProductItem />
                    </div>         

                  <div className="d-flex mt-4 mb-5 bannerSec">
                  <div className="banner">
                     <img src={banner1} className="cursor w-100"/>

                    </div>
                    <div className="banner">
                     <img src={banner2} className="cursor w-100"/>

                    </div>
                  </div>

                    
                </div>

              </div>
            </div>
          </section>

        </>
    )
}

export default Home;