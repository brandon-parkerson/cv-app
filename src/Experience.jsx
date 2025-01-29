import { useState } from "react";


function ExperienceForm() {
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    return (
        <>
            
            <form action="" id='ExperienceForm'>
            <h2>Experience</h2>
            <label htmlFor="position">Position:
                <input type="text" id="position" />
            </label>
            <label htmlFor="company">Company: 
                <input type="text" id="company" />
            </label>
            <label htmlFor="from">From:
                <input type="date" id='from' />
            </label>
            <label htmlFor="to">To: 
                <input type="date" id='to'  />
            </label>
            <button type='button' >
                Add</button>
            </form>
        </>
    )
}

export { ExperienceForm };
