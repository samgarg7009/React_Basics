import React, { useState } from 'react';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


// const App = () => {
//     //const state = useState();

//     let currTime = new Date().toLocaleTimeString();
//     const [time, SetTime] = useState(currTime);

//     const cssStyles = {};
//     cssStyles.color  = "red";
//     // if (count < 0) {
//     //     cssStyles.color = "red";
//     // }
//     // if (count > 0) {
//     //     cssStyles.color = "#25f325";
//     // }
//     const GetTime = () => {
//         SetTime(new Date().toLocaleTimeString());
//         console.log('clicked');
//     };
//     return (
//         <>
//             <h1 className='heading_style'><span style={cssStyles}>{time}</span>  </h1>
//             <button onClick={GetTime}> Get Time</button>
//         </>
//     );
// }

const App = () => {

    let currTime = new Date().toLocaleTimeString();
    const [time, SetTime] = useState(currTime);

    const GetTime = () => {
        SetTime(new Date().toLocaleTimeString());
        //console.log('clicked');
    };

    //this function calls Get time every 1sec so there is no need to use button
    setInterval(GetTime, 1000);
    return (
        <>
            <h1 className='heading_style'><span>{time}</span>  </h1>
        </>
    );
}


export default App;