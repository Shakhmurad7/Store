import { useEffect, useState } from "react";
import PageContainer from "../../Components/PageContainer.tsx"

import style from '../../layout/goods/goods.module.scss'

import styles from '../JetSkis/index.module.scss'

import AccordionNew from '../../layout/Accordion/AccordionNew.tsx'
import AccordionCountries from '../../layout/Accordion/AccoedionCountries.tsx'
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import { IoMdHeart } from "react-icons/io";
import { connect } from "react-redux";
const url = `https://book-db-shakhmurad.vercel.app/Qayiq`
import { FaShoppingBasket } from "react-icons/fa";
import AccordionBrand from "../../layout/Accordion/AccordionBrand.tsx";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";

interface Props {
  addTodoItem: (index: any) => void;
  addTodoItemBasket: (index: any) => void;
  Boats?: any;
  dispatch: any;
}

function Boats({Boats , dispatch , addTodoItem , addTodoItemBasket }:Props) {

  const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(9);

const [active, setActive] = useState(1); // Fixing the initialization of active state
const paginate = (pageNumber: number) => {
  setCurrentPage(pageNumber);
  setActive(pageNumber); // Set active page when paginating
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
const filteredData = Boats.filter((item: any) => {
  if(item.price > filters){
    return item
  }
  else if(filters === 0){
    return Boats
  }
});

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const paginatedData =  Array.isArray(Boats) ? filteredData.slice(indexOfFirstItem, indexOfLastItem) : [];



  useEffect(()=>{
    axios.get(url).then(({data})=>{
      dispatch({
        type:'Boats',
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
        <p>Boats</p>
    </div>

    <div className={styles['JetSki-text-top']}>
      <h2>Boats</h2>
      <div className={styles['JetSki-container-block']}>

      <div className={styles['JetSki-block']}>
        <p onClick={()=>TabOne(0)} className={styles[filters === 0? 'filter-active' : '']} >Hamsi</p>
        <p onClick={()=>TabOne(10000)} className={styles[filters === 10000? 'filter-active' : '']} >10000-dən</p>
        <p onClick={()=>TabOne(15000)} className={styles[filters === 15000? 'filter-active' : '']} >15000-dən</p>
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
          <Link  to={`/Boats/${item.id}`}>
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
            <Link  to={`/Boats/${item.id}`}>
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
       paginatedData.slice(6,9).map((item:DataItem)=>(
        <div key={item.id} className={style['cart-box']}>
        <div className="" onClick={()=>addTodoItem(item)} >
          <h4
            onClick={() => handleIconClick(item.id)}
            className={`${style['open-icon']} ${activeIndex === item.id ? style['open-icons'] : style['']}`}>
            <div> <IoMdHeart /></div>
          </h4>
        </div>
          <Link  to={`/Boats/${item.id}`}>
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
        ))
      }
    </div>
    <div className={styles['cart-container']}>
    {
       paginatedData.slice(9,12).map((item:DataItem)=>(
        <div key={item.id} className={style['cart-box']}>
        <div className="" onClick={()=>addTodoItem(item)} >
          <h4
            onClick={() => handleIconClick(item.id)}
            className={`${style['open-icon']} ${activeIndex === item.id ? style['open-icons'] : style['']}`}>
            <div> <IoMdHeart /></div>
          </h4>
        </div>
          <Link  to={`/Boats/${item.id}`}>
          <div className={style['img-cart']}>
            <img src={`./img/${item.img}.jpg`} />
            <h3>{item.item}</h3>
          </div >
          <h2>{item.price}$</h2>
      </Link>
          <div className={style['icon-basket']}>
            <p><FaShoppingBasket /></p>
          </div>
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

export default connect(mapState)(Boats)