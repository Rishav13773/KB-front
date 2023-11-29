import { useEffect, useState } from "react";
import { FcDocument, FcRules, FcConferenceCall, FcTemplate, FcStackOfPhotos, FcVideoCall, FcLeftUp2, FcOpenedFolder, FcLink, FcAudioFile, FcCloseUpMode, FcPackage } from "react-icons/fc";
import { BsFiletypePdf } from "react-icons/bs";


import "./style.css";
const TypeDropdown = ({ dropdownRef, dropdownWrapRef, setVisible }) => {


  const handleOutsideClick = (event) => {
    if (
      dropdownWrapRef.current &&
      !dropdownWrapRef.current.contains(event.target) &&
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


  return (
    <div>
      <ul className="type-container">
        <li>
          <FcDocument style={{ fontSize: '25px' }} />
          Documents
        </li>
        <li>
          <FcRules style={{ fontSize: '25px' }} />
          Spreadsheets
        </li>
        <li>
          <FcConferenceCall style={{ fontSize: '25px' }} />
          Presentations
        </li>
        <li>
          <FcTemplate style={{ fontSize: '25px' }} />
          Forms
        </li>
        <li>
          <FcStackOfPhotos style={{ fontSize: '25px' }} />
          Photos & images
        </li>
        <li>
          <BsFiletypePdf style={{ fontSize: '25px' }} />
          PDFs
        </li>
        <li>
          <FcVideoCall style={{ fontSize: '25px' }} />
          Videos
        </li>
        <li>
          <FcLeftUp2 style={{ fontSize: '25px' }} />
          Shortcuts
        </li>
        <li>
          <FcOpenedFolder style={{ fontSize: '25px' }} />
          Folders
        </li>
        <li>
          <FcLink style={{ fontSize: '25px' }} />
          Sites
        </li>
        <li>
          <FcAudioFile style={{ fontSize: '25px' }} />
          Audio
        </li>
        <li>
          <FcCloseUpMode style={{ fontSize: '25px' }} />
          Drawings
        </li>
        <li>
          <FcPackage style={{ fontSize: '25px' }} />
          Archives
        </li>
      </ul>
    </div>
  );
};

export default TypeDropdown;
