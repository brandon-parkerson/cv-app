import { useState } from 'react'
import { Button } from '@mui/material';

import './App.css'
import { EducationForm } from './components/Education'
import { GeneralInfo } from './components/Info';
import { ExperienceForm } from './components/Experience';
import { Resume } from './components/Resume';
import { useRef } from 'react';

// TODO: Duties input and resume design

function App() {
  let nextId = useRef(0);
  
  // General info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Education info
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [date, setDate] = useState('');
  const [education, setEducation] = useState([{
    
    id: nextId.current++,
    school: 'Harvard',
    degree: 'Masters Computer Science',
    date: '2024-05-05'
  }])

  // Experience info 
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [experience, setExperience] = useState([{
    id: nextId.current++, 
    position: 'Full Stack Engineer',
    company: 'Google',
    fromDate: '1998-08-17',
    toDate: '2016-05-05',
    responsibilities: 'Make cool stuff'
  }]);

  function handleFormReset() {
    document.getElementById("EducationForm").reset();
  }

  function handleDelete(id) {
    setEducation((prev) => prev.filter((edu) => edu.id !== id));
  }

  function handleExperienceReset() {
    document.getElementById("ExperienceForm").reset()
  }

  function handleExperienceDelete(id) {
    setExperience((prev) => prev.filter((exp) => exp.id !== id));
  }
  
  function handleEditEducation(id, school, degree, date) {
    
    document.getElementById("school").value = school;
    document.getElementById("degree").value = degree;
    document.getElementById("date").value = date;
    setEducation(education.filter((edu)=> edu.id !== id));
    
  } 

  function handleEditExperience(id, position, company, from, to, responsibilities) {
    document.getElementById("position").value = position;
    document.getElementById("company").value = company;
    document.getElementById("from").value = from;
    document.getElementById("to").value = to;
    document.getElementById("duties").value = responsibilities;

    setExperience(experience.filter((exp) => exp.id !== id));
  }

  

  return (
    <>
      <div className="app-container">
        <div className='forms-container'>
          <GeneralInfo onName={setName} onEmail={setEmail} onPhone={setPhone}/>
          <EducationForm onSchool={setSchool} onDegree={setDegree} onDate={setDate} />
          <Button id='add-button' type='button' variant='contained' onClick={() => 
                  {setEducation([...education, {id: nextId.current++, school: school, degree: degree, date: date }]), handleFormReset()}}>Add</Button>
          <ExperienceForm onPosition={setPosition} onCompany={setCompany} onFrom={setFromDate} onTo={setToDate} onDuties={setResponsibilities}/>
          <Button id='add-button-two' type='button' variant='contained' onClick={() => {
            setExperience([...experience, {id: nextId.current++, position: position, company: company, fromDate: fromDate, toDate: toDate, responsibilities: responsibilities}]), handleExperienceReset()
          }}>Add</Button>
        </div>
        <Resume name={name} email={email} phone={phone} school={school} education={education} onDelete={handleDelete}
         experience={experience} onExperienceDelete={handleExperienceDelete} onEditEducation={handleEditEducation} 
         onEditExperience={handleEditExperience} />
        
      </div>
    </>
  );
}      
        

export default App
