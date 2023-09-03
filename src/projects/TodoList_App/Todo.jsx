import React, { useState } from 'react';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


const App = () => {
    const [inputList, setInput] = useState("buy mango");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInput(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, { inputList }];
        })
    }
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1> Todo List</h1>
                    <br />
                    <input type='text' placeholder='Add a item' onChange={itemEvent} ></input>
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/* <li> {inputList}</li> */}
                        {items.map((itemval) => {
                            return <li>{itemval}</li>
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}


export default App;