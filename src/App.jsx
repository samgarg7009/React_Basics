import React, { useState } from 'react';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


const App = () => {
    
    const [name, SetName] = useState("");
    const [fullName,SetFullName] = useState("");

    const [lastName, SetLastName] = useState("");

    const [lastNameNew, SetLastNameNew] = useState("");

    const OnSubmit =(e) =>{
        e.preventDefault();
        SetFullName(name);
        SetLastNameNew(lastName)
    }

    const InputClicked= (event) => {
       // console.log(event.target.value);
        SetName(event.target.value);
        
    }
    const InputClickedTwo = (event) => {
        // console.log(event.target.value);
        SetLastName(event.target.value);

    }
    return (
        <>
        <div>
                <form onSubmit={OnSubmit}>
                    <div>
                        <h1> hello {fullName} {lastName}</h1>
                        <input type='text' placeholder='enter your name' onChange={InputClicked} value={name} />
                        <input type='text' placeholder='enter your password' onChange={InputClickedTwo} value={lastName} />
                        <button type="submit" >  submit 👍 </button>
                    </div>
                </form>
        </div>     
        </>
    );
}



export default App;