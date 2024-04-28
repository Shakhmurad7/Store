import PageContainer from "../../Components/PageContainer";
import style from './style.module.scss'
function LikePage({cartItems}:any) {
  return (
    <PageContainer>
        <div className={style['cart-container']}>
            {cartItems.map((item:any)=>(
            <>
                  <div key={item.id} className={style['cart-like']}>
                    <div className={style['block-like']}>
                      <img src={`./img/${item.img}.jpg`} />
                      <div className={style['text-like']}>
                        <b>Adi:</b>
                        <h3>{item.item}</h3>
                      </div>
                    </div >
                    <div className={style['text-like']}>
                        <h3>Qiymet :</h3>
                        <h2>{item.price}$</h2>
                    </div>
                  </div>
                </>
            ))}
        </div>
    </PageContainer>
  )
}

export default LikePage