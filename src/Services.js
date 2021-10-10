import React from "react";
import Sdata1 from './Sdata1';
import Card1 from './Card1';
import "../src/style/Card.css";
import "../src/style/Product.css"

function Services(){
    return(
      <>
      <div className="heading">
        <h1> SERVICES</h1>
      </div>

        <div className ="flex-container">
                
         {
           Sdata1.map((val, ind) =>{
             return <Card1 key = {ind}
              imgsrc1={val.imgsrc1}
              tittle1={val.tittle1}
             
             />
           })
         }
       </div>
    </>

    );
}

export default Services;