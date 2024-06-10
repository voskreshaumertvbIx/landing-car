
import './App.css';
import Header from './components/header/header';
import TypeCar from './components/type_car/type_car';
import SubMain from './components/sub_main/sub_main';
import SearchedItems from './components/searched_cars/searched_items';
import Whyuchoose from './components/why_u_choose/whyuchoose';
import { LatestCar } from './components/latest_cars/latest_car';
import Inspiration from './components/inspitarion/inspiration';



function App() {
  return (
   <div>
    
   <Header/>
   <SubMain/>
   <TypeCar/>
   <SearchedItems/>
   <Whyuchoose/>
    <LatestCar />
    <Inspiration/>
   </div>
  );
}

export default App;
