import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";


const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content:"",
    });

    const InputEvent =(e) =>{
        // const value = e.target.value;
        // const name = e.target.name;

        //instead of above 2 lines use object destructuring
        const {name,value} = e.target;
        setNote((prevData) =>{
            return {
                ...prevData, //shows the previously stored data in the object everytime it renders
                [name]:value, // match the name whether title or content and then set the value corresponding to that
            }
        })
    }

    const addNote =() => {
        props.passNote(note);

        //to set the create note to initial state
        setNote({
            title: "",
            content: "",
        });
        
    }
    return (
        <>
            <div className='main_note'>
                <form>
                    <input type="text" value={note.title} name='title' onChange={InputEvent} placeholder="Title" autoComplete='off' />
                    <textarea rows="" column="" value={note.content} name='content' onChange={InputEvent} placeholder='write a note...'></textarea>
                    <Button onClick={addNote}>
                        <AddIcon className='plus_sign' />
                    </Button>
                </form>
            </div>
        </>
    );
}


export default CreateNote;