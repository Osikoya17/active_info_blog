import React, { useState } from "react";
import "./Signup.css";
import background from "../../assets/Background.jpg";
import logo from "../../assets/A-logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function Signup() {
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [verifiedEmail, setverifiedEmail] = useState("");
  let regexEmailverificationPattern =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const Register = async () => {
    let Nemail = email.trim();
    let Nusername = username.trim();
    let Npassword = password.trim();

    if (!Nemail || !Nusername || !Npassword) {
      return swal("oppos!", "Kindly fill in the neccessary", "info");
    }

    if (!regexEmailverificationPattern.test(Nemail)) {
      return swal("You have entered an invalid email address!", "warning");
    } else {
      verifiedEmail = Nemail;

      const User = {
        verifiedEmail,
        Nusername,
        Npassword,
      };
      console.log(User);
      try {
        const url = "";
        const response = await axios.post(url, User);
        console.log(response);
        // console.log(response.data);
        // console.log(request.status);
        // console.log(request.statusText);
      } catch (error) {
        console.log(error);
      }
    }

    setEmail(" ");
    setUsername(" ");
    setPassword(" ");
  };

  // functon for create post

  const [article, setArticle] = useState("");
  const [file, setFile] = useState("");


  function handleFile(ev) {
       console.log(ev.target.files[0]);
       setFile(ev.target.files[0])

  }

  const Handlesubmit = async () => {
    const url = ""

    const formData = new FormData()

    formData.set("image", file)
    formData.set("article", article)

    try {
      const response = await axios.post(url, formData)

      
    } catch (error) {
       console.log(error);
    }
  }

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
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control innpt"
                id="floatingInput1"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput1">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control innpt"
                id="floatingInput"
                placeholder="name@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control innpt"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="w-100 mt-4">
              <button
                type="button"
                className="btn btn-outline-dark w-100  signupbtn"
                style={{ height: "6vh" }}
                onClick={Register}
              >
                SUBMIT
              </button>
            </div>
            <div className="alred mt-4 text-dark">
              {" "}
              Already have an account?{" "}
              <span>
                <Link to={"/login"}>SIGN IN</Link>
              </span>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {" "}
                Create post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FOR CREATE POST */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg  ">
          <div className="modal-content shadow createmodal">
            <div className="modal-header">
              <h5 className="modal-title mb-0" id="exampleModalLabel">
                Create a post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-dark ms-4 fs-5 fw-bolder mt-0">
                Habeebllah Jimoh
              </div>
              <div className="w-50 mt-2">
                <select
                  className="form-select select-div rounded-pill"
                  aria-label="Default select example"
                >
                  <option selected>Categories</option>
                  <option value="Politics">Politics</option>
                  <option value="Games">Games</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Tech">Tech</option>
                  <option value="Religion">Religion</option>
                  <option value="Finances">Finances</option>
                  <option value="Education">Education</option>
                  <option value="Sport">Sport</option>
                  <option value="Blogging">Blogging</option>
                  <option value="Fictions">Fictions</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </div>

              <textarea
                type="text"
                placeholder="What did you want to talk about?"
                className="w-100 border border-1 rounded-2 my-3 outli"
                style={{ height: "20vh" }}
                onChange={e => setArticle(e.target.value)}
              >
                {" "}
              </textarea>
              <div className="container row d-flex justify-content-between my-1">
                <div className="row col-md-4 d-flex justify-content-between">
                  <label htmlFor="file" className="col-md-3">
                    <i className="btn btn-outline-dark  border border-0 fa-solid fa-image fs-5 ">
                      {" "}
                    </i>{" "}
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="image/png, image/gif, image/jpeg"
                    style={{ display: "none" }}
                    onChange={ev => handleFile(ev)}
                  />
                  <label htmlFor="file" className="col-md-3">
                    <i className="btn btn-outline-dark  border border-0 fa-solid fa-video  fs-5 ">
                      {" "}
                    </i>{" "}
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="video/mp4,video/x-m4v,video/*"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="file" className="col-md-3">
                    <i className="btn btn-outline-dark  border border-0 fa-solid fa-file  fs-5 ">
                      {" "}
                    </i>{" "}
                  </label>
                  <input
                    type="file"
                    name="upload"
                    accept="application/pdf,application/vnd.ms-excel"
                    id="file"
                    style={{ display: "none" }}
                  />
                </div>
                <button className="btn btn-outline-dark col-md-2 fs-5 fw-bold" onClick={Handlesubmit}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
