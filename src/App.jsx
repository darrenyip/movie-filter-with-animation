import { useState, useEffect } from "react";
import Movie from "./movie";
import "./App.css";
function App() {
  const [popular, setPopular] = useState([]);
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
  };
  return (
    <div className="App">
      {popular.map((movie) => {
        return (
          <div className="" key={movie.id}>
            <Movie movie={movie} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
