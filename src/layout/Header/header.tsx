import { FaLocationDot } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-container">
        <div className="header-left">
          <Link to={'/'}>
            <h2> Mağazalar</h2>
          </Link>
          <Link to={'/Stock'}>
            <h2>Səhm</h2>
          </Link>
          <Link to={'/Contact'} >
            <h2>Çatdırılma və ödəniş</h2>
          </Link>
        </div>
        <div className="header-right">
            <div className="header-right-block">
                <FaLocationDot />
                <h2>Baki kc , Babək</h2>
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