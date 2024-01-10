
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../style.scss'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Swipers() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img  src={'./img/слайдер баннер.png'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/da00adc39fb62ce64af0eebbbbec407b.png'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/ф1.jpg'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/ф2.jpg'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/ф3.jpg'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/ф4.jpg'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/ф5.jpg'} /></SwiperSlide>
      </Swiper>
    </>
  );
}
