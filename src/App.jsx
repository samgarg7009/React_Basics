import React, { useState } from 'react';

//name of component should always start with CAPITAL letter!!!

//let count = 1;


const App = () => {
    const [inputList, setInput] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInput(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        //to empty the input field
        setInput('');
    }
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1> Todo List</h1>
                    <br />
                    <input type='text' placeholder='Add a item' value={inputList} onChange={itemEvent}></input>
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/* <li> {inputList}</li> */}
                        {items.map((itemval) => {
                            <Todo text={itemval}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}


export default App;