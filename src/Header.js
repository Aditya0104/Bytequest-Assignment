import React from "react";
import "../src/style/Header.css";
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
function Header (){
    return(
        <div class="header">
         <EmailIcon/> :
         info@bytequests.com ,
         <CallIcon/> : 
         +91 9711999770 , +1 833-600-3355
        </div>
        
    );
}
export default Header;