import { motion } from "framer-motion";

function Movie({ movie }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="movie-detail-space-between"
    >
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="movie back drop image"
      />
    </motion.div>
  );
}
export default Movie;
