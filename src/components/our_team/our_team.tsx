import React from 'react';
import { team } from './team';
import styles from './style.module.css'




const OurTeam = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_header}>our team</h1>
      <div className={styles.card_container}>
      {
        team.map(({name, position, src})=>{
          return <div className={styles.card_item}>
            <div className={styles.text_container}>
            <h3 className={styles.header}>{name}</h3>
            <p className={styles.position}>{position}</p>
            </div>
            <img src={src} alt="" />
          </div>
        })
      }
   </div> </div>
  );
}

export default OurTeam;
