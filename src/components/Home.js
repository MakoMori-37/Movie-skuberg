import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "./Home.css";
import SearchIcon from "@material-ui/icons/Search";

const api = "https://api.themoviedb.org/3/search/movie?api_key=810a8dca8143376515eecaef3d5d2436&query=a";
const search__api = "https://api.themoviedb.org/3/search/movie?api_key=810a8dca8143376515eecaef3d5d2436&query=";

function Home() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchF = (e) => {
    e.preventDefault();

    fetch(search__api+input)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });

    setInput("");
  };

  return (
    <>
      <form className="search" onSubmit={searchF} >
        <input
          placeholder="Search..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="search__item">
          <SearchIcon />
        </div>
      </form>

      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
      <div className="mv">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default Home;
