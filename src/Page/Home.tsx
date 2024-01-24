import PageContainer from "../Components/PageContainer"
import Swipers from "../Components/Swiper"
import Search from "../assets/layout/Search/Search"

import Goods from "../assets/layout/goods/Goods"
import Box from "../assets/layout/box/Box"
import GoodsTwo from "../assets/layout/goodTwo/goodTwo"

function Home() {
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
              <p>Promosyon</p>
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
          <Search user={[]} dispatch={function (): void {
          throw new Error("Function not implemented.")
        } }/>


      {/* ---Goods--- */}
        <Goods/>
      

      {/* ----box-text---- */}
          <Box/>



       {/* ---GoodTwo--- */}
        <GoodsTwo/>
    </PageContainer>
    </>
  )
}

export default Home