import React from "react";

const Sresult= (props)=>{
    const img = `http://source.unsplash.com/400x300/?${props.name}`;
    return(
        <>
        <img src ={img} alt ="search"/>
        </>
    )
}

export default Sresult;