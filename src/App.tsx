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


import SingleJetSki from "./Page/JetSkis/Single/Single"
import Contact from "./Page/Contact/Contact"
import SingleAtv from "./Page/Atv/Single/SingleAtv"
import Boats from "./Page/Boat/Boats"
import BigBoats from "./Page/BigBoats/BigBoats"
import SingleBoats from "./Page/Boat/Single/SingleBoats"
import SingleBİgBoats from "./Page/BigBoats/Single/SingleBİg-Boats"
import SingleAllTerrainVehicles from "./Page/All-terrain vehicles/SingleAllTerrainVehicles/SingleAllTerrainVehicles"
import SingleSnowmobiles from "./Page/Snowmobiles/SingleSnowmobiles/SingleSnowmobiles"
import SingleSpareParts from "./Page/SpareParts/SsingleSpareParts/SingleSpareParts"
import GoodTwo from "./layout/goodTwo/goodTwo"
import Goods from "./layout/goods/Goods"


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
          <Route path="/BigBoats/:id" element={<SingleBİgBoats/>}/>
          <Route path="/Boats" element={<Boats/>}/>
          <Route path="/Boats/:id" element={<SingleBoats/>}/>
          <Route path="/Hydrocycles" element={<Hydrocycles/>}/>
          <Route path="/Hydrocycles/:id" element={<SingleJetSki/>}/>
          <Route path="/SpareParts" element={<SpareParts/>}/>
          <Route path="/SpareParts/:id" element={<SingleSpareParts/>}/>
          <Route path="/Snowmobiles" element={<Snowmobiles/>}/>
          <Route path="/Snowmobiles/:id" element={<SingleSnowmobiles/>}/>
          <Route path="/Engines" element={<Engines/>}/>
          <Route path="/AllTerrainVehicles" element={<AllTerrainVehicles/>}/>
          <Route path="/AllTerrainVehicles/:id" element={<SingleAllTerrainVehicles/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/GoodTow" element={<GoodTwo/>}/>
          <Route path="/GoodTow/:id" element={<SingleSpareParts/>}/>
          <Route path="/Goods" element={<Goods/>}/>
          <Route path="/Goods/:id" element={<SingleSpareParts/>}/>
      </Routes>
    </div>
    <Footer/>

    </>     
  )
}

export default App
