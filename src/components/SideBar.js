import React from "react";
import Dashboard from "../assets/Icons/Dashboard.svg";
import Group from "../assets/Icons/Group.svg";
import User from "../assets/Icons/User Roles.svg";
import profile from "../assets/Icons/Vector.svg";
import whiteMessage from "../assets/Icons/whiteMessage.svg";
import Whiteprofile from "../assets/Icons/Whiteprofile.svg";

import { UseUserValues } from "../context/UseFromContext";

export default function SideBar() {
  const { setToggle, toggle } = UseUserValues();

  let setUserData = () => {
    setToggle("userData");
  };

  let setTestimonialsData = () => {
    setToggle("Testimonials");
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-el1">
        <img src={Dashboard} alt="Dashboard" />
        <p className="sidebar-text">Chef Details</p>
      </div>
      <div
        className={toggle === "userData" ? "sidebar-el2" : "sidebar-el1"}
        onClick={setUserData}
      >
        <img
          src={toggle === "userData" ? Whiteprofile : profile}
          alt="Dashboard"
        />
        <p className="sidebar-text">User Data</p>
      </div>
      <div className="sidebar-el1">
        <img src={User} alt="Dashboard" />
        <p className="sidebar-text">Staff & Role</p>
      </div>
      <div
        className={toggle === "Testimonials" ? "sidebar-el2" : "sidebar-el1"}
        onClick={setTestimonialsData}
      >
        <img
          src={toggle === "Testimonials" ? whiteMessage : Group}
          alt="Dashboard"
        />
        <p className="sidebar-text">Testimonials</p>
      </div>
    </div>
  );
}
