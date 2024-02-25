import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between border border-solid border-black items-center">
      <div className="logo-container">
        <img className="h-[150px]" src={LOGO_URL}></img>
      </div>

      <div className="m-3">
        <ul className="flex">
          <li className="m-3 p-3 list-none text-lg">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="m-3 p-3 list-none text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="m-3 p-3 list-none text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="m-3 p-3 list-none text-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-3 p-3 list-none text-lg">Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
