
import { latest_cars_data } from "./latest_car_data";
import styles from "./../searched_cars/styles.module.css"

 export const LatestCarItem = () => {
  return (
    <div className={styles.cards_container}>
     
      {
     latest_cars_data.map(({img, brand, description,mileage, fuel, transmission,price}, index)=>{
        return <div className={styles.search_car_container} key={index}>
          <div className={styles.img_container}>
          <img src={img} className={styles.car_img} alt="car_model" />
          </div>
          <div className={styles.description_container}>
            <h2 className={styles.car_name}>{brand}</h2>
            <p className={styles.car_description}>{description}</p>
          </div>
          <div className={styles.car_detail_container}>
            <div className={styles.car_detail}> 
            <img src="./car_details/mileage.svg" alt="" /><span className={styles.car_dec}>{mileage}</span>
            </div>
            <div className={styles.car_detail}> 
            <img src="./car_details/fuel.svg" alt="" /><span className={styles.car_dec}>{fuel}</span>
            </div>
            <div className={styles.car_detail}> 
            <img src="./car_details/transmission.svg" alt="" /><span className={styles.car_dec}>{transmission}</span>
            </div>
          </div>
          <div className={styles.car_item_footer}>
            <p className={styles.car_price}>{price}</p>
            <button className={styles.submit_button}>View Details <img src="./img/up.svg" alt="" /></button>
          </div>
        </div>

      })
      }
    </div>
  );
}


