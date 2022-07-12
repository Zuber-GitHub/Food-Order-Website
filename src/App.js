import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';


function App() {
  const [showCart, setShowCart] = useState(false)

const doThis = ()=>{
  
    setShowCart(true)

}
const closeTheModal = ()=>{
  setShowCart(false)

}
  return (
    <Fragment>
      {showCart && <Cart CloseCart = {closeTheModal}></Cart>}
      <Header onCartClick={doThis} />
      <MealsSummary/>
      <AvailableMeals/>
      
    </Fragment>
  );
}

export default App;