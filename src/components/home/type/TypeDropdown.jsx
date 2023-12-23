import React, { useState } from 'react';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import {
  FcDocument,
  FcRules,
  FcConferenceCall,
  FcStackOfPhotos,
  FcVideoCall,
  FcOpenedFolder,
  FcAudioFile,
} from 'react-icons/fc';
import { IoMdArrowDropdown } from 'react-icons/io';
import './style.css';

const TypeDropdown = () => {
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
    console.log();
  };

  const iconStyle = { fontSize: '20px', marginRight: '8px' };
  const textStyle = { fontSize: '14px' };

  function getIcon(value) { //Redering icons based on selected value
    switch (value) {
      case 'Documents':
        return <FcDocument style={iconStyle} />;
      case 'Spreadsheets':
        return <FcRules style={iconStyle} />;
      case 'Presentations':
        return <FcConferenceCall style={iconStyle} />;
      case 'Photos & images':
        return <FcStackOfPhotos style={iconStyle} />;
      case 'Videos':
        return <FcVideoCall style={iconStyle} />;
      case 'Folders':
        return <FcOpenedFolder style={iconStyle} />;
      case 'Audio':
        return <FcAudioFile style={iconStyle} />;
      default:
        return null;
    }
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label" >Type</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={type}
          label="Type"
          onChange={handleChange}
          startIcon={<IoMdArrowDropdown style={{ color: 'rgb(58, 58, 58)' }} />}
          style={{ fontSize: '14px' }}
          renderValue={(selected) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {getIcon(selected)} {selected}
            </div>
          )}

        >
          <MenuItem style={{ fontSize: '14px' }} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Documents" style={textStyle}>
            {getIcon('Documents')} Documents
          </MenuItem>
          <MenuItem value="Spreadsheets" style={{ fontSize: '14px' }} className='items-list'>
            <FcRules />
            Spreadsheets
          </MenuItem>
          <MenuItem value="Presentations" style={{ fontSize: '14px' }} className='items-list'>
            <FcConferenceCall />
            Presentations
          </MenuItem>
          <MenuItem value="Photos & images" style={{ fontSize: '14px' }} className='items-list'>
            <FcStackOfPhotos />
            Photos & images
          </MenuItem>
          <MenuItem value="Videos" style={{ fontSize: '14px' }} className='items-list'>
            <FcVideoCall />
            Videos
          </MenuItem>
          <MenuItem value="Folders" style={{ fontSize: '14px' }} className='items-list'>
            <FcOpenedFolder />
            Folders
          </MenuItem>
          <MenuItem value="Audio" style={{ fontSize: '14px' }} className='items-list'>
            <FcAudioFile />
            Audio
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );

};

export default TypeDropdown;
