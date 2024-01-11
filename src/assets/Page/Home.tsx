import PageContainer from "../Components/PageContainer"
import Swipers from "../Components/Swiper"

function Home() {
  return (
    <>
    <PageContainer>
      <div className="Swiper-container">

        <div className="swipers">
          <Swipers/>
        </div>

        <div className="swiper-right">
            <div className="block-top-swiper">
              <p>Aкция</p>
              <div className="blcok-right-top">
                <h3>5000$</h3>
              </div>
            </div>
            <div className="block-center-img">
              <img src={'./img/e641b764933eb1e2fb94daf493c064f0.Png'}  />
              <h3>Лодочный мотор Suzuki DF9.9BRS</h3>
            </div>
            <div className="block-botton-text">
              <p>Акция действует до</p>
              <h3>31.08.2020</h3>
            </div>
        </div>
        
      </div>
    </PageContainer>
    </>
  )
}

export default Home