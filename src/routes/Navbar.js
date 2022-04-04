import styles from './Navbar.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <header className={styles.logo}>
          <a href='/'>
            <FontAwesomeIcon icon={faFilm} className={styles.icon} />
            MOVIE
          </a>
        </header>
        <ul className={styles.navbar_list}>
          <li className={styles.menu}>
            <a href='/movie'>영화</a>
          </li>
          <li className={styles.menu}>
            <a href='/movie'>영화</a>
          </li>
          <li className={styles.menu}>
            <a href='/movie'>영화</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
