import '../App.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import React from 'react';
import Footer from './../components/Footer';


const Dashboard = (props) => {

    const close = () => {
        var sidebar = document.getElementById('sidebar');
        var content = document.getElementById('content');

        // sidebar
        sidebar.style.display = "none"
        sidebar.style.width = "0"

        // Content
        content.style.width = "100%"
    };


    const open = () => {
        var sidebar = document.getElementById('sidebar');
        var content = document.getElementById('content');

        // sidebar
        sidebar.style.display = "block"
        sidebar.style.width = "240px"

        // Content
        content.style.width = " calc(100% - 240px)";
        // content.classList.add('overlay');
    };
    // const toggle = () => {
    //     var sidebar = document.getElementById('sidebar');
    //     sidebar.classList.add('active');
    // }

    return (
            <div className='fluid-container'>
                <div className='superC '>
                    <div className='sidebar_container  ' id='sidebar'>
                        <Sidebar />
                    </div>
                    <div className='content' id='content'>
                        <div className='header col-md-12  bg-light' id='header'>
                            <Header close={close} opens={open} />
                        </div>
                        <div className='content_container ' >
                            {props.children}
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