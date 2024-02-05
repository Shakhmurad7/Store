import { useEffect, useState } from "react";
import PageContainer from "../../Components/PageContainer"

import style from '../../layout/goods/goods.module.scss'

import styles from './index.module.scss'

import AccordionNew from '../../layout/Accordion/AccordionNew.tsx'
import AccordionCountries from '../../layout/Accordion/AccoedionCountries.tsx'
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import { IoMdHeart } from "react-icons/io";
import { connect } from "react-redux";
const url = `https://book-db-shakhmurad.vercel.app/JetSki`
import { FaShoppingBasket } from "react-icons/fa";
import AccordionBrand from "../../layout/Accordion/AccordionBrand.tsx";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function JetSki({JetSki , dispatch}:any) {

  useEffect(()=>{
    axios.get(url).then(({data})=>{
      dispatch({
        type:'JetSki',
        payload: data
      })
    })
  } , [])

    const [activeIndex, setActiveIndex] = useState(null);

    const handleIconClick = (index:any) => {
                setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
            };

            const top100Films = [
              { label: 'The Shawshank Redemption', year: 1994 },
              { label: 'The Godfather', year: 1972 },
              { label: 'The Godfather: Part II', year: 1974 },
              { label: 'The Dark Knight', year: 2008 },
              { label: '12 Angry Men', year: 1957 },
              { label: "Schindler's List", year: 1993 },
              { label: 'Pulp Fiction', year: 1994 },
            ]

  return (

  <PageContainer>
    <div className={styles['icon']}>
        <p>Home</p>
        <FaAngleRight />
        <p>JetSki</p>
    </div>

    <div className={styles['JetSki-text-top']}>
      <h2>JetSki</h2>
      <div className={styles['JetSki-container-block']}>

      <div className={styles['JetSki-block']}>
        <p>Tam ötürücülü</p>
        <p>5000-dən</p>
        <p>BRP</p>
        <p>daha çox</p>
      </div>

      <div className={styles['JetSki-block-right']}>
           <Autocomplete
           disablePortal
           id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Polarite görə" />}
    />

      </div>
      </div>
    </div>


<div className={styles['all-container']}>
    <div className={styles['left-contaner-JetSki']}>
        <h2>Seçimlər</h2>
        <div className={styles['accordion']}>
          <AccordionNew/>
        </div>
        <div className={styles['accordion']}>
          <AccordionBrand/>
        </div>
        <div className={styles['accordion']}>
          <AccordionCountries/>
        </div>
    </div>

<div className={styles['cart-big-contaner']}>

    <div className={styles['cart-container']}>
    {
      JetSki.slice(0,3).map(({id ,img , item , price , }:any)=>(
         <div key={id} className={style['cart-box']}>
          <h4
           onClick={() => handleIconClick(id)}
           className={`${style['open-icon']} ${activeIndex === id ? style['open-icons'] : style['']}`}>
              <div> <IoMdHeart /></div>
           </h4>
          <div className={style['img-cart']}>
            <img src={`./img/${img}.png`} />
            <h3>{item}</h3>
        </div >
        <h2>{price}$</h2>
        <div className={style['icon-basket']}>
           <p><FaShoppingBasket /></p>
        </div>
        </div>
        ))
    }
    </div>

    <div className={styles['cart-container']}>
    {
      JetSki.slice(3,6).map(({id ,img , item , price , }:any)=>(
         <div key={id} className={style['cart-box']}>
          <h4
           onClick={() => handleIconClick(id)}
           className={`${style['open-icon']} ${activeIndex === id ? style['open-icons'] : style['']}`}>
              <div> <IoMdHeart /></div>
           </h4>
          <div className={style['img-cart']}>
            <img src={`./img/${img}.png`} />
            <h3>{item}</h3>
        </div >
        <h2>{price}$</h2>
        <div className={style['icon-basket']}>
           <p><FaShoppingBasket /></p>
        </div>
        </div>
        ))
      }
    </div>
    <div className={styles['cart-container']}>
    {
      JetSki.slice(6,9).map(({id ,img , item , price , }:any)=>(
         <div key={id} className={style['cart-box']}>
          <h4
           onClick={() => handleIconClick(id)}
           className={`${style['open-icon']} ${activeIndex === id ? style['open-icons'] : style['']}`}>
              <div> <IoMdHeart /></div>
           </h4>
          <div className={style['img-cart']}>
            <img src={`./img/${img}.png`} />
            <h3>{item}</h3>
        </div >
        <h2>{price}$</h2>
        <div className={style['icon-basket']}>
           <p><FaShoppingBasket /></p>
        </div>
        </div>
        ))
      }
    </div>
    <div className={styles['cart-container']}>
    {
      JetSki.slice(9,12).map(({id ,img , item , price , }:any)=>(
         <div key={id} className={style['cart-box']}>
          <h4
           onClick={() => handleIconClick(id)}
           className={`${style['open-icon']} ${activeIndex === id ? style['open-icons'] : style['']}`}>
              <div> <IoMdHeart /></div>
           </h4>
          <div className={style['img-cart']}>
            <img src={`./img/${img}.png`} />
            <h3>{item}</h3>
        </div >
        <h2>{price}$</h2>
        <div className={style['icon-basket']}>
           <p><FaShoppingBasket /></p>
        </div>
        </div>
        ))
      }
    </div>

</div>

</div>




  </PageContainer>



)
}

const mapState = (state:any)=> state

export default connect(mapState)(JetSki)