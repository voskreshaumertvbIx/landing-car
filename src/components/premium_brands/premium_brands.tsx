import React from 'react';
import styles from './styles.module.css'
const PremiumBrands = () => {
  return (
    <div className={styles.main_container}>
     <section className={styles.text_container}>
      <h1 className={styles.header}>explore our premium brands</h1>
      <p className={styles.text}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</p>
      <button className={styles.submit_button}>show all brands</button>
     </section>
     <img className={styles.img} src="./img/brand.png" alt="" />
    </div>
  );
}

export default PremiumBrands;
