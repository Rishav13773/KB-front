import { MdOutlineCreateNewFolder } from "react-icons/md";
import "./style.css";
import ProjectSetting from "../projectSettings/ProjectSetting";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

const ProjectBar = () => {
  const [visible, setVisible] = useState(false);
  const loading = useSelector((state) => state.loader);
  // console.log(loading);
  const handleClick = () => {
    setVisible(true);
  };
  return (
    <>
      <div className="project_wrap" onClick={handleClick}>
        <MdOutlineCreateNewFolder className="new_icon" />
        <button>New project</button>
      </div>

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
