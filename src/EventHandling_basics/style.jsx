import React, { useState } from 'react';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


const App = () => {
    //const state = useState();

    const cssStyles = {};
    const [bg, setBg] = useState(cssStyles.backgroundColor = "white");
    const [name, SetName] = useState("hello");
    //cssStyles.color  = "red";
    // if (count < 0) {
    //     cssStyles.color = "red";
    // }
    // if (count > 0) {
    //     cssStyles.color = "#25f325";
    // }

    //let count = 0;
    const BgChange = () => {
        setBg(cssStyles.backgroundColor = "blue");
        SetName("Ouch 😦 !!");


        //ALTERNATE METHOD FOR DOUBLE CLICK
        //count = count + 1;
        // if(count === 2){
        //     setBg(cssStyles.backgroundColor = "yellow");
        //     SetName("Stop it 😠 !!");
        // }
        // console.log('clicked');
    };

    const BgChangeDbl = () => {
        setBg(cssStyles.backgroundColor = "yellow");
        SetName("Stop 😠 !!");
    };
    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={BgChange} onDoubleClick={BgChangeDbl}> {name}</button>
            </div>
        </>
    );
}



export default App;