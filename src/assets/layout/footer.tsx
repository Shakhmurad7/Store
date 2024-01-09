import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <h2>Подпишитесь на нашу рассылку и узнавайте о акция быстрее</h2>
            <div className="footer-block-left">
                <input type="text"/>
                <button>Отправить</button>
            </div>
        </div>
        <div className="footer-center">

            <div className="footer-center-block">
                <div className="footer-block-text">
                    <ul>
                        <li className="one-text" >Информация</li>
                        <li>О компании</li>
                        <li>Контакты</li>
                        <li>Акции</li>
                        <li>Магазины</li>
                    </ul>
                </div>
                <div className="footer-block-text">
                <ul>
                        <li className="one-text" >Интернет-магазин</li>
                        <li>Доставка и самовывоз</li>
                        <li>Оплата</li>
                        <li>Возврат-обмен</li>
                        <li>Новости</li>
                    </ul>
                </div>
            </div>

            <div className="footer-icon">
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
            </div>

        </div>
    </div>
  )
}

export default Footer