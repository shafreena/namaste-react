import React from "react";

const HeaderComponent = () =>(
  <div className="header">
    <div className="logo-container">
    <img
      className="logo-img"
      src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg"
    ></img>
    </div>
   
    <div className="nav-items">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>
    </div>
  </div>
);
export default HeaderComponent;