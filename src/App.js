import React from 'react';
import './App.css'; 
import Lunch from './lunch'

function App() {
  return (
    <div> 
      <h1>ABC Biryani</h1>
      <Lunch Foods="Beef Biryani large plate" Price="1000 pkr" /> //adding props values
  </div>
  );
}

export default App;
