import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';



function Checkout() {

  const [{basket}, dispatch] = useStateValue();

  


  return (
    <div className="checkout">
      <div className="check__left">
      
        <div className="checktext">
          <p>Your Shopping Basket</p>
          <div onClick={() => window.location.reload(true)} className="chicon">

          <DeleteSweepIcon/>
          </div>
        </div>

        <div className="product">
        {basket.map(item => (

        <CheckoutProduct     
          title={item.title}
          poster_path={item.poster_path}
          vote_count={item.vote_count}
        />
        ))}
      </div>
      </div>
      <div className="check__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
