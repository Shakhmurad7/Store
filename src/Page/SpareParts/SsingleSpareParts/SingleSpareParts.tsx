import axios from "axios"
import { useEffect, useState} from "react"
import { connect } from "react-redux"
import { useParams } from "react-router"
import { FaAngleRight } from "react-icons/fa6";
import style from '../../JetSkis/Single/index.module.scss'
import styles from '../../JetSkis/index.module.scss'
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import PageContainer from "../../../Components/PageContainer"
import GoodsTwo from "../../../layout/goodTwo/goodTwo";
import { Link } from "react-router-dom";
const url = `https://book-db-shakhmurad.vercel.app/Post-cart-goods/`
interface Props {
    addTodoItem: (index: any) => void;
    addTodoItemBasket: (index: any) => void;
  }
function SingleJetSki({addTodoItem ,addTodoItemBasket}:Props) {

    const {id} = useParams()
    const [date , setDate]  = useState<any>([])

    useEffect(()=>{
        axios.get(url + id).then(({data})=>{
            setDate(data)
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
        <p>{date.item}</p>
    </div>

    <div key={date.id} className={style['container']}>
        <div className={style['block-left']}>
            <img src={`../../../img/${date.img}.jpg`}/>
            <h1>{date.price} $</h1>
        </div>
        <div className={style['block-right']}>
            <h1>{date.item}</h1>
            <p>Məhsul kodu: 366666-2</p>
            <div className={style['block-icon']}>
                <h2><CiHeart /></h2>
                <h2><BiSolidBarChartAlt2 /></h2>
                <div className={style['star']}>
                    <h2><FaStar /></h2>
                    <h2><FaStar /></h2>
                    <h2><FaStar /></h2>
                    <h2><FaStar /></h2>
                    <h2><FaStar /></h2>
                </div>
            </div>
            <h2>Xüsusiyyətlər</h2>
            <div className={style['block-text']}>
                <div className={style['block-text-row']}>
                    <h3>İstehsalçı</h3>
                    <h3>{date.country}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>At Gucu</h3>
                    <h3>{date.force}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Oturacaqların sayı, ədəd:</h3>
                    <h3>{date.numberOFseats}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Buraxılış ili</h3>
                    <h3>{date.year}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Yanacaq</h3>
                    <h3>{date.fuel}</h3>
                </div>
            </div>
            <Link to={'/Contact'} >
            <p className={style['button-buy']} >Almaq</p>
            </Link>
        </div>
    </div>

    {/* ---GoodsTwo---- */}
    <div className={style['GoodsTwo']}>
        <GoodsTwo addTodoItem={addTodoItem} addTodoItemBasket={addTodoItemBasket} />
    </div>

    </PageContainer>
    </>
  )
}

const mapState = (state:any) => state 

export default connect(mapState)(SingleJetSki)