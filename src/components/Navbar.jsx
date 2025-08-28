import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to="/" className={styles.logo}>
      Loop Learner
    </Link>
    <div className={styles.links}>
      <Link to="/" className={styles.link}>Categories</Link>
    </div>
  </nav>
);

export default Navbar;
