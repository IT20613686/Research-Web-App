import React from "react";
import './Sidebar.css';
import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="border-right sidebar" id="sidebar-wrapper">
      <div>
        <img
          src="/Images/Logo.png"
          alt="Logo"
          className="img-fluid"
          style={{ Width: "80px"}}
        />
      </div>
      <div className="list-group list-group-flush">
        <NavLink
          to="/job-posting"
          className="list-group-item list-group-item-action"
        >
          Job Entry
        </NavLink>
        <NavLink
          to="/posted-jobs"
          className="list-group-item list-group-item-action"
        >
          Posted Jobs
        </NavLink>
      </div>
      <div className="list-group list-group-flush logout">
        <a to="#" className="list-group-item list-group-item-action">
          <LogOut size={18} /> Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
