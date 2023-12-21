import { AiOutlinePlusCircle } from "react-icons/ai";
import "./style.css";

import { Button } from "@mui/material";
import { DropzoneDialog } from "material-ui-dropzone";
import { useState } from "react";

const Uploader = () => {
  const [open, setOpen] = useState(false) //handle dropzone file state

  return (
    <>
      <div className="projectBar_wrap">
        <Button variant="contained" onClick={() => setOpen(true)}><AiOutlinePlusCircle className="new_icon" />Add files</Button>
      </div>

      <DropzoneDialog
        // acceptedFiles={['image/*']} //attribute to specify file type
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          console.log('Files:', files);
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
    </>
  );
};

export default Uploader;
