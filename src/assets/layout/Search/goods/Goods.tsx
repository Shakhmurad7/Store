import axios from 'axios'
import style from './goods.module.scss'
import { useEffect, useState } from 'react'

import { FaShoppingBasket } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
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
                {
                    
                   data.map(({item , id , img  , price}:cartData)=>(
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
                }
        </div>
        {
            
        }
        
    </div>
  )
}


export default (Goods)
