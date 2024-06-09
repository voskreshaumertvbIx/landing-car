import styles from './style.module.css'


const car_icons = [
  {
    src : './car_icons/suv.svg',
    name: 'suv'
  },
  {
    src : './car_icons/sedan.svg',
    name: 'sedan',
  },
  {
    src : './car_icons/hatchback.svg',
    name: 'hatchback'
  },
  {
    src : './car_icons/coupe.svg',
    name: 'coupe'
  },
  {
    src : './car_icons/hybrid.svg',
    name: 'hybrid'
  },
  {
    src : './car_icons/convertible.svg',
    name: 'convertible'
  },
  {
    src : './car_icons/van.svg',
    name: 'van'
  },
  {
    src : './car_icons/truck.svg',
    name: 'truck'
  },
  {
    src : './car_icons/electric.svg',
    name: 'electrick'
  },
]

  const car_action = [
    {
      title: 'are you looking for a car?',
      text:'We are committed to providing our customers with exceptional service.',
      icon: './car_icons/blue_car.svg',
    },
    {
      title: 'do you want to sell a car ?',
      text:'We are committed to providing our customers with exceptional service.',
      icon: './car_icons/sell_car.svg',
    }
  ]

const TypeCar = () => {
  return (
    <div className={styles.main_container} >
      <h1 className={styles.main_head}>Browse by Type</h1>
      <div className={styles.cars_section}>
        {
        car_icons.map(({src, name}, index)=>{
          return <div className={styles.car_item} key={index}>
            <img src={src} alt={name}  />
            <p>{name}</p>
          </div>
        })
        }
      </div>
        <div className={styles.car_action_section}>
          {
            car_action.map(({title, text, icon}, index)=>{
              return <div className={styles.car_action_item}  key={index}>
                <h2 className={styles.car_action_name}>{title}</h2>
                <p className={styles.car_action_text}>{text}</p>
                <div className={styles.footer}>
                <button className={styles.submit_button}>get started <img src='./img/up.svg' alt="" /></button>
                <img className={styles.car_action_icon} src={icon} alt="" />
                </div>
              </div>
            })
          }
        </div>
    </div>
  );
}

export default TypeCar;
