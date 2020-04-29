import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  shadow-sm sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="btn btn-outline-dark mr-3">Orders Chart</Link>
                    <Link className="btn btn-outline-dark mr-3" to="/table">Employee Table</Link>
                </div>
            </div>
        </nav>
    )
}
