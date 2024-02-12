import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () =>(
  <div className="header">
    <div className="logo-container">
    <img
      className="logo-img"
      src={LOGO_URL}
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