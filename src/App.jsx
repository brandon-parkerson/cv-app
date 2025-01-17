import { useState } from 'react'

import './App.css'
import { use } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

 
 
  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value)
  }

  return (
    <>
      <body>
        <div className="user-inputs">
          <div className="general-info">
              <h1>General Info</h1>
              <form action="post" className='general-info-form'>
                <div className="full-name-input">
                  <label htmlFor="fullName">
                    Full Name:{' '}
                    <input type="text" id='fullName' value={name} onChange={handleName}/>
                  </label>
                </div>
                <div className="email-container">
                  <label htmlFor="email" >
                    Email:{' '}
                  <input type="email" id='email' value={email} onChange={handleEmail} />
                  </label>
                </div>
                <div className="phone-container">
                  <label htmlFor="phone">
                    Phone:{' '}
                    <input type="tel" id='phone' value={phone} onChange={handlePhone} />
                  </label>
                </div>
              </form>
            </div>
        </div>
          
        <div className='resume'>
          <h1>Resume</h1>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>Phone: {phone}</p>
        </div>
      </body>
    </>
  )
}

export default App
