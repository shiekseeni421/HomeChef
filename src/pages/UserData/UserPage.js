import React from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import fe_download from "../../assets/Icons/fe_download.svg";
import Combined from "../../assets/Icons/Combined Shape.svg";
import UpArrow from "../../assets/Icons/UpArrow.svg";
import DropDown from "../../assets/Icons/DropDown.svg";
import LeftArrow from "../../assets/Icons/LeftArrow.svg";
import rightArrow from "../../assets/Icons/rightArrow.svg";
import "./style.scss";
import { UseUserValues } from "../../context/UseFromContext";

function UserPage() {
  const { toggle } = UseUserValues();
  let Array_Data = [
    {
      id: 1,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 2,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 3,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 4,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 5,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 6,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 7,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 8,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 9,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 10,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 11,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
    {
      id: 12,
      ChefID: 254,
      Name: "Eduardo",
      MobileNumber: "+91-755-550-0371",
      EmailID: "deanna.curtis@example.com",
      Profilestatus: "New User",
    },
  ];

  return (
    <div className="user-container">
      <NavBar />
      <div className="user-sub">
        <SideBar />
        <div className="right-Container">
          <div className="heading-container">
            <p className="heading">UserPage</p>
          </div>
          <div className="data-container">
            <div className="user-table">
              <div className="input-export">
                <div className="search-container">
                  <input
                    type="search"
                    placeholder="Search by Ride ID"
                    className="input-el"
                  />
                  <img src={Combined} alt="Combined" />
                </div>
                <div className="export-container">
                  <img src={fe_download} alt="fe_download" />
                  <span className="export-text">Export CSV</span>
                </div>
              </div>
              <p className="hr-line"></p>

              <table className="table-container">
                <tr>
                  <th className="table-right-pd">S.NO</th>
                  <th className="table-right-pd">Chef ID</th>
                  <th className="table-right-pd">
                    <div className="d-flex">
                      <span> Name</span>
                      <div className="d-flex flex-column justify-content-center mx-1">
                        <img src={UpArrow} alt="UpArrow" className="my-1" />
                        <img src={DropDown} alt="DropDown" />
                      </div>
                    </div>
                  </th>
                  <th className="table-right-pd">
                    <div className="d-flex">
                      <span> Mobile Number</span>
                      <div className="d-flex flex-column justify-content-center mx-1">
                        <img src={UpArrow} alt="UpArrow" className="my-1" />
                        <img src={DropDown} alt="DropDown" />
                      </div>
                    </div>
                  </th>
                  <th className="table-right-pd">
                    <div className="d-flex">
                      <span> Email ID</span>

                      <div className="d-flex flex-column justify-content-center mx-1">
                        <img src={UpArrow} alt="UpArrow" className="my-1" />
                        <img src={DropDown} alt="DropDown" />
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex">
                      <span>Profile status</span>
                      <div className="d-flex flex-column justify-content-center mx-1">
                        <img src={UpArrow} alt="UpArrow" className="my-1" />
                        <img src={DropDown} alt="DropDown" />
                      </div>
                    </div>
                  </th>
                </tr>
                {Array_Data.map((item, i) => {
                  return (
                    <tr
                      className={
                        item["id"] % 2 === 0 ? "tableData-1" : "tableData-0"
                      }
                    >
                      <td>{item["id"]}</td>
                      <td>{item["ChefID"]}</td>
                      <td>{item["Name"]}</td>
                      <td>{item["MobileNumber"]}</td>
                      <td>{item["EmailID"]}</td>
                      <td>{item["Profilestatus"]}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="pages">
            <div className="left-arrow">
              <img src={LeftArrow} alt="LeftArrow" />
            </div>
            <div className="active">1</div>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>...</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <div className="left-arrow">
              <img src={rightArrow} alt="LeftArrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
