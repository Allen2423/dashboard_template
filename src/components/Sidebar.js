import '../App.css';
import {React, useContext, useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import {NavLink} from 'react-router-dom';
import Free_Sample_By_Wix from "../assets/Free_Sample_By_Wix.jpg";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HomeIcon from '@mui/icons-material/Home';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import StreetviewIcon from '@mui/icons-material/Streetview';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AuthContext from '../store/Action';


const Sidebar = () => {

    const {profile} = useContext(AuthContext);

    return (
        <div className="sidebar">
            <div className=' navbnar '>
                <div className=' containers center BoxShadow'>
                    <div className='avatar'>
                        <Avatar className='d-flex  me-3'
                            src={Free_Sample_By_Wix}
                            alt='Allen'/>
                    </div>
                    <div className="user d-flex">
                        <p className='route navbar-brand '>
                            Reno Clinic
                        </p>
                    </div>
                </div>
            </div>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <NavLink to="/dashboard/startView" className="link">
                            <li className="sidebarListItem ">
                                <HomeIcon className="sidebarIcon"/>
                                Home
                            </li>
                        </NavLink>
                        {
                        (profile.status === 'admin') && (
                            <>
                                <NavLink to="/dashboard/admin" className="link">
                                    <li className="sidebarListItem">
                                        <AppRegistrationIcon className="sidebarIcon"/>
                                        Admin
                                    </li>
                                </NavLink>
                                <NavLink to="/dashboard/parent" className="link">
                                    <li className="sidebarListItem">
                                        <AppRegistrationIcon className="sidebarIcon"/>
                                        Registration
                                    </li>
                                </NavLink>
                                <NavLink to="/dashboard/childCard" className="link">
                                    <li className="sidebarListItem">
                                        <EscalatorWarningIcon className="sidebarIcon"/>
                                        Child  card
                                    </li>
                                </NavLink>
                            </>
                        )
                    }
                        {/* {(profile.status ===  'admin' &&  profile.id == 3 )&&( <> */}
                        <NavLink to="/dashboard/childCardView" className="link">
                            <li className="sidebarListItem">
                                <StreetviewIcon className="sidebarIcon"/>
                                View child  card
                            </li>
                        </NavLink>
                        <NavLink to="/dashboard/childHealth" className="link">
                            <li className="sidebarListItem">
                                <HealthAndSafetyIcon className="sidebarIcon"/>
                                Child health
                            </li>
                        </NavLink>
                        {/* </>)} */}
                        <NavLink to="/dashboard/parentHealth" className="link">
                            <li className="sidebarListItem">
                                <PregnantWomanIcon fontSize='large' className="sidebarIcon"/>
                                Mother health
                            </li>
                        </NavLink>
                        <NavLink to="/dashboard/appointment" className="link">
                            <li className="sidebarListItem">
                                <BookOnlineIcon className="sidebarIcon"/>
                                Appointments
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
