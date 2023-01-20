import React from 'react'
import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light mb-4">
                <div className="container">
                    <Link to="/" className="fs-3 ubuntu fw-bold navbar-brand">Ricky & Morty <span className="text-primary">WiKi</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='fas fa-bars open fw-bold text-dark'></i>
                        <i className='fas fa-times close fw-bold text-dark'></i>
                    </button>
                    <style jsx="true">
                        {
                            `
                                button[aria-expanded="false"] > .close{
                                    display:none;
                                }
                                button[aria-expanded="true"] > .open{
                                    display:none;
                                }
                            `
                        }
                    </style>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav fs-5">
                            <NavLink activeclassname="active" to="/" className="nav-link" aria-current="page">Characters</NavLink>
                            <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
                            <NavLink to="/location" className="nav-link">Location</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>  
    )
}

export default Navbar
