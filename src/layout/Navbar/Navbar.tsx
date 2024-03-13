import '../../style.scss'
import { NavLink } from "react-router-dom";
function Navbar({menu , setmenu}:any) {



  return (
    <div>
        <div className={`Navbar-container ${ menu? `` : 'active'}`}>
            <ul>
              <NavLink to={'/atv'} >
                <li>ATV-lər</li>
              </NavLink>
              <NavLink to={'/BigBoats'} >
                <li>Böyük-Qayıqlar</li>
              </NavLink>
              <NavLink to={'/Hydrocycles'} >
                <li>Su üstə avtomobilləri</li>
              </NavLink>
              <NavLink to={'/Boats'} >
                <li>Qayıqlar</li>
              </NavLink>
              <NavLink to={'/AllTerrainVehicles'} >
                <li>Bütün ərazi nəqliyyat vasitələri</li>
              </NavLink>
              <NavLink to={'/Snowmobiles'} >
                <li>Qar avtomobilləri</li>
              </NavLink>
                <NavLink to={'/Engines'}>
                    <li>Mühərriklər</li>
                </NavLink>
                <NavLink to={"/SpareParts"}>
                   <li>Ehtiyat hissələri</li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Navbar