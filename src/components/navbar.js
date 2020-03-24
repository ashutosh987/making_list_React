import React, {useState} from "react";
import { render } from "react-dom";
import "./landing.css";
const Navbar = ({name,email,url}) =>
     {
   


   
  return (
    
    <div class="topnav">
  <a class="active" href="#">Welcome {name}</a>
  <a href="#">Your email id is {email}</a>
  
</div>


  
  );
        
};

export default Navbar;