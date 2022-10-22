import '../App.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import { NavLink, Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className=' navbnar '>
        <nav className=' containers shadow'>
            <Avatar className='d-flex me-3'  src="../assets/chatIcon2.png" />
          <div className="user d-flex">
          <p className='route navbar-brand'>
            AmoTech
          </p>
          </div>
        </nav>
      </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/startView" className="link">
            <li className="sidebarListItem ">
              {/* <LineStyle className="sidebarIcon" /> */}
              Home
            </li>
            </NavLink>
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              Analytics
            </li>
            <li className="sidebarListItem">
              {/* <TrendingUp className="sidebarIcon" /> */}
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/about" className="link">
            <li className="sidebarListItem">
              {/* <PermIdentity className="sidebarIcon" /> */}
              About
            </li>
            </NavLink>
            <NavLink to="/contact" className="link">
            <li className="sidebarListItem">
              {/* <Storefront className="sidebarIcon" /> */}
              Contact
            </li>
            </NavLink>
            <li className="sidebarListItem">
              {/* <AttachMoney className="sidebarIcon" /> */}
              Transactions
            </li>
            <li className="sidebarListItem">
              {/* <BarChart className="sidebarIcon" /> */}
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
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
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              {/* <WorkOutline className="sidebarIcon" /> */}
              Manage
            </li>
            <li className="sidebarListItem">
              {/* <Timeline className="sidebarIcon" /> */}
              Analytics
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