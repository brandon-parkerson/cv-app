import { useState } from "react";
import { Input } from "@mui/material";
import { Textarea } from "@mui/joy";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function ExperienceForm({onPosition, onCompany, onFrom, onTo, onDuties}) {
    function handlePosition(e) {
        onPosition(e.target.value)
    }

    function handleCompany(e) {
        onCompany(e.target.value)
    }

    function handleFrom(value) {
        onFrom(value ? value.format('YYYY-MM-DD') : '')
    }

    function handleTo(value) {
        onTo(value ? value.format('YYYY-MM-DD') : '')
    }

    function handleDuties(e) {
        onDuties(e.target.value)
    }

    return (
        <>
            
            <form action="" id='ExperienceForm'>
            <h2>Experience</h2>
            <label htmlFor="position">
                <Input type="text" id="position" onChange={handlePosition} placeholder="Position"/>
            </label>
            
            <label htmlFor="company">
                <Input type="text" id="company" onChange={handleCompany} placeholder="Company"/>
            </label>
            <label htmlFor="duties"> 
                <Textarea name="duties" id="duties" onChange={handleDuties} placeholder="Responsibilities..." minRows={2}></Textarea>
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker type="date" id='from' onChange={handleFrom} label="From" slotProps={{ textField: { size: 'small' } }}/>
            </LocalizationProvider>
                
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker type="date" id='to'  onChange={handleTo} label="To" slotProps={{ textField: { size: 'small' } }}/>
            </LocalizationProvider>
            
            
                
            
            
            </form>
        </>
    )
}

export { ExperienceForm };
