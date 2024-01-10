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
            <h1>salma</h1>
        </div>
      </div>
    </PageContainer>
    </>
  )
}

export default Home