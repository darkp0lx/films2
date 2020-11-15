import React from "react";
import love from "../assets/love.png";
const base = "https://image.tmdb.org/t/p/w400/";
const Film = ({ film }) => {
  return (
    <figure className="film imghvr-slide-down">
      <div className="container">
        <h2>{film.title}</h2>
        <img
          className="bg"
          loading="lazy"
          src={`${base}${film.poster_path}`}
          alt=""
        />
        <div className="like">
          <p>{film.vote_average}</p>
          <img src={love} alt="loveIcon" className="love" />
        </div>
      </div>
      <figcaption>
        <p style={{ marginTop: 30, fontWeight: 600 }}> {film.overview}</p>
        <img className="bg" loading="lazy" src={`${base}${film.backdrop_path}`} alt="" />
      </figcaption>
    </figure>
  );
};

export default Film;
