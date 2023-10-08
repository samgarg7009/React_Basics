import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Contact from './Contact';
import Error from './ErrorPage';
import About from './AboutPage';
import NavBarComp from './NavBarComp';

// Routes(for newer version of react/ previously called as Switches) ensure that only one component is rendered at a time.
// If we don't use this, we can default to the Error component,


// <Route/> are the links between the elements(previously used as component) and should be placed inside the <Routes> tags.
const ReactRouter = () => {
    return (
        <>
            <NavBarComp />
            {/* <Statewise/> */}
            <Routes>
                <Route exact path='/' element={<About />} />
                {/* '/ is for home page and by adding 'exact' it will look for just '/'  */}
                <Route path='/contact/:name' element={<Contact />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </>
    )
}
export default ReactRouter;
