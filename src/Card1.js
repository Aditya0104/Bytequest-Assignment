import React from "react";
import "../src/style/Card.css";

function Card1(props) {
    return(
        
        <div className="flexbox">
            
        <div className="card">
        <img src={props.imgsrc1} alt="Avatar"/>
            </div>
            <div class="container">
<h4><b>{props.tittle1}</b></h4> 

</div>
          
            </div>
            
    );
}
export default Card1;