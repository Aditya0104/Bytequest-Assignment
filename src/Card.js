import React from "react";

import "../src/style/Card.css";

function Card(props) {
    return(
        
        <div className="flexbox">
            
        <div className="card">
        <img src={props.imgsrc} alt="Avatar"/>
            </div>
            <div class="container">
<h4><b>{props.tittle }</b></h4> 

</div>
          
            </div>
            
    );
}
export default Card;