import './Navbar.css'
import { Link } from "react-router-dom"
import logo from '../../assets/A-logo.png'
import Bars from '../../assets/search-icon.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  px-5 shadow-sm">
            <a className="navbar-brand fs-5  fw-bold logo" href="#"><img className='w-100' src={logo} alt="" /></a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">⩸</button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0 ms-4  d-flex w-50 justify-content-evenly fw-semibold">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Videos</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2 search" type="search" placeholder="Search" />
                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit"><img src={Bars} alt="" /></button>
                </form>

                <Link to={'/signup'} className="navbar-brand btn btn-light shadow-sm ms-4" >Register</Link>

                <button className="navbar-brand btn btn-light shadow-sm ms-4" >Create Post</button>


            </div>
        </nav>
    );
}

export default Navbar;