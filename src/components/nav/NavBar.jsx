import { CgProfile } from "react-icons/cg";
import "./style.css";
import { useState } from "react";
import MenuBox from "./MenuBox";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="nav_wrap">
        <div className="text">
          <h1>
            Personal <span style={{ color: "#a0cfde" }}>Base</span>
          </h1>
        </div>
        <div>
          <CgProfile className="p_icon" onClick={() => setVisible(!visible)} />
        </div>
      </div>
      {visible && <MenuBox />}
    </>
  );
};

export default NavBar;
