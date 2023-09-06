import React, { useState } from 'react';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


const App = () => {
    //const state = useState();
    const [count, SetCount] = useState(0);

    const cssStyles = {};
    if (count < 0) {
        cssStyles.color = "red";
    }
    if (count > 0) {
        cssStyles.color = "#25f325";
    }
    const IncNum = () => {
        SetCount(count + 1);
        //console.log('clicked');
    };
    const DecNum = () => {
        SetCount(count - 1);
        //console.log('clicked');
    };
    return (
        <>
        <div className='main_div'>
            <div className='center_div'>
                    <h1 className='heading_style'><span style={cssStyles}>{count}</span>  </h1>
                    <div className='buttons'>
                        <button onClick={IncNum}> increase</button>
                        <button onClick={DecNum}> decrease</button>
                    </div>
            </div>
        </div>
            

        </>
    );
}
export default App;