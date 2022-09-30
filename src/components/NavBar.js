import React from "react";
import "./style.scss";
import DownArrow from "../assets/Icons/DownArrow.svg";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <h1 className="nav-heading">The Chef Lane</h1>
      <div className="nav-right">
        <div className="circle-ad">
          <p className="Ad">AD</p>
        </div>
        <p className="admin-el">Admin</p>
        <img src={DownArrow} alt="DownArrow" className="dropDrownImg" />
      </div>
    </div>
  );
}
