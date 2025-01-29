import { useState } from "react";


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
                    <label htmlFor="fullName">
                        Full Name:
                        <input className="full-name-input" type="text" id='fullName' onChange={handleName} />
                    </label>
                    </div>
                    <div className="email-container">
                    <label htmlFor="email" >
                        Email:
                    <input type="email" id='email' placeholder='johnSmith@email.com' onChange={handleEmail}/>
                    </label>
                    </div>
                    <div className="phone-container">
                    <label htmlFor="phone">
                        Phone:
                        <input type="tel" id='phone' placeholder='555-555-5555' onChange={handlePhone}/>
                    </label>
                    </div>
                </form>
                </div>
            </div>
            
        </>
    )
}

export { GeneralInfo }