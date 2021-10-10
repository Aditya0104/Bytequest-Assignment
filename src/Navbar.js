import React from "react";
import { Link } from "react-router-dom";
import "../src/style/Navbar.css";
import logoo from "../src/images/logo.jfif"
function Navbar() {
    return (
    
        <div className ="topnav">
            
        
        <Link to="/home"> Home </Link>
        <Link to="/services"> Services </Link>
        <Link to="/about us"> About Us </Link>
        <Link to="/product"> Product </Link>
        <Link to="/portfolio"> Portfolio </Link>
        <Link to="/details">Details</Link>
    
        </div>
    );
}

export default Navbar;