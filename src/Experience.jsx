import { useState } from "react";


function ExperienceForm({onPosition, onCompany, onFrom, onTo}) {
    function handlePosition(e) {
        onPosition(e.target.value)
    }

    function handleCompany(e) {
        onCompany(e.target.value)
    }

    function handleFrom(e) {
        onFrom(e.target.value)
    }

    function handleTo(e) {
        onTo(e.target.value)
    }

    return (
        <>
            
            <form action="" id='ExperienceForm'>
            <h2>Experience</h2>
            <label htmlFor="position">Position:
                <input type="text" id="position" onChange={handlePosition}/>
            </label>
            <label htmlFor="company">Company: 
                <input type="text" id="company" onChange={handleCompany}/>
            </label>
            <label htmlFor="from">From:
                <input type="date" id='from' onChange={handleFrom}/>
            </label>
            <label htmlFor="to">To: 
                <input type="date" id='to'  onChange={handleTo}/>
            </label>
            
            </form>
        </>
    )
}

export { ExperienceForm };
