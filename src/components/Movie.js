import React from "react";
import "./Movie.css";
import { useStateValue } from "../StateProvider";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const image_API = "https://image.tmdb.org/t/p/w500/";

function Movie({ title, poster_path, vote_count }) {
  const [{ basket }, dispatch] = useStateValue();

  const addTocart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title: title,
        poster_path:poster_path,
        vote_count: vote_count,
      },
    });
  };

  return (
    <div className="movie__card">
      <div className="card__top">

      <img src={image_API + poster_path} alt="" />
      <div className="card__info">
        <p>{title}</p>
      </div>
      </div>

      <div className="card__bot">

      <span className='tag'>{`$ ${vote_count}`}</span>
      <div onClick={addTocart} className="addtocart">
        <AddShoppingCartIcon/>
      </div>
      </div>

    </div>
  );
}

export default Movie;
