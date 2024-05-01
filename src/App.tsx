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
import { ToastContainer,toast } from 'react-toastify';
import { useState } from "react"
import LikePage from "./layout/LikePage/LikePage"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cartItems , setCartItems] = useState<any>([])

  const addTodoItem = (index:any)=>{
    const existingProductIndex = cartItems.findIndex((produ:any)=> produ.id === index.id  )

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].count++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...index, count: 1 }]);
    }
    
    toast.success(`${cartItems.item} sepete eklendi`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  

  return (
    <>
    <div className="Big-Container">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/atv"  element={<Atv addTodoItem={addTodoItem} />}/>
          <Route path="/atv/:id" element={<SingleAtv />}/>
          <Route path="/BigBoats" element={<BigBoats addTodoItem={addTodoItem} dispatch={undefined} />}/>
          <Route path="/BigBoats/:id" element={<SingleBİgBoats  />}/>
          <Route path="/Boats" element={<Boats addTodoItem={addTodoItem} dispatch={undefined} />}/>
          <Route path="/Boats/:id" element={<SingleBoats />}/>
          <Route path="/Hydrocycles" element={<Hydrocycles addTodoItem={addTodoItem} dispatch={undefined} />}/>
          <Route path="/Hydrocycles/:id" element={<SingleJetSki/>}/>
          <Route path="/SpareParts" element={<SpareParts addTodoItem={addTodoItem} />}/>
          <Route path="/SpareParts/:id" element={<SingleSpareParts/>}/>
          <Route path="/Snowmobiles" element={<Snowmobiles addTodoItem={addTodoItem} dispatch={undefined} />}/>
          <Route path="/Snowmobiles/:id" element={<SingleSnowmobiles/>}/>
          <Route path="/Engines" element={<Engines addTodoItem={addTodoItem} dispatch={undefined} />}/>
          <Route path="/AllTerrainVehicles" element={<AllTerrainVehicles addTodoItem={addTodoItem} dispatch={undefined} /> }/>
          <Route path="/AllTerrainVehicles/:id" element={<SingleAllTerrainVehicles/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/GoodTow" element={<GoodTwo/>}/>
          <Route path="/GoodTow/:id" element={<SingleSpareParts/>}/>
          <Route path="/Goods" element={<Goods/>}/>
          <Route path="/LikePage" element={<LikePage cartItems={cartItems} setCartItems={setCartItems}  />}/>
          <Route path="/Goods/:id" element={<SingleSpareParts/>}/>
      </Routes>
      <ToastContainer />
    </div>
    <Footer/>

    </>     
  )
}

export default App

