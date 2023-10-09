import React from "react";
import { useLocation, useNavigate, useParams} from "react-router-dom";

// const Contact = ({match}) => {
//     return <h1>Contact page {match.params.name}</h1>;

// }

const Contact = () => {
    const { name } = useParams();
    const location = useLocation();
    const history = useNavigate();
    console.log(history);
    return (<>
        <h1> contact name {name}</h1>
        
        {location.pathname === `/contact/samiksha` ? (<button className="buttonstyle" onClick ={() => history(-1)}> go back </button>):null}
        <button className="buttonstyle" onClick={()=>history('/')}>home page</button>
    </>)
}

export default Contact;