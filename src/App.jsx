import React, { Children } from 'react';
import SlotM from './slotMachine/slotMachine';

//name of component should always start with CAPITAL letter!!!

function App() {
    return (
        <>
            <h1 className='heading_style'> 🎰 welcome to <span style={{ fontWeight: "bold" }}>The SLot Machine</span> 🎰  </h1>
            <div className='slotMachine'>
                <SlotM x="😞" y = "🙂 " z = "🙂 "/>
                <SlotM x=" 🥭 " y=" 🥭 " z=" 🥭 " />
                <SlotM x="🕗" y="🕚 " z="🕚 " />
            </div>
        </>
    );
}
export default App;