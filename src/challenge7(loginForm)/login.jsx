import React, { useState } from 'react';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


const App = () => {

    const [fullName, SetFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phno: '',
    });

    const InputClicked = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);


        // const value = event.target.value;
        // const name = event.target.name;

        //instead of writing again and again use object destructuring
        const { value, name } = event.target;

        SetFullName((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
            //if (name === 'fName') {

            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phno: preValue.phno,
            //     };
            // } else if (name === 'lName') {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phno: preValue.phno,
            //     };
            // } else if (name === 'email') {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phno: preValue.phno,
            //     };
            // } else if (name === 'phno') {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phno: value,
            //     };
        }
        )
    }


    const OnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div>
                <form onSubmit={OnSubmit}>
                    <div>
                        <h1> hello {fullName.fname} {fullName.lname}</h1>
                        <p>{fullName.email}</p>
                        <p>{fullName.phno}</p>
                        <input type='text' placeholder='enter your first name' name='fName' onChange={InputClicked} value={fullName.fname} />
                        <input type='text' placeholder='enter your last name' name='lName' onChange={InputClicked} value={fullName.lname} />
                        <input type='email' placeholder='enter your email' name='email' onChange={InputClicked} value={fullName.email} />
                        <input type='number' placeholder='enter your phone number' name='phno' onChange={InputClicked} value={fullName.phno} />
                        <button type="submit" >  submit 👍 </button>
                    </div>
                </form>
            </div>
        </>
    );
}



export default App;