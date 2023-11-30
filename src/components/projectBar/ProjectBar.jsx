import React, { useState, useRef, useEffect } from "react";
// import { MdOutlineCreateNewFolder } from "react-icons/md";
import "./style.css";
import ProjectSetting from "../projectSettings/ProjectSetting";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuFolderPlus } from "react-icons/lu";
import { LuFileUp } from "react-icons/lu";
import { LuFolderUp } from "react-icons/lu";
const ProjectBar = () => {
  const [visible, setVisible] = useState(false);
  const [widowview, setWindowview] = useState(false);
  const loading = useSelector((state) => state.loader);
  const dropdownRef = useRef(null);
  const projectWrapRef = useRef(null);
  console.log(visible);

  const handleOutsideClick = (event) => {
    if (
      projectWrapRef.current &&
      !projectWrapRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setVisible(false); // Close the menu when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    if (dropdownRef.current) {
      dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handlefolder = () => {
    setWindowview(true);
    setVisible(false);
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="project_wrap" ref={projectWrapRef} onClick={handleClick}>
        <h2>My Drive</h2>
        <IoMdArrowDropdown style={{ fontSize: "20px" }} />
      </div>

      {/* //Dropmenu popup */}
      {visible && (
        <div className="dropmenu">
          <ul className="item-contain" ref={dropdownRef}>
            <li onClick={handlefolder}>
              <LuFolderPlus />
              New folder
            </li>
            <li>
              <LuFileUp />
              File upload
            </li>
            <li>
              <LuFolderUp />
              Folder upload
            </li>
          </ul>
        </div>
      )}

      {/* /* //project setting window */}
      {widowview && <ProjectSetting setWindowview={setWindowview} />}

      {/* //loading logo */}
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
