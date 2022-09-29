import React, { useState } from 'react';
import './Signin.css'
import axios from 'axios';
import { Link } from "react-router-dom";
import background from "../../assets/Background.jpg";
import logo from "../../assets/A-logo.png";


function SignIn() {
     

      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("")
      let [enterEmail, setenterEmail] = useState("")
      let [enterPassword, setenterPassword] = useState("")
      let [error, seterror] = useState(false)
      let [errorMessage, seterrorMessage] = useState("")

    const HandleLogin = async() => {

       email = enterEmail.trim()
      password = enterPassword.trim()

      if (!email || !password ) {
        return swal("oppos!", "Kindly fill in the neccessary", "info");
        
      }
      else{
        const User = {
          email,
          password
         }

         console.log(User);
         try {
          const url = "https://active-info.onrender.com/login"
          const response = await axios.post(url, User);
          console.log(response);
            console.log(response.data);
            console.log(response.data.message);
            
         } catch (error) {
          seterror(true)
            console.log(error);
            console.log(error.response.data);
            seterrorMessage(error.response.data.message) 
           
         }
      }
       
      setEmail("")
      setPassword("")

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
            <div className="sign-up text-dark">SIGN IN</div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control innpt"
                id="floatingInput"
                placeholder="name@example.com"
                value={enterEmail}
                onChange={e => setenterEmail(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <span>{error?errorMessage : '' }</span>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control innpt"
                id="floatingInput1"
                placeholder="name@example.com"
                value={enterPassword}
                onChange={e => setenterPassword(e.target.value)}
              />
              <label for="floatingInput1">Password</label>
            </div>
            {/* <div className="form-floating">
                  <input
                    type="password"
                    className="form-control innpt"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div> */}
            <div className="w-100 mt-4">
              <button
                type="button"
                className="btn btn-outline-dark w-100  signupbtn"
                style={{ height: "6vh" }}
                onClick={HandleLogin}
              >
                SIGN IN
              </button>
            </div>
            <div className="alred mt-4 text-dark">
              {" "}
              Create New Account <span><Link to={'/signup'}>SIGN UP</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default SignIn;