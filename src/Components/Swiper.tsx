
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style.scss'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard , Autoplay} from 'swiper/modules';

export default function Swipers() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
      }}
        loop={true}
        keyboard={true}
        modules={[ Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img  src={'./img/слайдер баннер.png'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/pexels-engin-akyurt-10364376.jpg'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/pexels-karola-siimson-704213.jpg'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/pexels-sebastian-voortman-804570.jpg'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/pexels-shelly-ohlsson-3761037.jpg'} /></SwiperSlide>
        <SwiperSlide><img src={'./img/pexels-tima-miroshnichenko-5976911.jpg'} /></SwiperSlide>
      </Swiper>
    </>
  );
}
