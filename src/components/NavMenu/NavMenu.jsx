import React from 'react';
import styles from './NavMenu.module.css';

import { Link } from 'react-scroll';


const NavMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <Link to="main"
            className={styles.link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
      >Main</Link>
      <Link to="skills"
            className={styles.link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
      >Skills</Link>
      <Link to="projects"
            className={styles.link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
      >Projects</Link>
      <Link to="contacts"
            className={styles.link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
      >Contacts</Link>
    </nav>
  );
};

export default NavMenu;