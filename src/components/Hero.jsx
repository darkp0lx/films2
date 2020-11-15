import React, { useEffect, useState } from "react";
import GridFilms from "./GridFilms";
import Search from "./Search";
import axios from "axios";
const API = {
  key: "f121b8a1abf213b4fa7483571453edb3",
  base: "https://api.themoviedb.org/3",
};
const Hero = ({ handleLogOut }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  useEffect(() => {
    const getFilms = async () => {
      const data = await axios(
        `${API.base}/movie/popular?api_key=${API.key}&language=es-US&page=`
      );
      if (input !== "") {
        const dataInput = await axios(
          `https://api.themoviedb.org/3/search/movie?api_key=f121b8a1abf213b4fa7483571453edb3&language=es&query=${input}&page=1&include_adult=false`
        );
        setFilms(dataInput.data);
      } else {
        setFilms(data.data);
      }
    };
    setLoading(false);
    getFilms();
  }, [input]);
  return (
    <div>
      <section className="hero">
        <nav>
          <h2>Welcome</h2>
          <button onClick={handleLogOut}>logUp</button>
        </nav>
        <Search setInput={setInput} />
        <GridFilms loading={loading} films={films} />
      </section>
    </div>
  );
};

export default Hero;
