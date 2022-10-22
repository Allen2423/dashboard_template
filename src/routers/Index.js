import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartView from '../views/StartView';
import Dashboard from '../views/Dashboard';
import About from '../views/About';
import Contact from '../views/Contact';

const Routing = ()=>{
    return(
        <Router>
            
            <Dashboard>
            <Routes>
                {/* <Route exact path='/' element={<Dashboard />} /> */}
                <Route exact path='/startView' element={<StartView />} />
                <Route exact path='/about' element={<About />}/>
                <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
            </Dashboard>
        </Router>
    );
}
export default Routing;