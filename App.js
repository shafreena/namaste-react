import React from "react";
import ReactDOM from "react-dom";

const heading1 = React.createElement('h1',{id:'react'},'Hello World from React1');
const heading2 = React.createElement('h1',{id:'react'},'Hello World from React2');
const container = React.createElement('div',{},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(container);