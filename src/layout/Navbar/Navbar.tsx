import '../../style.scss'
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
function Navbar({menu , setmenu}:any) {



  return (
    <div>
        <div className={`Navbar-container ${ menu? `open` : 'close'}`}>
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
              { menu?  "" : 
                    <div  onClick={()=>setmenu(!menu)} className="close-position">
                       <IoClose />
                     </div> 
              }
    
            </ul>

        </div>
    </div>
  )
}

export default Navbar