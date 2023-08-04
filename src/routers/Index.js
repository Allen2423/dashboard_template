import {React} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartView from '../views/StartView';
import Dashboard from '../views/Dashboard';
import LandingPage from '../views/LandingPage';
import Patient from '../views/Patient';
import ChildInfo from '../views/ChildInfo';
import ChildFormView from '../views/ChildFormView';
import ParentView from '../views/ParentView';
import Appointment from '../views/Appointment';
import ChildCardView from '../views/ViewChildCard';
import Admin from '../views/Admin';

const Routing = ()=>{
    // const navigate = useNavigate();
   const isLogin = sessionStorage.getItem('isLogin');
 
    // const { isLogin,tokena } = useContext(AuthContext);
    // alert(isLogin)
    return(
        <Router>
            <Routes>
                <Route  path='/' element={<LandingPage  />}/>
            { isLogin  ?(
                <Route  path='/dashboard/' element={<Dashboard/>} >
                <Route  index  element={<StartView />} />
                <Route  path='/dashboard/startView' element={<StartView />} />
                <Route  path='/dashboard/parentHealth' element={<ParentView />} />
                <Route  path='/dashboard/admin' element={<Admin/>}/>
                <Route  path='/dashboard/parent' element={<Patient />} />
                <Route  path='/dashboard/childCard' element={<ChildInfo  />} />
                <Route  path='/dashboard/childCardView' element={<ChildCardView />}/>
                <Route  path='/dashboard/childHealth' element={<ChildFormView/>}/>
                <Route  path='/dashboard/appointment' element={<Appointment/>}/>
                </Route>
                ):(<Route path='*' element={<LandingPage/>}/>)}
               {/* { isLogin==null &&(<Route path='*' element={<LandingPage/>}/>)} */}
                {/* <Route path="*" element={<div><h1>Nothing found 404!</h1></div>} /> */}
            </Routes>
        </Router>
    );
}
export default Routing;