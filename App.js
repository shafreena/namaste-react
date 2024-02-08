import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from './Header'
const heading1 = React.createElement('h1',{},'Hello World from React1');
const heading2 = React.createElement('h2',{},'Hello World from React2');
const heading3 = React.createElement('h3',{},'Hello World from React3');
const container = React.createElement('div',{class:'title'},[heading1,heading2,heading3]);

const titleElement =(
  <div className="title">
    <h1>JSX element h1</h1>
    <h2>JSX element h2</h2>
    <h3>JSX element h3</h3>
  </div>
)

const DummyComponent = () =><h4>I am a dummy h4</h4>

const TitleComponent = () => (
 <> 
 <HeaderComponent/>
 <div className="title">
    <h1>JSX component h1</h1>
    <h2>JSX component h2</h2>
    <h3>JSX component h3</h3>
  </div>
  {DummyComponent()}
  </>
)
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<TitleComponent/>);