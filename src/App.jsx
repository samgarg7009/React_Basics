import React from 'react';
import { add, sub, div, mult } from './challenge4/Calc';

function App(){
    return (
        <>
        <ol>
            <li>sum of two number is {add(2,4)}</li>
            <li>sum of two number is {sub(2, 4)}</li>
            <li>sum of two number is {div(2, 4)}</li>
            <li>sum of two number is {mult (2, 4)}</li>
        </ol>
        </>
    );
}
export default App;