import axios from "axios"
import { useEffect} from "react"
import { connect } from "react-redux"
import { useParams } from "react-router"
import { FaAngleRight } from "react-icons/fa6";
import styles from '../../JetSkis/index.module.scss'
import style from '../../JetSkis/Single/index.module.scss'
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import PageContainer from "../../../Components/PageContainer"
import GoodsTwo from "../../../layout/goodTwo/goodTwo";
const url = `https://book-db-shakhmurad.vercel.app/AllTerrainVehicles/`
function SingleJetSki({AllTerrainVehicles , dispatch}:any) {

    const {id} = useParams()

    useEffect(()=>{
        axios.get(url + id).then(({data})=>{
            console.log(data);
          dispatch({
            type:'AllTerrainVehicles',
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
        <p>AllTerrainVehicles</p>
        <FaAngleRight />
        <p>{AllTerrainVehicles.item}</p>
    </div>

    <div className={style['container']}>
        <div className={style['block-left']}>
            <img src={`../../../public/img/${AllTerrainVehicles.img}.jpg`}/>
            <h1>{AllTerrainVehicles.price} $</h1>
        </div>
        <div className={style['block-right']}>
            <h1>{AllTerrainVehicles.item}</h1>
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
                    <h3>{AllTerrainVehicles.country}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>At Gucu</h3>
                    <h3>{AllTerrainVehicles.force}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Oturacaqların sayı, ədəd:</h3>
                    <h3>{AllTerrainVehicles.numberOFseats}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Buraxılış ili</h3>
                    <h3>{AllTerrainVehicles.year}</h3>
                </div>
                <div className={style['block-text-row']}>
                    <h3>Yanacaq</h3>
                    <h3>{AllTerrainVehicles.fuel}</h3>
                </div>
            </div>
            <p className={style['button-buy']} >Almaq</p>
        </div>
    </div>

    {/* ---GoodsTwo---- */}
    <div className={style['GoodsTwo']}>
        <GoodsTwo/>
    </div>

    </PageContainer>
    </>
  )
}

const mapState = (state:any) => state 

export default connect(mapState)(SingleJetSki)