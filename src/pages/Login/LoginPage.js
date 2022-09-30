import React from "react";
import "./login.scss";

import { useForm } from "react-hook-form";
import { useNavigate, Link, NavLink } from "react-router-dom";
import RightsideImge from "../../assets/RightsideImge.svg";
import eyeIcon from "../../assets/Icons/eyeIcon.svg";

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  let navigate = useNavigate();

  const onSubmit = async (data) => {

    let Username = data["Username"];


    if (Username === "admin123") {
      if (data["UserPassword"] === "admin123") {
        let path = "/userdata";

        setTimeout(() => {
          navigate(path);
        }, 2000);
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Please Enter correct username");
    }
  };

  return (
    <div className="main-container">
      <div className="left-side">
        <img src={RightsideImge} alt="RightsideImge" />
      </div>

      <div className="right-side">
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <h1 className="heading">The Chef Lane</h1>
          <div className="input-container">
            <label>Username</label>
            <br />
            <input
              type="text"
              name="Username"
              placeholder="Type Your UserName..."
              {...register("Username", {
                required: "true",
              })}
            />
            <p className="error-text">
              {errors.Username?.type === "required" && "Username is required"}
            </p>
          </div>

          <div className="input-container">
            <label>Password</label>
            <div class="input-icons">
              <i class="fa fa-key icon"></i>
              <img src={eyeIcon} alt="eyeIcon" className="icon" />
              <input
                class="input-field"
                type="password"
                name="UserPassword"
                placeholder="Type Your Password..."
                {...register("UserPassword", {
                  required: "You must specify a password",
                  minLength: {
                    value: 4,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <p className="error-text">
                {errors.UserPassword?.type === "required" &&
                  "UserPassword is required"}
              </p>
            </div>
          </div>
          <button className="button-el">sign In</button>
          <p className="Forgot">Forgot Password?</p>
        </form>
      </div>
    </div>
  );
}
