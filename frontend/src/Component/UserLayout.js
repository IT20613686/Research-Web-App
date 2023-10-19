import React from 'react'
import UserSidebar from "./UserSidebar";

const UserLayout = ({ children }) => {
  return (
    <div className="d-flex" id="wrapper">
      <UserSidebar />
      <div id="page-content-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout