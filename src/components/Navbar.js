import React, {useContext} from 'react';
import {Link, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import UserContext from "../context/User/UserContext";

const Navbar = (props) => {
    const context = useContext(UserContext);
    let location = useLocation().pathname;
    const handleLogout = async () => {
        await context.logout();
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.text}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {localStorage.getItem("auth-token") &&
                            <li className="nav-item">
                                <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page"
                                      to="/">Home</Link>
                            </li>}
                            {localStorage.getItem("auth-token") &&
                            <li className="nav-item">
                                <Link className={`nav-link ${location === "/about" ? "active" : ""}`}
                                      to="/about">About</Link>
                            </li>}
                        </ul>
                        <div>
                            {!localStorage.getItem("auth-token") &&
                            <div>
                                <Link to="/login" className='btn btn-primary mx-1 btn-sm'>Login</Link>
                                <Link to="/signup" className='btn btn-primary mx-1 btn-sm'>Signup</Link>
                            </div>}
                            {localStorage.getItem("auth-token") && <button type="button" onClick={handleLogout}
                                                     className='btn btn-primary mx-1 btn-sm'>Logout</button>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
Navbar.propTypes = {
    text: PropTypes.string
}
Navbar.defaultProps = {
    text: 'Navbar'
}
export default Navbar;
