import { useState } from "react";
import LOGO_URL from "../assets/food_express_logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center shadow-lg mb-4 p-2 bg-pink-200 sm:bg-yellow-200 md:bg-purple-200 lg:bg-green-200 xl:bg-blue-200">
      <div className="logo-container">
        <Link to="/">
          <img className="w-28" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 gap-4">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              className="loginToggleBtn"
              onClick={() => {
                btnText === "Login"
                  ? setBtnText("Logout")
                  : setBtnText("Login");
              }}
            >
              {btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
