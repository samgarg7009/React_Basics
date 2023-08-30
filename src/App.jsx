import React, { useState } from 'react';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


const App = () => {
    
    const [name, SetName] = useState("");
    const [fullName,SetFullName] = useState();

    const OnSubmit =() =>{
        SetFullName(name);
    }

    const InputClicked= (event) => {
       // console.log(event.target.value);
        SetName(event.target.value);
        
    }
    return (
        <>
        <div>
                <form>
                    <div>
                        <h1> hello {fullName} </h1>
                        <input type='text' placeholder='enter your name' onChange={InputClicked} value={name} />
                        <input type='password' placeholder='enter your password' onChange={InputClicked} value={name} />
                        <button type="submit" onClick={OnSubmit}>  submit 👍 </button>
                    </div>
                </form>
        </div>     
        </>
    );
}



export default App;