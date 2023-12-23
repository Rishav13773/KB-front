import { useState } from "react";
import Uploader from "../../components/uploader/Uploader";
import NavBar from "../../components/nav/NavBar";
import "./style.css";

const Project = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <NavBar />
      <Uploader setVisible={setVisible} />
    </div>
  );
};

export default Project;
