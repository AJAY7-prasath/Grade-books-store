import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
  const countnew = useSelector((state) => state.cartcount.cartcountnew);
  return (
    <>
      <div className="container">
      <div className="logo"> <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Comic-world</Link></div>
        <div className="nav-items">
          <p>Products</p>
          <p>About</p>
          <p><Link to="/Cart" style={{textDecoration: 'none'}}>Cart: {countnew.length}</Link></p>
        </div>
      </div>
    </>
  );
}

export default Header;
