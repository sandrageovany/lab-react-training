import React from 'react';

const Greetings =({lang,children})=>{
    let greeting;
    switch (lang) {
        case 'de':
            greeting = "Hallo, ";
            break;
        case 'fr':
            greeting = "Bonjour, ";
            break;
        default:
            greeting = "Hello, ";
            break;
    }
   
    
    return (
        <p>{greeting} {children}</p>
    )
}

export default Greetings