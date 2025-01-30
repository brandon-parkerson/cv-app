import { useState } from "react";
import { Input } from "@mui/material";

function GeneralInfo({onName, onEmail, onPhone }) {
    
    function handleName(e) {
        onName(e.target.value);
    }

    function handleEmail(e) {
        onEmail(e.target.value);
    }

    function handlePhone(e) {
        onPhone(e.target.value);
    }
    return (
        <>
            <div className="user-inputs">
                <div className="general-info">
                <h2>General Info</h2>
                <form action="post" className='general-info-form'>
                    <div className="full-name-input">
                        <Input className="full-name-input" type="text" id='fullName' onChange={handleName} placeholder="Full Name" size="small" />
                    </div>
                    <div className="email-container">
                    
                    <Input type="email" id='email' placeholder='johnSmith@email.com' onChange={handleEmail} />
                    
                    </div>
                    <div className="phone-container">
                    
                        
                        <Input type="tel" id='phone' placeholder='555-555-5555' onChange={handlePhone} />
                    
                    </div>
                </form>
                </div>
            </div>
            
        </>
    )
}

export { GeneralInfo }