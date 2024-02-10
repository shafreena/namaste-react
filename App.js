import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from './Header'
import BodyComponent from './Body'
const AppLayout =() =>(
  <div className="app">
    <HeaderComponent/>
    <BodyComponent/>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<AppLayout/>);