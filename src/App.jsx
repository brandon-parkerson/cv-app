import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const FullName = name;
  const Email = email;
 
  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
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
                    <input type="tel" />
                  </label>
                </div>
              </form>
            </div>
        </div>
          
        <div className='resume'>
          <h1>Resume</h1>
          <h2>{FullName}</h2>

        </div>
      </body>
    </>
  )
}

export default App
