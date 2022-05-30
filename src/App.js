import React, {useState} from 'react';
import Restaurant from './Restaurant'
import Nav from './Nav'
import './App.css';


function App() {
  const [restaurants, setRestaurants]= useState([]);
  return (
    <div className='restaurants'>
      <Nav restaurants={restaurants} setRestaurants={setRestaurants} />
      {restaurants.map(rt => <Restaurant restaurant={rt} />)}
      
    </div>
  );
}

export default App;
