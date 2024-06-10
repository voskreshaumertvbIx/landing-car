
import './App.css';
import Header from './components/header/header';
import TypeCar from './components/type_car/type_car';
import SubMain from './components/sub_main/sub_main';
import SearchedItems from './components/searched_cars/searched_items';
import Whyuchoose from './components/why_u_choose/whyuchoose';

function App() {
  return (
   <>
   <Header/>
   <SubMain/>
   <TypeCar/>
   <SearchedItems/>
   <Whyuchoose/>
   </>
  );
}

export default App;
