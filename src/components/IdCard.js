import React from 'react';

const IdCard=({lastName, firstName, gender, height,birth,picture})=>{
    return(
        <div className="Id">
         <p>Last Name:{lastName}</p>
         <p>First Name: {firstName}</p>
         <p>gender:{gender}</p>
         <p>height: {height}</p>
         <p>Birth date: {birth.toDateString()}</p>
         <img src={picture}/>
        </div>

    )

}

export default IdCard