import { useState } from 'react'

import './App.css'

import ExpForm from './Exp';

let nextId = 0;

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [date, setDate] = useState('');
  const [education, setEducation] = useState([{
    id: nextId,
    school: school,
    degree: degree,
    date: date
  }]);
  const [experience, setExperience] = useState([]);
 
  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value)
  }

  
  
  function addExp(newExperience) {
    setExperience((prevExperience) => [...prevExperience, newExperience]);
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
              <form action="">
                <label htmlFor="school">School: 
                <input type="text" id='school' value={school} onChange={e => setSchool(e.target.value)}/>
                </label>
                <label htmlFor="degree">
                  <input type="text" id='degree' value={education.degree} onChange={e => setDegree(e.target.value)}/>
                </label>
                <label htmlFor="date">
                  <input type="date" value={education.date} onChange={e => setDate(e.target.value)}/>
                </label>
                <button type='button' onClick={() => {setEducation([...education, {id: nextId++, school: school, degree: degree, date: date }])}}>Add</button>
              </form>
              <h2>Experience</h2>
              <ExpForm onAddExp={addExp} />
            </div>
        </div>
          
        <div className='resume'>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>Phone: {phone}</p>
          <h2>Education</h2>
          <ul>
            {education.map(edu => (
              <li key={edu.id}>{edu.school}{' '}<i>{edu.degree}</i>{' '}{edu.date}</li>
            ))}
          </ul>
          <p></p>
          <h2>Experience</h2>
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                <p>Company: {exp.company}</p>
                <p>Position: {exp.position}</p>
                <p>{exp.from} - {exp.to}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
