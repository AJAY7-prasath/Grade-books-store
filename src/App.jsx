import React, { useState } from "react";
import Posters from "./Posters";
import list from "./data";
import "./assets/poster.css";
import Header from "./Header";
import "./assets/header.css"
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Cart from "./Cart";
function App() {
  const [cart,setcart]=useState([]);
  return (
    <>
    <BrowserRouter>
    <Header cart={cart}/>
    <Routes>
      <Route path="/" element={
      <div className="app">
        {list.map((poster) => (
          <Posters key={poster.id} poster={poster} setcart={setcart} cart={cart}/>
        ))}
      </div>}/>
      <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
