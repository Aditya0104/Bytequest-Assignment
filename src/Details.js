import React from "react";
import "../src/style/Details.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
function Details (){
    return(
        <div class="box">
<div class="flex-container2">
<div class="leftside-box">
<h1> Let's Discuss </h1>

<p> It is a long established fact that a reader<br/> will be distracted by the readable.</p>



</div>
<div class="rightside-box">
<form>
 
  <input type="text" id="fname" name="fname" /> <button class="button">Signup</button><br/>
  <div className="social">
<LinkedInIcon/> <FacebookIcon/> <InstagramIcon/>
</div>
</form>

</div>
</div>
</div>


    );
}
export default Details;