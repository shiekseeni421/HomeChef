import React from "react";
import Dashboard from "../assets/Icons/Dashboard.svg";
import Group from "../assets/Icons/Group.svg";
import User from "../assets/Icons/User Roles.svg";
import profile from "../assets/Icons/Vector.svg";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-el">
        <img src={Dashboard} alt="Dashboard" />
        <p className="sidebar-text">Chef Details</p>
      </div>
      <div className="sidebar-el">
        <img src={profile} alt="Dashboard" />
        <p className="sidebar-text">User Data</p>
      </div>
      <div className="sidebar-el">
        <img src={User} alt="Dashboard" />
        <p className="sidebar-text">Staff & Role</p>
      </div>
      <div className="sidebar-el">
        <img src={Group} alt="Dashboard" />
        <p className="sidebar-text">Testimonials</p>
      </div>
    </div>
  );
}
