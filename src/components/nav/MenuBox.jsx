/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import Cookies from "js-cookie";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const MenuBox = () => {
  const navigate = useNavigate();
  const logout = ()=>{
    Cookies.remove("user")
    navigate('/')
  }

  return (
    <div class="dropdown">
      <div class="dropdown-options">
        <Link to="/home">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <a onClick={logout} href="#">Logout</a>
      </div>
    </div>
  );
};

export default MenuBox;
