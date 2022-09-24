import React from 'react';
import './Signin.css'
import { Link } from "react-router-dom";
import background from "../../assets/Background.jpg";
import logo from "../../assets/A-logo.png";

function SignIn() {
     

    //   let [email, setEmail] = useState("");
    //   let [password, setPassword] = useState("")

    // const HandleLogin = async() => {

    //   let Nemail = email.trim()
    //   let Npassword = password.trim()

    //   if (!Nemail || !Npassword ) {
    //     return swal("oppos!", "Kindly fill in the neccessary", "info");
        
    //   }
    //   else{
    //     const User = {
    //       verifiedEmail,
    //       Npassword
    //      }

    //      console.log(User);
    //      try {
          
    //      } catch (error) {
          
    //      }
    //   }
       
    //   setEmail(" ")
    //   setPassword(" ")

    // }

    
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
                // value={email}
                // onChange={e => setEmail(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control innpt"
                id="floatingInput"
                placeholder="name@example.com"
                // value={password}
                // onChange={e => setPassword(e.target.value)}
              />
              <label for="floatingInput">Password</label>
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
                // onClick={HandleLogin}
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