import '../../style.scss'
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <div className="Navbar-container">
            <ul>
              <NavLink to={'/atv'} >
                <li>ATV-lər</li>
              </NavLink>
              <NavLink to={'/Boats'} >
                <li>Böyük-Qayıqlar</li>
              </NavLink>
              <NavLink to={'/Hydrocycles'} >
                <li>Su üstə avtomobilləri</li>
              </NavLink>
                <li>Qayıqlar</li>
                <li>Bütün ərazi nəqliyyat vasitələri</li>
                <li>Qar avtomobilləri</li>
                <li>Mühərriklər</li>
                <li>Ehtiyat hissələri</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar