import React, { useContext } from 'react';
//import CompC from './CompC';
import { firstName, lastName } from './CompA';

const CompB = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName);
    return (
        <>
        <h1>my name is {fname} {lname}</h1>
        {/* <CompC/> */}
        </>
    );
}


export default CompB;