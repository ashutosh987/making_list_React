import React, { Fragment, useEffect,useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

import Dashboard from "./components/dashboard/dashboard";
import Landing from "./components/landing";
import Navbar from "./components/navbar";


const App = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [url,setUrl]=useState("");

  const responseGoogle= (response)=>{
    console.log(response.profileObj.imageUrl);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }

  return (
 
      <Router>
       
          {name.length>0? 
           <Fragment>
  <Navbar name={name} email={email} url={url} />
        
          <Route exact path='/' component={Dashboard} />
      
          </Fragment>:<Landing GoogleLogin={GoogleLogin}
          responseGoogle={responseGoogle}
          />}
       
      </Router>

  );
};
export default App;


