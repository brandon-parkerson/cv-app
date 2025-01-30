import { useState } from "react";

function Resume(props) {
    let name = props.name;
    let email = props.email;
    let phone = props.phone;

    let education = props.education;
    let educationDelete = props.onDelete;
    let educationEdit = props.onEditEducation;

    let experience = props.experience;
    let experienceDelete = props.onExperienceDelete;
    let experienceEdit = props.onEditExperience;
    
    

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
              <button onClick={() => educationEdit(edu.id, edu.school, edu.degree, edu.date)}>Edit</button></li>
            ))}
          </ul>
          <h2>Experience</h2>
          <hr />
          <ul>
            {experience.map(exp => (
                <li key={exp.id}>{exp.position}{' '}<i>{exp.company}</i>{' '}{exp.fromDate}{' '}{'-'}{exp.toDate} {' '} {exp.responsibilities} <button onClick={() => experienceDelete(exp.id)}>Delete</button>
                <button onClick={() => experienceEdit(exp.id, exp.position, exp.company, exp.fromDate, exp.toDate, exp.responsibilities)}>Edit</button></li>
            ))}
          </ul>
          

        </div>
          
    )
}

export { Resume };