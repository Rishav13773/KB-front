import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './style.css';
import { IoMdArrowDropdown } from 'react-icons/io';

const ModifyDrop = ({ setModifyview }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label" >Modified</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedOption}
                    onChange={handleChange}
                    label="Modified"
                    startIcon={<IoMdArrowDropdown style={{ color: 'rgb(58, 58, 58)' }} />}
                    style={{ fontSize: '14px' }}
                >
                    <MenuItem style={{ fontSize: '14px' }} value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem style={{ fontSize: '14px' }} value="today">Today</MenuItem>
                    <MenuItem style={{ fontSize: '14px' }} value="last7days">Last 7 Days</MenuItem>
                    <MenuItem style={{ fontSize: '14px' }} value="last30days">Last 30 Days</MenuItem>
                    <MenuItem style={{ fontSize: '14px' }} value="thisYear">This Year (2023)</MenuItem>
                    <MenuItem style={{ fontSize: '14px' }} value="lastYear">Last Year (2022)</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default ModifyDrop;
