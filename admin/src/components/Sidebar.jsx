import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import './Sidebar.css';  // Import the updated CSS file

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-links">
        <NavLink 
          className="sidebar-link" 
          to="/add"
          activeClassName="sidebar-link-active"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="" />
          <p className="sidebar-link-text">Add Items</p>
        </NavLink>

        <NavLink 
          className="sidebar-link" 
          to="/addelectronics"
          activeClassName="sidebar-link-active"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="" />
          <p className="sidebar-link-text">Add Electronics</p>
        </NavLink>

        <NavLink 
          className="sidebar-link" 
          to="/electronicslist"
          activeClassName="sidebar-link-active"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="sidebar-link-text">Electronics List</p>
        </NavLink>

        <NavLink 
          className="sidebar-link" 
          to="/list"
          activeClassName="sidebar-link-active"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="sidebar-link-text">List Items</p>
        </NavLink>

        <NavLink 
          className="sidebar-link" 
          to="/orders"
          activeClassName="sidebar-link-active"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="sidebar-link-text">Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
