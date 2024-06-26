import { Box } from "@mui/material"
import PageContainer from "../../Components/PageContainer"
import Swipers from "../../Components/Swiper"
import Search from "../../layout/Search/Search"
import Goods from "../../layout/goods/Goods"
import GoodsTwo from "../../layout/goodTwo/goodTwo"

interface Props {
  addTodoItem: (index: any) => void;
  addTodoItemBasket: (index: any) => void;
}

function Home({addTodoItem , addTodoItemBasket}:Props) {
  return (
    <>
    <PageContainer>
      {/* ---Swiper--- */}
      <div className="Swiper-container">

        <div className="swipers">
          <Swipers/>
        </div>

        <div className="swiper-right">
            <div className="block-top-swiper">
              <p>Səhm</p>
              <div className="blcok-right-top">
                <h3>5000$</h3>
              </div>
            </div>
            <div className="block-center-img">
              <img src={'./img/e641b764933eb1e2fb94daf493c064f0.Png'}  />
              <h3>Xarici mühərrik Suzuki DF9.9BRS</h3>
            </div>
            <div className="block-botton-text">
              <p>Kampaniya tarixinə qədər keçərlidir</p>
              <h3>31.08.2024</h3>
            </div>
        </div>
        
      </div>


      {/* ----Search---- */}
          <Search/>


      {/* ---Goods--- */}
        <Goods addTodoItem={addTodoItem} addTodoItemBasket={addTodoItemBasket}  />
      

      {/* ----box-text---- */}
          <Box/>



       {/* ---GoodTwo--- */}
        <GoodsTwo addTodoItem={addTodoItem} addTodoItemBasket={addTodoItemBasket} />
    </PageContainer>
    </>
  )
}

export default Home