import React from "react";
import './Navbar.css'
import logo from "../../assets/logo.jpg";

const Navbar =()=>{
    return(
        <>
       <nav className="Navbar">
       <img src={logo} alt="" width={90} height={60} />
        <ul className="menu">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Portfolio</li>
        </ul>
        <button className="btn">Contact us</button>
       </nav>
        </>
    )
}

export default Navbar