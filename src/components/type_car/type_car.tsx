import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.css';

gsap.registerPlugin(ScrollTrigger);

const car_icons = [
  { src: './car_icons/suv.svg', name: 'suv' },
  { src: './car_icons/sedan.svg', name: 'sedan' },
  { src: './car_icons/hatchback.svg', name: 'hatchback' },
  { src: './car_icons/coupe.svg', name: 'coupe' },
  { src: './car_icons/hybrid.svg', name: 'hybrid' },
  { src: './car_icons/convertible.svg', name: 'convertible' },
  { src: './car_icons/van.svg', name: 'van' },
  { src: './car_icons/truck.svg', name: 'truck' },
  { src: './car_icons/electric.svg', name: 'electric' },
];

const car_action = [
  {
    title: 'Are you looking for a car?',
    text: 'We are committed to providing our customers with exceptional service.',
    icon: './car_icons/blue_car.svg',
  },
  {
    title: 'Do you want to sell a car?',
    text: 'We are committed to providing our customers with exceptional service.',
    icon: './car_icons/sell_car.svg',
  }
];

const TypeCar: React.FC = () => {
  const carIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const carActionRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    carIconsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 2, ease: 'power2.out', 
            scrollTrigger: {
              trigger: el,
              start: 'top 75%',
              end: 'top 50%',
              scrub: true
            }
          }
        );
      }
    });

    carActionRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 2, ease: 'power2.out', 
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className={styles.main_container}>
      <h1 className={styles.main_head}>Browse by Type</h1>
      <div className={styles.cars_section}>
        {car_icons.map(({ src, name }, index) => (
          <div className={styles.car_item} key={index} ref={el => carIconsRef.current[index] = el}>
            <img src={src} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className={styles.car_action_section}>
        {car_action.map(({ title, text, icon }, index) => (
          <div className={styles.car_action_item} key={index} ref={el => carActionRef.current[index] = el}>
            <h2 className={styles.car_action_name}>{title}</h2>
            <p className={styles.car_action_text}>{text}</p>
            <div className={styles.footer}>
              <button className={styles.submit_button}>
                Get started <img src='./img/up.svg' alt="" />
              </button>
              <img className={styles.car_action_icon} src={icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypeCar;
