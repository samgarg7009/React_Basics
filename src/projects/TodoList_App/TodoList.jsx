import React from 'react'

const TodoList = (props) => {
    // const deleteItem = () => {
    //     console.log("deleted");
    // }

    return (
        <>
            <div className='todo_styles'>
                <i
                    className='fa fa-times'
                    aria-hidden="true"
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                />
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default TodoList;