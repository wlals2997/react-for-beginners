import styles from './Navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <header className={styles.logo}>
          <Link to='/'>
            <FontAwesomeIcon icon={faFilm} className={styles.icon} />
            MOVIE
          </Link>
        </header>
        <ul className={styles.navbar_list}>
          <Link to='/movie'>
            <li className={styles.menu}>영화</li>
          </Link>
          <Link to='/movie'>
            <li className={styles.menu}>영화</li>
          </Link>
          <Link to='/movie'>
            <li className={styles.menu}>영화</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
