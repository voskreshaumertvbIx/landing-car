
import './App.css';
import Header from './components/header/header';
import TypeCar from './components/type_car/type_car';
import SubMain from './components/sub_main/sub_main';
import SearchedItems from './components/searched_cars/searched_items';

function App() {
  return (
   <>
   <Header/>
   <SubMain/>
   <TypeCar/>
   <SearchedItems/>
   </>
  );
}

export default App;
