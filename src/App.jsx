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
        if(count >0)
        SetCount(count - 1);
    else {
        alert('sorry,Zero time.limiy')
        SetCount(0);
    }
      //console.log('clicked');
    };
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <h1 className='heading_style'>{count}</h1>
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