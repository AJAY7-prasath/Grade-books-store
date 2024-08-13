import React from "react";
import { useDispatch } from "react-redux";
import { incrementnew } from "./cartSlice";

function Posters({ poster, setcart, cart }) {
  const dispatch = useDispatch();

  const handlecart = () => {
    dispatch(incrementnew(poster));
  };

  return (
    <>
      <div className="card">
        <img src={poster.img} alt={poster.title} />
        <div className="details">
          <h3>{poster.title}</h3>
          <p>{poster.author}</p>
          <p><b>Price: ${poster.price}</b></p>
          <button onClick={handlecart}>Add-to-Cart</button>
        </div>
      </div>
    </>
  );
}

export default Posters;
