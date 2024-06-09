import styles from './styles.module.css'
import SearchedCarItem from './searched_car_item';

const SearchedItems = () => {
  return (
   <>
    <div className={styles.main_header}>
      <h1 className={styles.head}>the most searched cars</h1>
      <ul className={styles.car_list}>
        <li><a className={styles.items_car} href="/">In Stock</a></li>
        <li><a className={styles.items_car} href="/">Sedan</a></li>
        <li><a className={styles.items_car} href="/">SUV</a></li>
        <li><a className={styles.items_car} href="/">Convertible</a></li>
      </ul>
      </div>
   <SearchedCarItem/>
   </>
  );
}

export default SearchedItems;
