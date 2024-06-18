import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './styles.module.css';
import SearchedCarItem from './searched_car_item';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const SearchedItems: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', 
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            toggleActions: 'play none none none',
          }
        }
      );
    }

    listItemsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el, 
          { opacity: 0, x: -50 }, 
          { opacity: 1, x: 0, duration: 1, ease: 'power2.out', 
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
    <>
      <div className={styles.main_header} ref={headerRef}>
        <h1 className={styles.head}>The Most Searched Cars</h1>
        <ul className={styles.car_list}>
          {['In Stock', 'Sedan', 'SUV', 'Convertible'].map((item, index) => (
            <li key={index} ref={el => listItemsRef.current[index] = el}>
              <a className={styles.items_car} href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <SearchedCarItem />
    </>
  );
}

export default SearchedItems;
