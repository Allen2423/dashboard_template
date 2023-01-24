import '../App.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import logo from "../assets/chatIcon2.webp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className=' navbnar '>
        <div className=' containers BoxShadow'>
          <div className='avatar'>
            <Avatar className='d-flex  me-3' src={logo} alt='Allen' />
          </div>
          <div className="user d-flex">
            <p className='route navbar-brand '>
              AmoTech
            </p>
          </div>
        </div>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/dashboard/startView" className="link">
              <li className="sidebarListItem ">
                {/* <LineStyle className="sidebarIcon" /> */}
                Home
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Personal Details</h3>
          <ul className="sidebarList">
            <NavLink to="/dashboard/about" className="link">
              <li className="sidebarListItem">
                {/* <PermIdentity className="sidebarIcon" /> */}
                About
              </li>
            </NavLink>
            <NavLink to="/dashboard/contact" className="link">
              <li className="sidebarListItem">
                {/* <Storefront className="sidebarIcon" /> */}
                Contact
              </li>
            </NavLink>
            <li className="sidebarListItem">
              {/* <AttachMoney className="sidebarIcon" /> */}
              Register
            </li>
            <li className="sidebarListItem">
              {/* <BarChart className="sidebarIcon" /> */}
              View Debtors
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Loan Details</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              {/* <MailOutline className="sidebarIcon" /> */}
              Mail
            </li>
            <li className="sidebarListItem">
              {/* <DynamicFeed className="sidebarIcon" /> */}
              Feedback
            </li>
            <li className="sidebarListItem">
              {/* <ChatBubbleOutline className="sidebarIcon" /> */}
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Loan Confirmation</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              {/* <WorkOutline className="sidebarIcon" /> */}
              Approved Loan
            </li>
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              Returned Loan
            </li>
            <li className="sidebarListItem">
              {/* <Report className="sidebarIcon" /> */}
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;