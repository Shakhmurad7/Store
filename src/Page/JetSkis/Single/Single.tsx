import axios from "axios"
import { useEffect} from "react"
import { connect } from "react-redux"
import { useParams } from "react-router"
import { FaAngleRight } from "react-icons/fa6";
import styles from '../index.module.scss'
import style from './index.module.scss'
import PageContainer from "../../../Components/PageContainer"
const url = `https://book-db-shakhmurad.vercel.app/JetSki/`
function SingleJetSki({JetSki , dispatch}:any) {

    const {id} = useParams()

    useEffect(()=>{
        axios.get(url + id).then(({data})=>{
            console.log(data);
          dispatch({
            type:'JetSki',
            payload: data
          })
          
        })
      } , [])

  return (
    <>
    <PageContainer>

    <div className={styles['icon']}>
        <p>Home</p>
        <FaAngleRight />
        <p>JetSki</p>
        <FaAngleRight />
        <p>{JetSki.item}</p>
    </div>

    <div className={style['container']}>
        <div className={style['block-left']}>
            <img src={`../../../public/img/${JetSki.img}.png`}/>
            <h2>{JetSki.price}</h2>
        </div>
        <div className={style['block-right']}>
            <h1>{JetSki.item}</h1>
            <div className={style['block-icon']}>

            </div>
            <div className={style['block-text']}>
                <div className={style['block-text-row']}>
                    <h3>İstehsalçı</h3>
                    <h3>{JetSki}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Oturacaqların sayı, ədəd:</h3>
                    <h3>{JetSki}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Oturacaqların sayı, ədəd:</h3>
                    <h3>{JetSki}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Buraxılış ili</h3>
                    <h3>{JetSki}</h3>
                </div>
            </div>
        </div>
    </div>


    </PageContainer>
    </>
  )
}

const mapState = (state:any) => state 

export default connect(mapState)(SingleJetSki)