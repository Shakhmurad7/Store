import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <h2>Bülletenimizə abunə olun və promosyonlardan daha tez xəbərdar olun</h2>
            <div className="footer-block-left">
                <input type="text"/>
                <button>Göndər</button>
            </div>
        </div>
        <div className="footer-center">

            <div className="footer-center-block">
                <div className="footer-block-text">
                    <ul>
                        <li className="one-text" >Məlumat</li>
                        <li>Şirkət haqqında</li>
                        <li>Əlaqələr</li>
                        <li>Səhm</li>
                        <li>Mağazalar</li>
                    </ul>
                </div>
                <div className="footer-block-text">
                <ul>
                        <li className="one-text" >Online mağaza</li>
                        <li>Çatdırılma və götürmə</li>
                        <li>Ödəniş</li>
                        <li>Qaytarma - mübadilə</li>
                        <li>Xəbərlər</li>
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