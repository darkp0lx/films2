import React from "react";
import Film from './Film'
const GridFilms = ({ films, loading }) => {
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <section className="films">
          
          {films.results?
          films.results.map(film=>(
            <Film key={film.id} film={film}/>
          )):""}
        </section>
      )}
    </div>
  );
};

export default GridFilms;
