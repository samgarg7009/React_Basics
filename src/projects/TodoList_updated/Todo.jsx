import React, { useState } from 'react';
//import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//name of component should always start with CAPITAL letter!!!

//let count = 1;
import TodoList from './TodoList';

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

    // const deleteItem = (id) => {
    //     setItems((oldItems) => {
    //         return oldItems.filter((arr, index) => {
    //             //return the indices of items which do not match and rest will be filtered out
    //             return index !== id;
    //         });
    //     });
    // };

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1> Todo List</h1>
                    <br />
                    <input type='text' placeholder='Add a item' value={inputList} onChange={itemEvent}></input>
                    <Button variant="outlined" className='new_btn' onClick={listOfItems} startIcon={<AddIcon />}></Button>
                    <ol>
                        {/* <li> {inputList}</li> */}
                        {items.map((itemval, index) => {
                            return (
                                <TodoList
                                    key={index}
                                    id={index}
                                    text={itemval} />
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}


export default App;