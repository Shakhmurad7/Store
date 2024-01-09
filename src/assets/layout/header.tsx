import { FaLocationDot } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
function Header() {
  return (
    <div className="header-container">
        <div className="header-left">
            <h2>Магазины</h2>
            <h2>Акции</h2>
            <h2>Доставка и оплата</h2>
        </div>
        <div className="header-right">
            <div className="header-right-block">
                <FaLocationDot />
                <h2>Москва,  ул. Науки  25</h2>
            </div>
            <div className="header-right-block-icon">
                 <CiHeart />
                 <IoPersonSharp />
                 <SlBasket />
            </div>
        </div>
    </div>
  )
}

export default Header