import { useState, useEffect } from "react";
import Movie from "./movie";
import Filter from "./utils/filter";
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";
function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=743127c442b8188e9b52b760b15d7a3e"
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return (
              <div className="" key={movie.id}>
                <Movie movie={movie} />
              </div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
