import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.css';
import { reasons } from './whu_uchoose';

gsap.registerPlugin(ScrollTrigger);

const Whyuchoose: React.FC = () => {
  const cardItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardItemsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
              toggleActions: 'play none none none',
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_header}>Why Choose Us?</h1>
      <div className={styles.card_container}>
        {reasons.map(({ img, reasons, description }, index) => (
          <div className={styles.card_item} key={index} ref={el => cardItemsRef.current[index] = el}>
            <img src={img} alt="" className={styles.card_img} />
            <h2 className={styles.card_name}>{reasons}</h2>
            <p className={styles.card_description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whyuchoose;
