import React, { createContext } from 'react';
import CompB from './CompB';

//name of component should always start with CAPITAL letter!!!
const firstName = createContext();
const lastName = createContext();
const CompA = () => {
    return (
        <>
            <firstName.Provider value={'Samiksha'}>
                <lastName.Provider value={'Garg'}>
                    <CompB />
                </lastName.Provider>
            </firstName.Provider>
        </>
    );
}


export default CompA;
export { firstName, lastName };
