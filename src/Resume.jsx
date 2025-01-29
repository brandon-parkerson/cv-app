import { useState } from "react";

function Resume(props) {
    let name = props.name;
    let email = props.email;
    let phone = props.phone;
    let education = props.education;
    let educationDelete = props.onDelete;

    
    

    return (
        <div className='resume'>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{phone}</p>
          <h2>Education</h2>
          <hr></hr>
          <ul>
          {education.map(edu => (
              <li key={edu.id}>{edu.school}{' '}<i>{edu.degree}</i>{' '}{edu.date} <button onClick={() => educationDelete(edu.id)}>Delete</button>
              <button>Edit</button></li>
            ))}
          </ul>
          <h2>Experience</h2>
          
          

        </div>
          
    )
}

export { Resume };