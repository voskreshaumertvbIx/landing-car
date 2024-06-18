import React, { useEffect, useRef } from 'react';
import { team } from './team';
import styles from './style.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_header}>our team</h1>
      <div className={styles.card_container}>
        {team.map(({ name, position, src }, index) => (
          <div
            className={styles.card_item}
            key={name}
            ref={el => (cardRefs.current[index] = el)}
          >
            <div className={styles.text_container}>
              <h3 className={styles.header}>{name}</h3>
              <p className={styles.position}>{position}</p>
            </div>
            <img src={src} alt={`${name}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
