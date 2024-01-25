import { Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import Stock from "./Page/Stock/Stock"
import Footer from "./assets/layout/footer"
import Atv from "./Page/Atv/Atv"
import Boats from "./Page/Boats/Boats"
import Hydrocycles from "./Page/Hydrocycles/Hydrocycles"


function App() {
  return (
    <>
    <div className="Big-Container">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stock" element={<Stock/>} />
          <Route path="/atv" element={<Atv/>}/>
          <Route path="/Boats" element={<Boats/>}/>
          <Route path="/Hydrocycles" element={<Hydrocycles/>}/>
      </Routes>
    </div>
    <Footer/>

    </>     
  )
}

export default App
