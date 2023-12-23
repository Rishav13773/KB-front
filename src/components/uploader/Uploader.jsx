import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from "@mui/material";
import "./style.css";

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import axios from "axios";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


const Uploader = () => {
  const [files, setFiles] = useState([])

  const handleUpload = () => {
    // Make your Axios POST request here
    axios.post("/api/upload", { files: files }).then((response) => {
      console.log("Files uploaded successfully:", response.data);
      // Optionally, you can reset the files array after successful upload
      setFiles([]);
    });
  };

  useEffect(() => {
    // Extract relevant information from each file
    const fileInfo = files.map(file => ({
      name: file.filename,
      size: file.fileSize,
      type: file.fileType,
      // Add more properties as needed
    }));

    console.log(fileInfo);
  }, [files]);

  return (
    <div>
      <div className="filepond">
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={5}
          name="files"
          allowImagePreview={false}
          imagePreviewMaxHeight={100}

          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
      </div>
      <div className="upload-btn">
        <Button variant="contained" size="small" onClick={handleUpload} startIcon={<CloudUploadIcon />}>
          Upload Files
        </Button>
      </div>
    </div>
  );
};

export default Uploader;
