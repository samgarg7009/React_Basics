import React from 'react';
import { firstName,lastName } from './App';

//by using createContext 
const CompC = () => {
    return (
        <>
        <firstName.Consumer>
            {(fname) =>{
                return (
                    <lastName.Consumer>
                        {(lname)=>{
                            return (
                                <h1>my name is {fname} {lname}</h1>
                            )
                        }}
                    </lastName.Consumer>
                )
            }}
        </firstName.Consumer>
        </>
    );
}


export default CompC;