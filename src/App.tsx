
import './App.css';


import Header from './components/header/header';
import TypeCar from './components/type_car/type_car';
import SubMain from './components/sub_main/sub_main';
import SearchedItems from './components/searched_cars/searched_items';
import Whyuchoose from './components/why_u_choose/whyuchoose';
import { LatestCar } from './components/latest_cars/latest_car';
import Inspiration from './components/inspitarion/inspiration';
import Reviews from './components/reviews/reviews';
import OurTeam from './components/our_team/our_team';
import LatestBlog from './components/latest_blog/latest_blog';
import PremiumBrands from './components/premium_brands/premium_brands';
import Footer from './components/footer/footer';
import PrivacyPolicy from './components/privacy_policy/privacy_policy';
import { useEffect } from 'react';



function App() {
  const handleResize = () => {
    console.log('Window resized to:', window.innerWidth, window.innerHeight);
  };
  useEffect(() => {
    const onResize = () => {
      handleResize();
    };

    window.addEventListener('resize', onResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return (
   <div>
    
   <Header/>
   <SubMain/>
   <TypeCar/>
   <SearchedItems/>
   <Whyuchoose/>
    <LatestCar />
    <Inspiration/>
    <Reviews/>
    {/* <OurTeam/> 
    <LatestBlog/>
    <PremiumBrands/>
    <Footer/>
    <PrivacyPolicy/>  */}
   </div>
  );
}

export default App;
