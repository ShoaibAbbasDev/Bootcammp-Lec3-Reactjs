import React from 'react'
import './lunch.css'

function Lunch(props){
    return(
 
        <div>
            <h1>Lunch  Manu</h1>  
            <h3> You Order = {props.Foods }</h3>
                  <h3>Price = { props.Price }</h3>
               
               
                 
           
        </div>

    );
//reciving props 
}
export default Lunch;
