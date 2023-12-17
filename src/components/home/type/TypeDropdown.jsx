import { useEffect, useState } from "react";
import { FcDocument, FcRules, FcConferenceCall, FcStackOfPhotos, FcVideoCall, FcOpenedFolder, FcAudioFile, } from "react-icons/fc";



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
      dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;  //For animation on click
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  return (
    <div>
      <ul className="type-container">
        <li>
          <FcDocument style={{ fontSize: '22px' }} />
          Documents
        </li>
        <li>
          <FcRules style={{ fontSize: '22px' }} />
          Spreadsheets
        </li>
        <li>
          <FcConferenceCall style={{ fontSize: '22px' }} />
          Presentations
        </li>

        <li>
          <FcStackOfPhotos style={{ fontSize: '22px' }} />
          Photos & images
        </li>

        <li>
          <FcVideoCall style={{ fontSize: '22px' }} />
          Videos
        </li>

        <li>
          <FcOpenedFolder style={{ fontSize: '22px' }} />
          Folders
        </li>

        <li>
          <FcAudioFile style={{ fontSize: '22px' }} />
          Audio
        </li>


      </ul>
    </div>
  );
};

export default TypeDropdown;
