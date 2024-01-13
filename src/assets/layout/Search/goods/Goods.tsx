import style from './goods.module.scss'
function Goods() {
  return (
    <div className={style['goods-container']}>
        <div className={style['goods-top-itme']}>
            <h2>Популярные товары</h2>
        </div>
        <div className={style['goods-list']}>
            <p>запчасти</p>
            <p>моторы</p>
            <p>шины </p>
            <p>электроника</p>
            <p>инструменты</p>
            <p>аксессуары </p>
        </div>
    </div>
  )
}

export default Goods