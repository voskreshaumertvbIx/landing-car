import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const inspiration = ['Automatic Cars', 'Suvs', 'Electric Cars', 'New in Stock', 'Petrol', 'Diesel'];

const Inspiration = () => {
 
  
 
  
  return (
    <div className={styles.inspiration_container}>
      <h1 className={styles.header}>need some inspiration?</h1>
      <div className={styles.button_container}>
        {
          inspiration.map((text, index) => (
            <button
              key={index}
              className={styles.button_item}
             
            >
              {text}
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default Inspiration;
