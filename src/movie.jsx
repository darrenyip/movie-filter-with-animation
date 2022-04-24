function Movie({ movie }) {
  return (
    <div>
      <h2 className="">{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="movie back drop image"
      />
    </div>
  );
}
export default Movie;
