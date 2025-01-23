import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import image from '../../images/Tea.png';
import { useContext, useRef, useState } from 'react';


const ProdZoom =()=>{
    const [slideIndex,setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    
    const goto = (index) =>{
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
    }


    return(
        <>

        <div className="prodZoom">
        <div className='prodZoom position-relative'>
                    <div className='badge badge-primary'>23%</div>
                    <Swiper
                       slidesPerView={1}
                       spaceBetween={0}
                       navigation={false}
                       slidesPerGroup={1}
                       modules={[Navigation]}
                       className="zoomSliderBig"
                       ref={zoomSliderBig}
                       >

                    <SwiperSlide>                    
                    <div className='item'>
                        <InnerImageZoom
                        zoomType='hover' zoomScale={1} src={image}/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='item'>
                        <InnerImageZoom
                        zoomType='hover' zoomScale={1} src={image}/>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='item'>
                        <InnerImageZoom
                        zoomType='hover' zoomScale={1} src={image}/>
                    </div>
                    </SwiperSlide>       
                    </Swiper>
            </div>

            <Swiper
              slidesPerView={4}
              spaceBetween={0}
              navigation={true}
              slidesPerGroup={1}
              modules={[Navigation]}
              className="zoomSlider"
              ref={zoomSlider}
            >
            <SwiperSlide>
            <div className={`item ${slideIndex===0 && 'item_active'}`}>
                <img src={image} className='w-100' onClick={()=> goto(0)}/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`item ${slideIndex===1 && 'item_active'}`}>
                <img src={image} className='w-100' onClick={()=> goto(1)}/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={`item ${slideIndex===2 && 'item_active'}`}>
                <img src={image} className='w-100' onClick={()=> goto(2)}/>
            </div>
            </SwiperSlide>
            </Swiper>
        </div>
        
        </>
    )
}

export default ProdZoom;