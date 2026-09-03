import React from "react";
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import footer1 from "../../assets/footer1.JPG";
import footer2 from "../../assets/footer2.JPG";
import footer3 from "../../assets/footer3.JPG";

const Footer=()=>{
    return(
        <>
        <div className="Footer-container">
            <div className="Footer-content">
                <div className="Footer-column">
                <h3>Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Why Choose Us</li>
                    <li>Team</li>
                    <li>Pricing & Plans</li>
                    <li>Contacts</li>
                    <li>Investors</li>
                </ul>
                </div>
                <div className="Footer-column">
                <h3>Services</h3>
                <ul>
                    <li>Web Design & Development</li>
                    <li>Why Choose Us</li>
                    <li>Specialized SEO Services</li>
                    <li>Specialized Social Services</li>
                    <li>Specialized Graphics Services</li>
                    <li>Investors</li>
                </ul>
                </div>
                <div className="Footer-column">
                <h3>RESOURCES</h3>
                <ul>
                    <li>Portfolio</li>
                    <li>Terms of Services</li>
                    <li>Help & FAQ</li>
                    <li>Contact Us</li>
                    <li>Site map</li>
                </ul>
                <button className="follow-button">Follow us</button>
                <div className="social-icons">
                    <a><CiFacebook /></a>
                    <a><FaInstagram /></a>
                    <a><FaLinkedin /></a>
                    <a><FaTwitter /></a>
                </div>
            </div>
        </div>
        <div className="countries">
            <div className="country">
             <img src={footer1}  alt="" ></img> 
             <h3>USA :</h3>
             <p>1st Avenue, SW, Hickory,NC, USA</p>
             <p>Email: info@thedigitalimpacts.com</p>
            </div>
            <div className="country">
             <img src={footer2}  alt="" ></img> 
             <h3>UK :</h3>
             <p>Oldham Greater Manchester, United Kingdom</p>
             <p>Email: info@thedigitalimpacts.com</p>
            </div>
            <div className="country">
             <img src={footer3}  alt="" ></img> 
             <h3>Canada :</h3>
             <p>92 Avenue, Surrey, BC, Canada</p>
             <p>Email: info@thedigitalimpacts.com</p>
            </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2022 The Digital Impacts. All rights reserved</p>
            </div>
        </div>

        </>
    )
}

export default Footer