import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

// import required modules
import { Pagination,Keyboard, Navigation,Autoplay} from 'swiper/modules';
import SliderSkeleton from "../../skeleton/Slider-Skeleton.jsx";
import productStore from "../../store/productStore.js";

const Slider = () => {
    const {sliderList} = productStore();


    if(sliderList === null){
        return <SliderSkeleton />
    }else{
        return (
            <>
                <Swiper
                    pagination={{clickable: true}}  grabCursor={true} keyboard={{enabled: true}}
                    navigation={true} modules={[Pagination,Autoplay,Navigation,Keyboard]}
                    loop={true}  slidesPerView={1} spaceBetween={30} className="mySwiper"
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}>
                    {
                        sliderList.map((item,i)=>{
                            return(
                                <SwiperSlide key={i}>
                                    <img src={item['img']} className={"md:h-[50vh] mt-[77px] h-[30vh] lg:h-screen w-full"} alt={""} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </>
        );
    }
};

export default Slider;