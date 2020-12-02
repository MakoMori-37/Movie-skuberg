import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import DeleteIcon from '@material-ui/icons/Delete';

const image_API = "https://image.tmdb.org/t/p/w500/";

function CheckoutProduct({ title, poster_path, vote_count }) {

  const [{ basket }, dispatch] = useStateValue();

  const remove = () => {
    dispatch({
      type: "REMOVE",
    });
  };

  return (
    <div className="checkoutproduct">
      <div className="checkoutproduct__pic">
        <img src={image_API + poster_path} alt="" />
      
      </div>
        <div className="checkoutproduct__title">
          <p>{title}</p>
        </div>
        <div className="checkoutproduct__bot">

        <span className="checkoutproduct__price">{`$ ${vote_count}`}</span>
        <div onClick={remove} className="bot__button">
          <DeleteIcon/>
        </div>
        </div>
    </div>
  );
}

export default CheckoutProduct;
