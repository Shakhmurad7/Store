import axios from 'axios'
import style from '../goods/goods.module.scss'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { IoMdHeart } from "react-icons/io";

import { Navigation, Pagination, Mousewheel,} from 'swiper/modules';
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';
const url = `https://book-db-shakhmurad.vercel.app/Post-cart-goods`
interface Props {
  addTodoItem: (index: any) => void;
  addTodoItemBasket: (index: any) => void;
}

  type cartData ={
      item:string,
      id:number,
      price:string,
      img:string,
      cateqory:String
    }
    
  type cartDB ={
    cateqory:String
  }

    function GoodTwo({addTodoItem , addTodoItemBasket}:Props){
        const [data , setdata] = useState([])

        const [filter , setfilter] = useState('Tools')

        const filters = data.filter((item:cartDB)=>{
            return item.cateqory === filter
            
        })
        const Tab = (cateqory:any)=>{
            setfilter(cateqory)
        }
        
        useEffect(()=>{
            axios.get(url).then(({data})=>{
                setdata(data)    
            })
    } , [])

    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const handleIconClick = (index:any) => {
        setActiveIndexes((prevIndexes:any) => {
            if (prevIndexes.includes(index)) {
                return prevIndexes.filter((i:any) => i !== index);
            } else {
                return [...prevIndexes, index]; 
            }
        });
    };
        
  return (
    <div className={style['goods-container']}>
        <div className={style['goods-top-itme']}>
            <h2>Bu məhsulla alırlar</h2>
        </div>
        <div className={style['goods-list']}>
            <p onClick={()=>Tab('SpareParts')} className={style[filter === 'SpareParts'? 'h3-active' : '']}>Ehtiyat hissələri</p>
            <p onClick={()=>Tab('Engines')} className={style[filter === 'Engines'? 'h3-active' : '']} >Mühərriklər</p>
            <p onClick={()=>Tab('Wheels')} className={style[filter === 'Wheels'? 'h3-active' : '']} >Təkərlər </p>
            <p onClick={()=>Tab('Electronics')} className={style[filter === 'Electronics'? 'h3-active' : '']} >Elektronika</p>
            <p onClick={()=>Tab('Tools')} className={style[filter === 'Tools'? 'h3-active' : '']} >Alətlər</p>
            <p onClick={()=>Tab('Accessories')} className={style[filter === 'Accessories'? 'h3-active' : '']} >Aksesuarlar </p>
        </div>

        <div className={style['cart-container']}>
                     <Swiper
                    spaceBetween={30}
                    navigation={true}
                        modules={[ Navigation, Pagination, Mousewheel]}
                        className="mySwiper"
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                              },
                            800: {
                              slidesPerView: 3,
                            },
                            1400: {
                              slidesPerView: 4,
                            },
                          }}
                     >
                        
                            {
                                filters.map((item:cartData)=>(
                                    <SwiperSlide key={item.id} >
                                  <div key={item.id} className={style['cart-box']}>
                                <div className="" onClick={()=>addTodoItem(item)} >
                                  <h4
                                    onClick={() => handleIconClick(item.id)}
                                    className={`${style['open-icon']} ${activeIndexes.includes(item.id) ? style['open-icons'] : ''}`}>
                                    <div> <IoMdHeart /></div>
                                  </h4>
                                  </div>
                                 <Link  to={`/SpareParts/${item.id}`}>
                                <div className={style['img-cart']}>
                                   <img src={`./img/${item.img}.jpg`} />
                                   <h3>{item.item}</h3>
                                </div >
                                    <h2>{item.price}$</h2>
                                </Link>
                              <div onClick={()=>addTodoItemBasket(item)} className={style['icon-basket']}>
                                <p><FaShoppingBasket /></p>
                              </div>
                              </div>
                            </SwiperSlide>
                            ))
                            }
                        </Swiper>
   
        </div>
        <Link to={'/SpareParts'}>
                <div className={style['block-box']}>
                    <h3>Daha çox göstər</h3>
                </div>
        </Link>
        
    </div>
  )
}

export default (GoodTwo)


