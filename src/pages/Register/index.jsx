import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="box">
        <div className="form">
          <h2>Register</h2>
          <div className="inputBox">
            <input type="text" required />
            <span>nickname</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required />
            <span>email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="text" required />
            <span>username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required />
            <span>password</span>
            <i></i>
          </div>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
          </div>
          <p className="submit">Register</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
