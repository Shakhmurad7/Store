import axios from 'axios'
import style from './goods.module.scss'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { IoMdHeart } from "react-icons/io";

import { Navigation, Pagination, Mousewheel,} from 'swiper/modules';
import { FaShoppingBasket } from "react-icons/fa";
const url = `https://book-db-shakhmurad.vercel.app/Post-cart-goods`

  type cartData ={
      item:string,
      id:number,
      price:string,
      img:string,
    }
    function Goods() {
        const [data , setdata] = useState([]) 
        
        useEffect(()=>{
            axios.get(url).then(({data})=>{
                setdata(data)    
            })
    } , [])

    const [activeIndex, setActiveIndex] = useState(null);

    const handleIconClick = (index:any) => {
                setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
            };
        
  return (
    <div className={style['goods-container']}>
        <div className={style['goods-top-itme']}>
            <h2>Məşhur mallar</h2>
        </div>
        <div className={style['goods-list']}>
            <p>Ehtiyat hissələri</p>
            <p>Mühərriklər</p>
            <p>Təkərlər </p>
            <p>Elektronika</p>
            <p>Alətlər</p>
            <p>Aksesuarlar </p>
        </div>

        <div className={style['cart-container']}>
                     <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                        modules={[ Navigation, Pagination, Mousewheel]}
                        className="mySwiper"
                     >
                            {
                                data.map(({item , id , img  , price}:cartData)=>(
                            <SwiperSlide>
                                <div key={id} className={style['cart-box']}>
                                      <h4
                                        onClick={() => handleIconClick(id)}
                                         className={`${style['open-icon']} ${activeIndex === id ? style['open-icons'] : style['']}`}>
                                            <div> <IoMdHeart /></div>
                                         </h4>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))
                            }
                        </Swiper>
   
        </div>
                <div className={style['block-box']}>
                    <h3>Daha çox göstər</h3>
                </div>
        
    </div>
  )
}

export default (Goods)

