import React from "react";
import "../src/style/AboutUs.css";
import logoo from "../src/images/logo.jfif";

function AboutUs () {
    return(
        <div class="flex-container1">

<div class="left-side"><img src={logoo}/> <br/>It is a long established fact that a<br/> 
reader will be distracted by the readable <br/> 
of a page when looking at its layout
</div>
<div class="middle-side"><h2>LINKS</h2>
<ul><li> Our client</li>
<li> Privacy Policy</li>
<li> Our Benefits</li>
</ul>
</div>
<div class="right-side"><h2>INFORMATION</h2>
<ul><li> Our client</li>
<li> Privacy Policy</li>
<li> Our Benefits</li>
</ul>
</div>
<div class="centre"><h2>CONTACT US</h2>
<ul>
<li>+91-9711999770, +1833-880-3355</li>
<li> info@bytesquest.com</li>
<li> 84,Block A Sector4 , NoidaUP,201301</li>
</ul>
</div>

</div>

    );
}
export default AboutUs;