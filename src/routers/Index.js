import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartView from '../views/StartView';
import Dashboard from '../views/Dashboard';
import About from '../views/About';
import Contact from '../views/Contact';
import LandingPage from '../views/LandingPage';

const Routing = ()=>{
    return(
        <Router>
            <Routes>
                <Route  path='/' element={<LandingPage/>}/>
                <Route  path='/dashboard/' element={<Dashboard />} >
                <Route  index  element={<StartView />} />
                <Route  path='/dashboard/startView' element={<StartView />} />
                <Route  path='/dashboard/about' element={<About />}/>
                <Route  path='/dashboard/contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </Router>
    );
}
export default Routing;