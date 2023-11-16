import { useEffect, useState } from "react";
import "./style.css";
import ProjectSetting from "../projectSettings/ProjectSetting";
const Dropmenu = () => {
  return (
    <>
      <ul className="item-contain">
        <li>New folder</li>
        <li>File upload</li>
        <li>Folder upload</li>
      </ul>
    </>
  );
};

export default Dropmenu;
