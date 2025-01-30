import { useState } from "react";
import { Input } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function EducationForm({onSchool, onDegree, onDate}) {

    function handleSchool(e) {
        onSchool(e.target.value);
    }

    function handleDegree(e) {
        onDegree(e.target.value);
    }

    function handleDate(value) {
        onDate(value ? value.format('YYYY-MM-DD') : '');
    }


return (
    <>
        
        <form action="" id='EducationForm'>
        <h2>Education</h2>
         
        <Input variant="solid" color="primary"  id='school' onChange={handleSchool} placeholder="School" />
        
        
        <Input type="text" id='degree'  onChange={handleDegree} variant="soft" placeholder="Degree"/>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker id="date" label="Date" onChange={handleDate}  slotProps={{ textField: { size: 'small' } }}/>
        </LocalizationProvider>
        
        
        
        </form>
    
    </>
 )
};


export { EducationForm };