import React from 'react';



function App() {
    let currTime = new Date(2023, 3, 3, 20).getHours();
    let greeting = " ";
    const cssStyle = {};

    if (currTime >= 1 && currTime < 12) {
        greeting = "good morning";
        cssStyle.color = "Blue";
    } else if (currTime >= 12 && currTime < 19) {
        greeting = "good afternoon";
        cssStyle.color = "yellow";
    } else if (currTime >= 20 && currTime < 24) {
        greeting = "good night";
        cssStyle.color = "black";
    }
    return (
        <>
            <div>
                <h1>
                    Hello sir, <span style={cssStyle}>{greeting}</span>
                </h1>
            </div>
        </>
    );
}

export default App;