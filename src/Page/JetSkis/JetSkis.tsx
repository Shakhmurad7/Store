import { useEffect } from "react";
import PageContainer from "../../Components/PageContainer"
import style from './index.module.scss'
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
const url = ``
function JetSki({JetSki , dispacht}:any) {

  useEffect(()=>{
    axios.get(url).then(({data})=>{
      dispacht({
        type:'JetSki',
        paylaod:data
      })
    })
  } , [])
  return (

  <PageContainer>
    <div className={style['icon']}>
        <p>Home</p>
        <FaAngleRight />
        <p>JetSki</p>
    </div>
    <div className={style['JetSki-text-top']}>
      <h2>JetSki</h2>
      <div className={style['JetSki-block']}>
        <p>Tam ötürücülü</p>
        <p>5000-dən</p>
        <p>BRP</p>
        <p>daha çox</p>
      </div>
    </div>


  </PageContainer>
  )
}

export default JetSki