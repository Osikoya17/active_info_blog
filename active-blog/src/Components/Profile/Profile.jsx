import { useState } from "react"
import UserLayout from "../../Layout/UserLayout"
import "./Profile.css"
export default function Profile() {
    const[file,setFile] =useState()
    const onChange=(e)=>{
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    } 
  return (
    <UserLayout>
    <main className="main">
        <aside>
            <div>
                {file && <img  src={URL.createObjectURL(file)} />}
                {!file && <img />}
                <div>
                <label htmlFor="photo"><i className="fa-solid fa-camera"></i></label>
                <input type="file" id="photo" onChange={e=>onChange(e)}/>
                </div>
            </div>
            <h2>Lorem ipsum</h2>
            <div className="qwert"><h6><i className="fa-solid fa-house"></i>Account</h6></div>
            <div className="qwert"><h6><i className="fa-solid fa-key"></i>Password</h6></div>
            <div className="qwert"><h6><i className="fa-solid fa-fingerprint"></i>Security</h6></div>
            <div className="qwert"><h6><i className="fa-solid fa-bell"></i>Notification</h6></div>
        </aside>
        <section>
            <h1>Account Settings</h1>
            <form className="form">
                <div>
                    <h5>First Name</h5>
                    <input type="text"/>
                </div>
                <div>
                    <h5>Last Name</h5>
                    <input type="text"/>
                </div>
            </form>
            <form className="form">
                <div>
                    <h5>Email</h5>
                    <input type="text" disabled/>
                </div>
                <div>
                    <h5>Phone Number</h5>
                    <input type="text" value={"08057575759"} disabled />
                </div>
            </form>
            <form className="form1">
                <div><h5>Bio</h5></div>
                <textarea></textarea>
                <div>
                <button className="btn1">Update</button>
                <button className="btn2">Cancel</button>
                </div>
            </form>
          
        </section>
    </main>
    </UserLayout>
    
  )
}
