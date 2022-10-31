import React from 'react';
import './App.css'; 
import Lunch from './lunch'

function App() {
  return (
    <div> 
      <h3>ABC Biryani</h3>  // title of app
      <Lunch Foods="Beef Biryani half plate" Price="100 pkr" /> //adding props values
  </div>
  );
}

export default App;
