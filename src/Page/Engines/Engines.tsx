import { useEffect, useState } from "react";
import PageContainer from "../../Components/PageContainer"

import style from '../../layout/goods/goods.module.scss'

import styles from '../JetSkis/index.module.scss'

import AccordionNew from '../../layout/Accordion/AccordionNew.tsx'
import AccordionCountries from '../../layout/Accordion/AccoedionCountries.tsx'
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import { IoMdHeart } from "react-icons/io";
import { connect } from "react-redux";
const url = `https://book-db-shakhmurad.vercel.app/Post-cart-goods?q=Engines`
import { FaShoppingBasket } from "react-icons/fa";
import AccordionBrand from "../../layout/Accordion/AccordionBrand.tsx";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";

interface Props {
  addTodoItem: (index: any) => void;
  Engines?: any;
  dispatch: any;
}

function Engines({Engines , dispatch , addTodoItem}:Props) {

  const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(9);

const [active, setActive] = useState(1); 
const paginate = (pageNumber: number) => {
  setCurrentPage(pageNumber);
  setActive(pageNumber); 
};

type DataItem ={
  item:string,
  id:number,
  price:string,
  img:string,
}


const [filters , setFilters] = useState(Number)
const TabOne =(i:any)=>{
  setFilters(i)
}
const filteredData = Engines.filter((item: any) => {
  if(item.price > filters){
    return item
  }
  else if(filters === 0){
    return Engines
  }
});

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const paginatedData =  Array.isArray(Engines) ? filteredData.slice(indexOfFirstItem, indexOfLastItem) : [];


  useEffect(()=>{
    axios.get(url).then(({data})=>{
      dispatch({
        type:'Engines',
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
        <p>SpareParts</p>
    </div>

    <div className={styles['JetSki-text-top']}>
      <h2>JetSki</h2>
      <div className={styles['JetSki-container-block']}>

      <div className={styles['JetSki-block']}>
        <p onClick={()=>TabOne(0)} className={styles[filters === 0? 'filter-active' : '']} >Hamsi</p>
        <p onClick={()=>TabOne(20)} className={styles[filters === 20? 'filter-active' : '']} >20-dən</p>
        <p onClick={()=>TabOne(40)} className={styles[filters === 40? 'filter-active' : '']} >40-dən</p>
        <p onClick={()=>TabOne(50)} className={styles[filters === 50? 'filter-active' : '']} >50-dən</p>
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
    paginatedData.slice(0,3).map((item:DataItem)=>(
      <div key={item.id} className={style['cart-box']}>
      <div className="" onClick={()=>addTodoItem(item)} >
        <h4
          onClick={() => handleIconClick(item.id)}
          className={`${style['open-icon']} ${activeIndex === item.id ? style['open-icons'] : style['']}`}>
          <div> <IoMdHeart /></div>
        </h4>
      </div>
        <Link  to={`/SpareParts/${item.id}`}>
        <div className={style['img-cart']}>
          <img src={`./img/${item.img}.jpg`} />
          <h3>{item.item}</h3>
        </div >
        <h2>{item.price}$</h2>
        <div className={style['icon-basket']}>
          <p><FaShoppingBasket /></p>
        </div>
    </Link>
      </div>
        ))
    }
    </div>

    <div className={styles['cart-container']}>
    {
       paginatedData.slice(3,6).map((item:DataItem)=>(
        <div key={item.id} className={style['cart-box']}>
        <div className="" onClick={()=>addTodoItem(item)} >
          <h4
            onClick={() => handleIconClick(item.id)}
            className={`${style['open-icon']} ${activeIndex === item.id ? style['open-icons'] : style['']}`}>
            <div> <IoMdHeart /></div>
          </h4>
        </div>
          <Link  to={`/SpareParts/${item.id}`}>
          <div className={style['img-cart']}>
            <img src={`./img/${item.img}.jpg`} />
            <h3>{item.item}</h3>
          </div >
          <h2>{item.price}$</h2>
          <div className={style['icon-basket']}>
            <p><FaShoppingBasket /></p>
          </div>
      </Link>
        </div>
        ))
      }
    </div>
   
    <ul className={styles["pagenation"]}>
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map(
          (_, index) => (
            <li
              key={index}
              className={styles["page-item"]}
              onClick={() => paginate(index + 1)}
            >
              <button
                className={`${styles["page-link"]} ${
                  active === index + 1 ? styles["active"] : ""
                }`}
              > 
                {index + 1}
              </button>
            </li>
          )
        )}
      </ul>

</div>

</div>




  </PageContainer>



)
}

const mapState = (state:any)=> state

export default connect(mapState)(Engines)