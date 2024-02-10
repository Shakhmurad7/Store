import { Route, Routes } from "react-router-dom"
import Home from "./Page/Home/Home"
import Stock from "./Page/Stock/Stock"
import Atv from "./Page/Atv/Atv"
import Hydrocycles from "./Page/JetSkis/JetSkis"
import Footer from "./layout/Footer/footer"
import SpareParts from "./Page/SpareParts/SpareParts"
import Snowmobiles from "./Page/Snowmobiles/Snowmobiles"
import Engines from "./Page/Engines/Engines"
import AllTerrainVehicles from "./Page/All-terrain vehicles/AllTerrainVehicles"
import BigBoats from "./Page/BigBoats/BigBoats"
import Boat from "./Page/Boat/Boat"
import SingleJetSki from "./Page/JetSkis/Single/Single"
import Contact from "./Page/Contact/Contact"
import SingleAtv from "./Page/Atv/Single/SingleAtv"


function App() {
  return (
    <>
    <div className="Big-Container">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stock" element={<Stock/>} />
          <Route path="/atv" element={<Atv/>}/>
          <Route path="/atv/:id" element={<SingleAtv/>}/>
          <Route path="/BigBoats" element={<BigBoats/>}/>
          <Route path="/Boat" element={<Boat/>}/>
          <Route path="/Hydrocycles" element={<Hydrocycles/>}/>
          <Route path="/Hydrocycles/:id" element={<SingleJetSki/>}/>
          <Route path="/SpareParts" element={<SpareParts/>}/>
          <Route path="/Snowmobiles" element={<Snowmobiles/>}/>
          <Route path="/Engines" element={<Engines/>}/>
          <Route path="/AllTerrainVehicles" element={<AllTerrainVehicles/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
    <Footer/>

    </>     
  )
}

export default App
