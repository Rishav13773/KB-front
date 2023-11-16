import React, { useState, useRef, useEffect } from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import "./style.css";
import ProjectSetting from "../projectSettings/ProjectSetting";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropmenu from "../home/Dropmenu";

const ProjectBar = () => {
  const [visible, setVisible] = useState(false);
  const loading = useSelector((state) => state.loader);
  // const dropdownRef = useRef(null);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="project_wrap" onClick={handleClick}>
        <h2>My Drive</h2>
        <IoMdArrowDropdown style={{ fontSize: "20px" }} />
      </div>
      <Dropmenu />
      {visible && !loading && <ProjectSetting setVisible={setVisible} />}
      {loading && (
        <div className="loader">
          <Oval
            height={80}
            width={80}
            color="black"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#a0cfde"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </>
  );
};

export default ProjectBar;
