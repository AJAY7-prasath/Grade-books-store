import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementnew, decrementnew } from "./cartSlice";
import "./assets/cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cartcount.cartcountnew);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [cartItems]);

  const handleIncrement = (item) => {
    dispatch(incrementnew(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementnew(item));
  };

  if (cartItems.length === 0) return <h3>Cart Is Empty</h3>;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="item-details">
                <div>{item.title}</div>
                <div className="quantity">
                  <button onClick={() => handleIncrement(item)}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleDecrement(item)}>-</button>
                </div>
                <div className="price">Price: ${item.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <div className="price-card">
            <p>Total Amount: ${total}</p>
            <p>Delivery Charge: $1.5</p>
            <p>Total Payable: ${total + 1.5}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
