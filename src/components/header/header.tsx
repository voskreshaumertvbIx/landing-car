import styles from "./style.module.css";

const links = [
  {
    name: "Home",
  },
  {
    name: "Listings",
  },
  {
    name: "Blog",
  },
  {
    name: "Pages",
  },
  {
    name: "About",
  },
  {
    name: "Contact",
  },
 
];

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container}>
        <img
          className={styles.main_logo}
          src="./img/logo.svg"
          alt="site logo"
        />
        <img
          className={styles.phone_logo}
          src="./img/phone_icon.svg"
          alt="phone loge"
        />
        <p className={styles.phone_number}>+123-78-58-69</p>
      </div>
      <nav className={styles.navigation_container}>
        <ul className={styles.navigation_list}>
          {links.map(({ name }, index) => (
            <li className={styles.nav_text} key={index}>{name}</li> 
            
          ))}
       </ul>
       <div>
      <img className={styles.signin_icon}src="./img/sign_in.svg" alt="sign_icon" />
      <a href="" className={styles.nav_text}>Sign in</a>
      </div>
      </nav>
      
      <button className={styles.submit_button}>Submit Listing</button>
    </div>
  );
};

export default Header;
