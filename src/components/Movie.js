import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from "./Movie.module.css"
function Movie({ medium_cover_image, title, genres, id }) {
  return (
    
    <div className={styles.movie}>
      <img src={medium_cover_image} alt={title} className={styles.movie__img}></img>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}> {title} </Link>
      </h2>
    
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
