import { useState } from 'react'

import './App.css'

//TODO: Reset inputs after form submit


let nextId = 0;


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [date, setDate] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('')
  
  const [education, setEducation] = useState([{

    id: nextId++,
    school: 'Harvard',
    degree: 'Masters Computer Science',
    date: '2024-05-05'
  }]);
  const [experience, setExperience] = useState([{
    id: nextId++, 
    position: 'Full Stack Engineer',
    company: 'Google',
    fromDate: '1998-08-17',
    toDate: '2016-05-05'
  }]);
 
  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value)
  }

  function handleEducationReset() {
    document.getElementById("EducationForm").reset();
  }
  function experienceFormReset() {
    document.getElementById("ExperienceForm").reset();
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
                    <input className="full-name-input" type="text" id='fullName' value={name} onChange={handleName} />
                  </label>
                </div>
                <div className="email-container">
                  <label htmlFor="email" >
                    Email:
                  <input type="email" id='email' value={email} onChange={handleEmail} placeholder='johnSmith@email.com'/>
                  </label>
                </div>
                <div className="phone-container">
                  <label htmlFor="phone">
                    Phone:
                    <input type="tel" id='phone' value={phone} onChange={handlePhone} placeholder='555-555-5555'/>
                  </label>
                </div>
              </form>
              <h2>Education</h2>
              <form action="" id='EducationForm'>
                <label htmlFor="school">School: 
                <input type="text" id='school' value={school.school} onChange={e => setSchool(e.target.value)}/>
                </label>
                <label htmlFor="degree">Degree:
                  <input type="text" id='degree' value={education.degree} onChange={e => setDegree(e.target.value)}/>
                </label>
                <label htmlFor="date">Date of Completion:
                  <input type="date" value={education.date} onChange={e => setDate(e.target.value)}/>
                </label>
                <button type='button' onClick={() => 
                  {setEducation([...education, {id: nextId++, school: school, degree: degree, date: date }]), handleEducationReset()}}>Add</button>
              </form>
              <h2>Experience</h2>
              <form action="" id='ExperienceForm'>
                <label htmlFor="position">Position:
                  <input type="text" id="position" value={experience.position} onChange={e => setPosition(e.target.value)}/>
                </label>
                <label htmlFor="company">Company: 
                  <input type="text" id="company" value={experience.company} onChange={e => setCompany(e.target.value)}/>
                </label>
                <label htmlFor="from">From:
                  <input type="date" value={experience.fromDate} onChange={e => setFromDate(e.target.value)} />
                </label>
                <label htmlFor="to">To: 
                  <input type="date" id='to' value={experience.toDate} onChange={e => setToDate(e.target.value)} />
                </label>
                <button type='button' onClick={() => {setExperience([...experience, {id: nextId++, position: position, company:company, fromDate: fromDate, toDate: toDate }]), 
                experienceFormReset()}}>
                  Add</button>
              </form>
            </div>
        </div>
          
        <div className='resume'>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>Phone: {phone}</p>
          <h2>Education</h2>
          <ul>
            {education.map(edu => (
              <li key={edu.id}>{edu.school}{' '}<i>{edu.degree}</i>{' '}{edu.date} <button onClick={() => {
                setEducation(education.filter(a => a.id !== edu.id))
              }}>Delete</button><button>Edit</button></li>
            ))}
          </ul>
          <p></p>
          <h2>Experience</h2>
          <ul>
            {experience.map(exp => (
              <li key={exp.id}>{exp.position}{' '}<i>{exp.company}</i>{' '}{exp.fromDate}-{exp.toDate} <button onClick={() => {
                setExperience(experience.filter(a => a.id !== exp.id))
              }}>Delete</button><button>Edit</button></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
