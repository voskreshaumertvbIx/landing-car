import styles from './style.module.css';
const reviews = ['./reviews/trustpilot.svg', './reviews/google.svg', './reviews/birdeye.svg'];

const Reviews = () => {
  return (
    <div className={styles.reviews_container}>
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
              <img src={review} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
