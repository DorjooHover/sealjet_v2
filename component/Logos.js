// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../styles/Logos.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function Logos(){
  return (
   <div className={style.logo}>
      <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      loop
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{ '--swiper-navigation-background': '#000', '--swiper-navigation-background':'#fff' }}
      breakpoints={{
        // when window width is >= 640px
        // when window width is >= 768px
        480: {
          slidesPerView: 5,
        },
        960: {
          slidesPerView: 7
        },
        1260: {
          slidesPerView: 9
        },

      }}
    >
      
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className={style.logos}><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>

    </Swiper>
   </div>
  );
};

export default Logos