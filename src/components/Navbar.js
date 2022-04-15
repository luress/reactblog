import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {

    const token = localStorage.getItem('mytoken')

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to={token ? "/articles": "/"} className="navbar-brand text-style">BlogApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {token ?
                            <>
                                <li className="nav-item">
                                    <Link to={"/articles"} className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/add"} className="nav-link">Add Article</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={() => localStorage.clear()} to="" className="nav-link">Logout</Link>
                                </li>
                            </>
                            :
                            <>
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={"/register"} className="nav-link">Register</Link>
                            </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;