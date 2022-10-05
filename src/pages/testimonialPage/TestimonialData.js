import React from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Combined from "../../assets/Icons/Combined Shape.svg";
import UpArrow from "../../assets/Icons/UpArrow.svg";
import DropDown from "../../assets/Icons/DropDown.svg";
import LeftArrow from "../../assets/Icons/LeftArrow.svg";
import rightArrow from "../../assets/Icons/rightArrow.svg";
import star1 from "../../assets/Icons/star1.svg";
import "./style.scss";

function TestimonialData() {
  let Array_Data_1 = [
    {
      id: 1,
      Chefname: "Eduardo",
      Name: "Eduardo",
      Review:
        "Lorem ipsum dolor ed amet conse adipiscing magna aliqua adipiscing magna...",
    },
    {
      id: 2,
      Chefname: "Eduardo",
      Name: "Eduardo",
      Review:
        "Lorem ipsum dolor ed amet conse adipiscing magna aliqua adipiscing magna...",
    },
    {
      id: 3,
      Chefname: "Eduardo",
      Name: "Eduardo",
      Review:
        "Lorem ipsum dolor ed amet conse adipiscing magna aliqua adipiscing magna...",
    },
    {
      id: 4,
      Chefname: "Eduardo",
      Name: "Eduardo",
      Review:
        "Lorem ipsum dolor ed amet conse adipiscing magna aliqua adipiscing magna...",
    },
    {
      id: 5,
      Chefname: "Eduardo",
      Name: "Eduardo",
      Review:
        "Lorem ipsum dolor ed amet conse adipiscing magna aliqua adipiscing magna...",
    },
    {
      id: 6,
      Chefname: "Eduardo",
      Name: "Eduardo",
      Review:
        "Lorem ipsum dolor ed amet conse adipiscing magna aliqua adipiscing magna...",
    },
    {
      id: 7,

      Chefname: "Eduardo",
      Name: "Eduardo",
      Review:
        "Lorem ipsum dolor ed amet conse adipiscing magna aliqua adipiscing magna...",
    },
  ];
  return (
    <div className="user-container">
      <NavBar />
      <div className="user-sub">
        <SideBar />
        <div className="right-Container">
          <div className="heading-container">
            <p className="heading">Testimonials</p>
          </div>
          <div className="dataContainer">
            <div className="sub-container">
              <div className="search-container">
                <input
                  type="search"
                  placeholder="Search by Ride ID"
                  className="input-el"
                />
                <img src={Combined} alt="Combined" />
              </div>
              <p className="hr-line"></p>
              <table className="tableContainer">
                <tr>
                  <th>S.NO</th>
                  <th className="width">
                    <div className="name-th">
                      <span> Name</span>
                      <div className="d-flex flex-column justify-content-center mx-1">
                        <img src={UpArrow} alt="UpArrow" className="my-1" />
                        <img src={DropDown} alt="DropDown" />
                      </div>
                    </div>
                  </th>
                  <th className="width">
                    <div className="name-th">
                      <span>Chef name </span>
                      <div className="d-flex flex-column justify-content-center mx-1">
                        <img src={UpArrow} alt="UpArrow" className="my-1" />
                        <img src={DropDown} alt="DropDown" />
                      </div>
                    </div>
                  </th>
                  <th>Review</th>
                  <th className="review-width">Rating</th>
                  <th>Status</th>
                </tr>

                {Array_Data_1.map((item, i) => {
                  return (
                    <tr
                      className={
                        item["id"] % 2 === 0 ? "tableData-0" : "tableData-1"
                      }
                    >
                      <td>{item["id"]}</td>
                      <td>{item["name"]}</td>
                      <td>{item["Chefname"]}</td>
                      <td className="data-width">
                        Lorem ipsum dolor ed amet conse adipiscing magna aliqua
                        adipiscing magna...
                      </td>
                      <td className="review-width">
                        <img src={star1} alt="star1" />
                        <span className="mx-1 rating">3.9</span>
                      </td>

                      <td>
                        <button
                          className={
                            item["id"] % 2 === 0 ? "published2" : "published1"
                          }
                        >
                          Publish
                        </button>
                        <button className="unPublished">Unpublished</button>
                      </td>
                    </tr>
                  );
                })}
              </table>
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
    </div>
  );
}

export default TestimonialData;
