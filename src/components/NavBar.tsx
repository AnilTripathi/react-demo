import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold text-white" to="/">
                <i className="bi bi-building me-2"></i>
                Employee Portal
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">
                            <i className="bi bi-house-door me-1"></i>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">
                            <i className="bi bi-info-circle me-1"></i>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/user/1">
                            <i className="bi bi-person me-1"></i>
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-outline-light ms-2 px-3" to="/contact">
                            <i className="bi bi-envelope me-1"></i>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar