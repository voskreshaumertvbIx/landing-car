import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './style.module.css';

const clarity = [
  { name: "Used Cars" },
  { name: "Any Makes" },
  { name: "Any Models" },
  { name: "All Prices" },
];

const SubMain = () => {
  const subMainRef = useRef(null);
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const carBackgroundRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(subMainRef.current, { opacity: 1, duration: 1, ease: 'power2.inOut' })
      .to(headerRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }, "-=0.5")
      .to(searchRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' }, "-=0.5")
      .to(carBackgroundRef.current, { opacity: 1, duration: 1, ease: 'power2.inOut' }, "-=0.5");
  }, []);

  return (
    <div ref={subMainRef} className={styles.submain_container} style={{ opacity: 0 }}>
      <header ref={headerRef} className={styles.header_container} style={{ opacity: 0, transform: 'translateY(-20px)' }}>
        <p className={styles.header_text}>Find cars for sale and for rent near you</p>
        <h1 className={styles.main_header}>Find Your Dream Car</h1>
      </header>
      <div ref={searchRef} className={styles.search_container} style={{ opacity: 0, transform: 'translateY(-20px)' }}>
        <ul className={styles.search_list}>
          {clarity.map(({ name }, index) => (
            <div key={index}>
              <li className={styles.search_item}>{name}</li>
            </div>
          ))}
        </ul>
        <img className={styles.search_icon} src="./img/Buttonsearch_bar.svg" alt="search icon" />
      </div>
      <img ref={carBackgroundRef} className={styles.car_background} src="./img/car_on_slider.svg" alt="car for slider" style={{ opacity: 0 }} />
    </div>
  );
};

export default SubMain;
