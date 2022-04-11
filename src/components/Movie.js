import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Movie({ medium_cover_image, title, genres, id, rating, summary }) {
  //mouse 이벤트 useState함수
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link to={`/movie/${id}`}>
      <div
        className={styles.movie}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <img
          src={medium_cover_image}
          alt={title}
          className={styles.movie__img}
        ></img>
        {isHovering ? (
          <div className={styles.onmouse}>
            <span>
              {summary.length > 80 ? `${summary.slice(0, 80)}...` : summary}
            </span>
          </div>
        ) : null}

        <h2 className={styles.movie__title}>{title}</h2>
        <div className={styles.movie__description}>
          <span>
            <FontAwesomeIcon icon={faStar} className={styles.star_icon} />{' '}
            {rating}
          </span>
          <ul className={styles.movie__genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};
export default Movie;
