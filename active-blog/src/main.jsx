import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Signup from './Components/SignUpPage/Signup'
import SignIn from './Components/SignInPage/SignIn'
import Profile from './Components/Profile/Profile'

// import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import BlogDetails from './Components/BlogDetails/BlogDetails'


const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/login", element: <SignIn /> },
    { path: "/signup", element: <Signup /> },
    { path: "/details:uid", element: <BlogDetails /> },
    {path:"/profile",element: <Profile/> }

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
