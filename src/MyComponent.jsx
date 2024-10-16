import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("BRO");
    }

    const updateAge = () => {
        
        setAge(age+1);
    }

    const toggleEmploymentStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>

            <p>Name: {age} </p>
            <button onClick={updateAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "yes" : "no"} </p>
            <button onClick={toggleEmploymentStatus}>Toggle Status</button>
        </div>
    )

}

export default MyComponent