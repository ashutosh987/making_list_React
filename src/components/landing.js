import React, {useState} from "react";
import { render } from "react-dom";
import "./landing.css";
const Landing = ({GoogleLogin,responseGoogle}) =>
     {
   


   
  return (
    <div>
        <img className="bg" src="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=750&q=80" alt="background pic"/>
        <GoogleLogin className="btn"
    clientId="550524363730-9utsah9bi57iilpktdsnnt0302vq64cd.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
        
};

export default Landing;