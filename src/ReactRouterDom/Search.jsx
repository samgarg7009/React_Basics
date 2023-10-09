import React, { useState } from "react";
import Sresult from "./Sresult";
const Search =()=>{
    const [img,setImage] = useState("");
    const inputEvent =(e) =>{
        const data = e.target.value;
        setImage(data);
    }
    return(
        <><div className="searchbar">
            <input className="input" type="text" onChange={inputEvent} value={img} placeholder="what do u want!!" />
           {img === ""? null : <Sresult name={img}/>}
        </div>
            
        </>
    )
}

export default Search;