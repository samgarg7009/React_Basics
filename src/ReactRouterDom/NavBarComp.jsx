import React from "react";
import { NavLink } from "react-router-dom";


const NavBarComp = () => {
    return (
        <>
            {/* instead of using <a/>, use <link> or <NavLink> beacuse we want the page to render itself without reload */}
            <div className="nav">
                
                <NavLink to="/search"
                    style={({ isActive }) => ({
                        color: isActive ? '#545e6f' : '#fff',
                        background: isActive ? '#f0f0f0' : '#024e4e',
                    })}>
                   Search
                </NavLink>
                <NavLink  to="/" 
                    style={({ isActive }) => ({
                        color: isActive ? '#545e6f' :'#fff',
                        background: isActive ? '#f0f0f0':'#024e4e',
                    })}>
                    About us
                </NavLink>
                <NavLink to="/contact/sam" 
                    style={({ isActive }) => ({
                        color: isActive ? '#545e6f' : '#fff',
                        background: isActive ? '#f0f0f0' : '#024e4e',
                    })}>
                    Contact
                </NavLink>
            </div>
            
        </>
    );

}

export default NavBarComp;