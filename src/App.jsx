import { useState } from 'react'

import './App.css'
import { EducationForm } from './Education';
import { GeneralInfo } from './Info';
import { ExperienceForm } from './Experience';
import { Resume } from './Resume';

function App() {
  let nextId = 0;
  
  // General info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Education info
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [date, setDate] = useState('');
  const [education, setEducation] = useState([{
    
    id: nextId++,
    school: 'Harvard',
    degree: 'Masters Computer Science',
    date: '2024-05-05'
  }])

  function handleFormReset() {
    document.getElementById("EducationForm").reset();
  }

  function handleDelete(id) {
    setEducation(education.filter((edu) => edu.id !== id));
  }
  

  return (
    <>
      <div className="app-container">
        <div className='forms-container'>
          <GeneralInfo onName={setName} onEmail={setEmail} onPhone={setPhone}/>
          <EducationForm onSchool={setSchool} onDegree={setDegree} onDate={setDate} />
          <button type='button' onClick={() => 
                  {setEducation([...education, {id: nextId++, school: school, degree: degree, date: date }]), handleFormReset()}}>Add</button>
          <ExperienceForm />
        </div>
        <Resume name={name} email={email} phone={phone} school={school} education={education} onDelete={handleDelete} />
        
      </div>
    </>
  );
}      
        

export default App
