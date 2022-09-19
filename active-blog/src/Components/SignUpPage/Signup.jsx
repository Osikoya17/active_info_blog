import React from "react";
import "./Signup.css";
import background from "../../assets/Background.jpg";
import logo from "../../assets/A-logo.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="mainn container-fluid">
      <div className="sub-main shadow">
        <div
          className="side-one"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div style={{ width: "90%" }}>
            <div className="logoo">
              <img
                src={logo}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p className="text-dark pt-4">
              We update you with the latest information that keeps you connected
              always.
            </p>
          </div>
        </div>
        <div className="side-two">
          <div className="sidetwo-main">
            <div className="sign-up text-dark">SIGN UP</div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control innpt"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control innpt"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control innpt"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="w-100 mt-4">
              <button
                type="button"
                class="btn btn-outline-dark w-100  signupbtn"
                style={{ height: "6vh" }}
              >
                SUBMIT
              </button>
            </div>
            <div className="alred mt-4 text-dark">
              {" "}
              Already have an account? <span><Link to={'/login'}>SIGN IN</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
