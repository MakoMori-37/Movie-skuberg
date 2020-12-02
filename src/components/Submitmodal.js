import React, { useState, useEffect } from "react";
import "./Submitmodal.css";

function Submitmodal({ open, setOpen, start }) {
  const [input, setInput] = useState("");

  const counter = start;

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (counter === true) {
      if (seconds > 0) {
        return setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        alert("Time out!");
        window.location.reload(true);
      }
    } else {
    }
  });

  console.log(seconds);
  console.log(counter);

  return (
    <>
      {open ? (
        <div className="postmodal__container">
          <div className="postmodal">
            <div className="hmodal">
              <h3>Payment confirmation</h3>
            </div>
            <div className="underlinemodal"></div>

            <div className="timeout">
              <div className="showtime">
                <p>Enter the code from your phone</p>

                <div className="countdown">
                  <h2>{seconds}</h2>
                </div>
              </div>

              <div className="otp">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="enter OTP"
                  type="text"
                />
              </div>
            </div>

            <div
              onClick={() =>
                setOpen((prev) => !prev) & window.location.reload(true)
              }
              className="modalbut"
            >
              <button>Submit</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Submitmodal;
