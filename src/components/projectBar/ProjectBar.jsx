import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  // IconButton,
  Typography,
} from "@mui/material";

import { IoMdArrowDropdown } from "react-icons/io";
import { LuFolderPlus, LuFileUp, LuFolderUp } from "react-icons/lu";
import ProjectSetting from "../projectSettings/ProjectSetting";
// import { useSelector } from "react-redux";

const ProjectBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [windowView, setWindowView] = useState(false);
  // const loading = useSelector((state) => state.loader);

  const handleFolder = () => {
    setWindowView(true);
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleOutsideClick = (event) => {
  //   if (anchorEl && !anchorEl.contains(event.target)) {
  //     setAnchorEl(null);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [anchorEl]);

  return (
    <>
      <div>
        <Button
          onClick={handleClick}
          endIcon={<IoMdArrowDropdown style={{ fontSize: "20px" }} />}
        >
          <Typography variant="h6">My Drive</Typography>
        </Button>
      </div>

      {/* Dropmenu popup */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={handleFolder} className="items">
          <LuFolderPlus />
          New folder
        </MenuItem>
        <MenuItem className="items">
          <LuFileUp />
          File upload
        </MenuItem >
        <MenuItem className="items">
          <LuFolderUp />
          Folder upload
        </MenuItem>
      </Menu>

      {/* Project setting window */}
      {windowView && <ProjectSetting setWindowView={setWindowView} />}

      {/* Loading logo */}
      {/* {loading && (
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
            zIndex={3}
          />
        </div>
      )} */}
    </>
  );
};

export default ProjectBar;
