import React from 'react';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
//import Button from "@material-ui/core/Button";

const Note = (props) => {
    const DeleteNote= () => {
        props.deleteNote(props.id);
    }

    return (
        <>
            <div className='note'>
                <h1> {props.title}</h1>
                <br/>
                <p> {props.content}</p>
                <button className='btn' onClick={DeleteNote}>
                    <DeleteOutlineIcon className='deleteIcon' />
                </button>
            </div>
        </>
    );
}


export default Note;