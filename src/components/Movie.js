import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Description from '../routes/Description';
function Movie({ medium_cover_image, title, genres, id, rating }) {
  return (
    <div className={styles.movie}>
      <img
        src={medium_cover_image}
        alt={title}
        className={styles.movie__img}
      ></img>
     
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}> {title} </Link>
      </h2>
      <div className={styles.movie__description}>
      <span>
          
          <FontAwesomeIcon icon={faStar} className={styles.star_icon} /> {rating}
        </span>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
       
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating:PropTypes.number.isRequired,
};
export default Movie;
