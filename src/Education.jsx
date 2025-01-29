import { useState } from "react";


function EducationForm({onSchool, onDegree, onDate}) {

    function handleSchool(e) {
        onSchool(e.target.value);
    }

    function handleDegree(e) {
        onDegree(e.target.value);
    }

    function handleDate(e) {
        onDate(e.target.value);
    }


return (
    <>
        
        <form action="" id='EducationForm'>
        <h2>Education</h2>
        <label htmlFor="school">School: 
            <input type="text" id='school' onChange={handleSchool}/>
        </label>
        <label htmlFor="degree">Degree:
            <input type="text" id='degree'  onChange={handleDegree}/>
        </label>
        <label htmlFor="date">Date of Completion:
            <input type="date" id='date' onChange={handleDate}/>
        </label>
        </form>
    
    </>
 )
};


export { EducationForm };