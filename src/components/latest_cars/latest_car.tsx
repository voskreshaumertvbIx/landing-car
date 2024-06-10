import React from 'react';
import { LatestCarItem } from './latest_car_item';
import styles from './../searched_cars/styles.module.css'
export const LatestCar = () => {

  return (
    <>
    <h1 className={styles.head_latest_cars}>Latest Cars</h1>
      <LatestCarItem />
    </>
  );
}


