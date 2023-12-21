import { useState } from "react";
import Uploader from "../../components/uploader/Uploader";
import NavBar from "../../components/nav/NavBar";
import "./style.css";

const Project = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <NavBar />

      <div className="null_txt">
        <h1>There are no files in this project</h1>
        <Uploader setVisible={setVisible} />
      </div>
    </div>
  );
};

export default Project;
