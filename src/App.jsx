import { useState } from 'react'

import './App.css'
import  EducationForm  from './Edu';



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
 
 
  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value)
  }

  function addEducation(newEducation) {
    setEducation((prevEducation) => [...prevEducation, newEducation]);
  }
  

  return (
    <>
      <div className='app-container'>
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
              <EducationForm onAddEducation={addEducation}/>
            </div>
        </div>
          
        <div className='resume'>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>Phone: {phone}</p>
          <h2>Education</h2>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                <p>School: {edu.school}</p>
                <p>Degree: {edu.degree}</p>
                <p>Date: {edu.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
