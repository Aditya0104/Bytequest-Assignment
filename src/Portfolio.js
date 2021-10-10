import React from "react";
import Sdata from './Sdata';
import Card from './Card';
import "../src/style/Card.css";
import "../src/style/Product.css"

function Product(){
    return(
      <>
      <div className="heading">
        <h1> PORTFOLIO / CASE STUDIES</h1> 
         </div>
        <div className ="flex-container">
                
         {
           Sdata.map((val, ind) =>{
             return <Card key = {ind}
              imgsrc={val.imgsrc}
              tittle={val.tittle}
             
             />
           })
         }
       </div>
    
     </>
    );
}

export default Product;