import PageContainer from "../../Components/PageContainer";
import style from './style.module.scss'


import { IoMdClose } from "react-icons/io";
function LikePage({cartItems , setCartItems}:any) {

    const removItem = (product:any)=>{
        const removedata = cartItems.filter((prod:any)=> product !== prod.id)
        setCartItems(removedata)
    }   

    const TotlaItem = cartItems.reduce((total:any, item:any)=> total + item.count , 0 )
    const TotlaItemPrice = cartItems.reduce((total:any, item:any)=> total + item.count * item.price , 0 )
     
    console.log(cartItems);
    
  return (
    <PageContainer>
        {
            cartItems && TotlaItem !== 0 ? (

                <div className={style['cart-container']}>
            {cartItems.map((item:any)=>(
                <div key={item.id} className="">
              <div  className={style['cart-like']}>
                    <div className={style['block-like']}>
                        <div className={style['button-like-top']} onClick={()=>removItem(item.id)} >
                            <IoMdClose />
                        </div>
                      <img src={`./img/${item.img}.jpg`} />
                      <div className={style['text-like-one']}>
                        <b>Adi:</b>
                        <h3>{item.item}</h3>
                      </div>
                    </div >
                    <div className={style['text-like']}>
                        <div className={style['button-like']} onClick={()=>removItem(item.id)} >
                            <IoMdClose />
                        </div>
                        <h3>Qiymet:</h3>
                        <h2>{item.price}$</h2>
                    </div>
                  </div>
            </div>
            ))}
                  <div className="">
                    <h3>Sayi: {TotlaItem}</h3>
                    <h3>Umumi Qiymet: <b>{TotlaItemPrice}$</b></h3>
                  </div>
        </div>
            ): <div style={{paddingTop:'20px' , textAlign:'center'}}> 
                    <h1>Beyendiyniz Esiya Bulunmadi</h1>
                </div>
}
    </PageContainer>
  )
}

export default LikePage