
import styles from './style.module.css'
import { reasons } from './whu_uchoose';
const Whyuchoose = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_header}>why choose us?</h1>
      <div className={styles.card_container}>
      {
        
        reasons.map(({img,reasons,description})=>{
          return <div className={styles.card_item}>
            <img src={img} alt="" className={styles.card_img}/>
            <h2 className={styles.card_name}>{reasons}</h2>
            <p className={styles.card_description}>{description}</p>
          </div>
        })}</div>
    </div>
  );
}

export default Whyuchoose;
