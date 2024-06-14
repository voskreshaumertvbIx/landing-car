import styles from "./style.module.css";

const clarity = [
  {
    name: "Used Cars",
  },
  {
    name: "Any Makes",
  },
  {
    name: "Any Models",
  },
  {
    name: "All Prices",
  },
];
const SubMain = () => {
  return (
    <div className={styles.submain_container}>
      <header className={styles.header_container}>
        <p className={styles.header_text}>Find cars for sale and for rent near you</p>
        <h1 className={styles.main_header}>Find Your Dream Car</h1>
      </header>
      <div className={styles.search_container}>
        <ul className={styles.search_list}>
          {clarity.map(({ name }, index) => {
           return <div> <li className={styles.search_item} key={index}>{name}</li>
           
           </div>
            
          })}
        </ul>
        <img className={styles.search_icon}src="./img/Buttonsearch_bar.svg" alt="" />
      </div>
      <img className={styles.car_background} src="./img/car_on_slider.svg" alt="car for slider" />
    </div>
  );
};

export default SubMain;
