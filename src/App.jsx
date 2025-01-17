import { useState } from 'react'

import './App.css'
import { use } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [date, setDate] = useState('');
 
 
  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value)
  }

  function handleEducation({school, degree, date}) {
    
    setSchool(school.target.value);
    setDegree(degree.value);
    setDate(date.value); 
    // TODO: Figure out getting the values of the input when add button is clicked
  }

  return (
    <>
      <body>
        <div className="user-inputs">
          <div className="general-info">
              <h2>General Info</h2>
              <form action="post" className='general-info-form'>
                <div className="full-name-input">
                  <label htmlFor="fullName">
                    Full Name:
                    <input type="text" id='fullName' value={name} onChange={handleName}/>
                  </label>
                </div>
                <div className="email-container">
                  <label htmlFor="email" >
                    Email:
                  <input type="email" id='email' value={email} onChange={handleEmail} />
                  </label>
                </div>
                <div className="phone-container">
                  <label htmlFor="phone">
                    Phone:
                    <input type="tel" id='phone' value={phone} onChange={handlePhone} />
                  </label>
                </div>
              </form>
              <h2>Education</h2>
              <form action="post" className="education-form">
                <label htmlFor="school">
                  School: 
                  <input type="text" id='school' onSubmit={handleEducation}/>
                </label>
                <label htmlFor='degree'>
                  Degree: 
                  <input type="text" id='degree' onChange={degree} />
                </label>
                <label htmlFor="date">
                  Date: 
                  <input type="text" id='date' onChange={date} />
                </label>
                <button type='button' onClick={handleEducation}>Add</button>
              </form>
            </div>
        </div>
          
        <div className='resume'>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>Phone: {phone}</p>
          <h2>Education</h2>
          <p>{school}</p>
        </div>
      </body>
    </>
  )
}

export default App
