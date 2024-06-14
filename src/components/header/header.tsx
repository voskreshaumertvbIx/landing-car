import React, { useState } from 'react';
import styles from "./style.module.css";

const links = [
  { name: "Home" },
  { name: "Listings" },
  { name: "Blog" },
  { name: "Pages" },
  { name: "About" },
  { name: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container}>
        <img className={styles.main_logo} src="./img/logo.svg" alt="site logo" />
        <img className={styles.phone_logo} src="./img/phone_icon.svg" alt="phone logo" />
        <p className={styles.phone_number}>+123-78-58-69</p>
      </div>
      <nav className={styles.navigation_container}>
        <ul className={styles.navigation_list}>
          {links.map(({ name }, index) => (
            <li className={styles.nav_text} key={index}>{name}</li> 
          ))}
          <li>
            <img className={styles.signin_icon} src="./img/sign_in.svg" alt="sign_icon" />
            <a href="" className={styles.nav_text}>Sign in</a>
          </li>
        </ul>
        <button className={styles.submit_button}>Submit Listing</button>
        <div className={styles.burger_menu} onClick={toggleMenu}>
          <div className={styles.burger_line}></div>
          <div className={styles.burger_line}></div>
          <div className={styles.burger_line}></div>
        </div>
      </nav>
      {menuOpen && (
        <div className={styles.fullscreen_menu}>
          <div className={styles.close_button} onClick={closeMenu}>&times;</div>
          <ul className={styles.fullscreen_navigation_list}>
            {links.map(({ name }, index) => (
              <li className={styles.fullscreen_nav_text} key={index} onClick={closeMenu}>{name}</li> 
            ))}
            <li onClick={closeMenu}>
              <img className={styles.signin_icon} src="./img/sign_in.svg" alt="sign_icon" />
              <a href="" className={styles.fullscreen_nav_text}>Sign in</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
