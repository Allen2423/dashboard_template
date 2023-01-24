import '../App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import React from 'react';
import Footer from './../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';


const Dashboard = (props) => {

    const toggle = () => {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
    }

  const location = useLocation();


    return (
        <div className='dashContainer fluid-container'>
            <div className='superC '>
                <div className='sidebar_container  active' id='sidebar'>
                    <Sidebar />
                </div>
                <div className='content' id='content'>
                    <div className='header col-md-12  bg-light' id='header'>
                        <Header toggle={toggle} />
                    </div>
                    <div className='urlBar '> {location.pathname} </div>
                    <div className='content_container ' >
                        <Outlet />
                    </div>
                    <div className='footer ' id='footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;