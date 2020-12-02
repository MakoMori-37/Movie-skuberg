import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import Submitmodal from "./Submitmodal";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const [cvc, setCvc] = useState("");

  const [open, setOpen] = useState(false);

  const [start, setStart] = useState(false);

  const openModal = () => {
    setOpen((prev) => !prev);
    setStart(true);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Order Total ({basket.length}) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <img
                src="https://upgradedpoints.com/wp-content/uploads/2018/02/Amazon-Rewards-Visa-Signature-Credit-Card.png"
                alt=""
              />
              <div className="toppinput">
                <input disabled={true} placeholder="1111-222-333" type="text" />
              </div>

              <div className="botinput">
                <input
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="password"
                  maxlength="4"
                  type="text"
                />
              </div>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$ "}
      />

      <button disabled={!cvc} onClick={openModal}>
        Submit
      </button>

      <Submitmodal open={open} setOpen={setOpen} start={start} />
    </div>
  );
}

export default Subtotal;
