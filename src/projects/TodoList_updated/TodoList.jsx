import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const TodoList = (props) => {
const [line,setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    };

    return (
        <>
            <div className='todo_styles'>
                <Button onClick={cutIt}><DeleteIcon /></Button>
                
                <li style={{textDecoration: line ?"line-through": "none"}}>{props.text}</li>
            </div>
        </>
    )
}

export default TodoList;