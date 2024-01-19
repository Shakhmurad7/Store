
import axios from 'axios'
import style from '../goods/goods.module.scss'
import { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel,} from 'swiper/modules';

import { FaShoppingBasket } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const url = `https://book-db-shakhmurad.vercel.app/Post-cart-goods2`

  type cartData ={
      item:string,
      id:number,
      price:string,
      img:string,
    }
    function GoodsTwo() {
        const [data , setdata] = useState([]) 
        
        useEffect(()=>{
            axios.get(url).then(({data})=>{
                setdata(data)  
            })
    } , [])
        
  return (
    <div className={style['goods-container']}>
        <div className={style['goods-top-itme']}>
            <h2>Популярные товары</h2>
        </div>
        <div className={style['goods-list']}>
            <p>запчасти</p>
            <p>моторы</p>
            <p>шины </p>
            <p>электроника</p>
            <p>инструменты</p>
            <p>аксессуары </p>
        </div>

        <div className={style['cart-container']}>
                     <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    // mousewheel={true}
                // pagination={{
                //      clickable: true,
                //              }}
                             modules={[ Navigation, Pagination, Mousewheel]}
                        className="mySwiper"
                     >
                         <SwiperSlide>{
                             data.slice(0,1).map(({item , id , img  , price}:cartData)=>(
                                <div key={id} className={style['cart-box']}>
                                    <h3> <FaRegHeart /></h3>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            ))
                            }</SwiperSlide>
                         <SwiperSlide>{
                             data.slice(1,2).map(({item , id , img  , price}:cartData)=>(
                                <div key={id} className={style['cart-box']}>
                                    <h3> <FaRegHeart /></h3>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            ))
                            }</SwiperSlide>
                         <SwiperSlide>{
                             data.slice(2,3).map(({item , id , img  , price}:cartData)=>(
                                <div key={id} className={style['cart-box']}>
                                    <h3> <FaRegHeart /></h3>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            ))
                            }</SwiperSlide>
                         <SwiperSlide>{
                             data.slice(3,4).map(({item , id , img  , price}:cartData)=>(
                                <div key={id} className={style['cart-box']}>
                                    <h3> <FaRegHeart /></h3>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            ))
                            }</SwiperSlide>
                         <SwiperSlide>{
                             data.slice(3,4).map(({item , id , img  , price}:cartData)=>(
                                <div key={id} className={style['cart-box']}>
                                    <h3> <FaRegHeart /></h3>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            ))
                            }</SwiperSlide>
                         <SwiperSlide>{
                             data.slice(3,4).map(({item , id , img  , price}:cartData)=>(
                                <div key={id} className={style['cart-box']}>
                                    <h3> <FaRegHeart /></h3>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            ))
                            }</SwiperSlide>
                         <SwiperSlide>{
                             data.slice(3,4).map(({item , id , img  , price}:cartData)=>(
                                <div key={id} className={style['cart-box']}>
                                    <h3> <FaRegHeart /></h3>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            ))
                            }</SwiperSlide>
                         <SwiperSlide>{
                             data.slice(3,4).map(({item , id , img  , price}:cartData)=>(
                                <div key={id} className={style['cart-box']}>
                                    <h3> <FaRegHeart /></h3>
                                    <div className={style['img-cart']}>
                                        <img src={`./img/${img}.png`} />
                                        <h3>{item}</h3>
                                    </div>
                                    <h2>{price}$</h2>
                                    <div className={style['icon-basket']}>
                                        <p><FaShoppingBasket /></p>
                                    </div>
                                </div>
                            ))
                            }</SwiperSlide>
                        </Swiper>
   
        </div>
                <div className={style['block-box']}>
                    <h3>Показать еще</h3>
                </div>
        
    </div>
  )
}


export default GoodsTwo
