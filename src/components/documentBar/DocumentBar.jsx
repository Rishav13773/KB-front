import { AiOutlinePlusCircle } from "react-icons/ai";
import "./style.css";

const DocumentBar = () => {
  return (
    <>
      <div className="projectBar_wrap">
        <AiOutlinePlusCircle className="new_icon" />
        <button>Add files</button>
      </div>
    </>
  );
};

export default DocumentBar;
