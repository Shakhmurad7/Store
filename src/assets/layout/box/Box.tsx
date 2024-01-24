
import style from './index.module.scss'
function Box() {
  return (
    <div className={style['box-contaier']}>
        <div className={style['box-block']}>
        <div className={style['img-box']}>
            <img src={'./img/Stor-img1.png'}  />
            <img src={'./img/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue_3-4-front4072 2.png'} />
        </div>
        <div className={style['center-text']}>
            <h1>Bütün ehtiyat hissələrinə 70%-ə qədər endirim</h1>
        </div>
        <div className={style['left-text']}>
            <h3>HAMISINA BAXIN</h3>
        </div>
        </div>
    </div>
  )
}

export default Box