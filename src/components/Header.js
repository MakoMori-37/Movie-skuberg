import React from "react";
import "./Header.css";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Header() {

  const [{ basket }, dispatch] = useStateValue();
 
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__image"
          src="https://filmboard.mtu.edu/static/bucket/923aeb4a2b10f3e3cd793b3bde595df83c818cd5a4ea5d71486438f4b063c63ffa48fd6bc166ede140cd3d1f0a5e5c5db7388b63d1af96c9c69ebdce2c833acf.png"
          alt=""
        />
      </Link>

      <div className="top__search">
        
      </div>

      <div className="header__nav">
        <div className="hello">
          <p>Welcome</p>
          <span>User #0012</span>
        </div>
        <Link to="/checkout">
          <ShoppingBasketOutlinedIcon />
          <span className="h__span">{basket?.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
