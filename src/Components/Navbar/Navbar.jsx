import React from "react";
import './Navbar.css'
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <>
       <nav className="Navbar">
       <img src={logo} alt="" width={90} height={60} />
        <ul className="menu">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
        </ul>
        <button className="btn">Contact us</button>
       </nav>
        </>
    )
}

export default Navbar