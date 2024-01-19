import { Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import Stock from "./Page/Stock"
import Footer from "./assets/layout/footer"


function App() {
  return (
    <>
    <div className="Big-Container">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stock" element={<Stock/>} />
      </Routes>
    </div>
    <Footer/>

    </>     
  )
}

export default App
