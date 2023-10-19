import React from 'react'
import "./Sidebar.css";
import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="border-right sidebar" id="sidebar-wrapper">
      <div>
        <div>
          <img
            src="/Images/Logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ Width: "80px" }}
          />
        </div>
      </div>
      <div className="list-group list-group-flush">
        <NavLink
          to="/job-vacancies"
          className="list-group-item list-group-item-action"
        >
          Job Vacancies
        </NavLink>
        <NavLink
          to="/applied-jobs"
          className="list-group-item list-group-item-action"
        >
          Applied Jobs
        </NavLink>
      </div>
      <div className="list-group list-group-flush logout">
        <a to="#" className="list-group-item list-group-item-action">
          <LogOut size={18} /> Logout
        </a>
      </div>
    </div>
  );
}

export default UserSidebar

