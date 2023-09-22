import React,{useState} from 'react';
import "./googleKeep.css";
import Note from './Note';

import Header from './header';
import Footer from './footer';

import CreateNote from './CreateNote';
//name of component should always start with CAPITAL letter!!!

const GoogleKeep = () => {
    const [addItem, setAddItem] = useState([]); //add item is an array so pass an empty array for initial data 

    const addNote =(note) =>{
        setAddItem((prevData)=>{
            return [...prevData,note];
        })
    }
    return (
        <>
            <Header />
            <CreateNote passNote={addNote}/> 
            {/* passNote is the props use to show the content of createNote on Note */}
             
            {addItem.map((val ) => {
                const { id } = val;
                return <Note key={id} {...val} />;
                // {...val} gives everything except id from data object
            })}
            <Footer />
            
        </>
    );
}


export default GoogleKeep;