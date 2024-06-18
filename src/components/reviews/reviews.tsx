import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.css';

gsap.registerPlugin(ScrollTrigger);

const reviews = ['./reviews/trustpilot.svg', './reviews/google.svg', './reviews/birdeye.svg'];

const Reviews: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.fromTo(
      container,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.reviews_container} ref={containerRef}>
      <div className={styles.main_container}>
        <div className={styles.header_container}>
          <h1 className={styles.header}>Who is BoxCar</h1>
          <p className={styles.text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
          </p>
        </div>
        <div className={styles.reviews_list}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviews_img}>
              <img className={styles.img} src={review} alt={`Review ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
