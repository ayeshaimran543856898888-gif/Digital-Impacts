import React from "react";
import './Portfolio.css'
import { MdWeb } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import portfolio from "../../assets/portfolio1.JPG";
import portfolio2 from "../../assets/portfolio2.JPG";
import portfolio3 from "../../assets/portfolio3.JPG";
import portfolio4 from "../../assets/portfolio4.JPG";



const Portfolio=()=>{
    return(
        <>
        <div className="Portfolio-heading">
          <h1>Projects We've Deliverd</h1>
        </div>
        <div className="Portfolio-content">
            <p>Over the past 10 years, we have designed and built a
                wide range of high-quality products from scratch.
                Our team has finished various web and mobile apps related to various spheres
                 including e-learning, healthcare, e-commerce, advertising, augmented reality, action sports, finance and sharing economy.</p>
        </div>
        <div className="portfolio-container">
            <div className="portfolio-container1">
                <p className="portfolio-container-p">INDUSTRY</p>
                <h1 className="portfolio-container-h2">REVIVE</h1>
                <p className="portfolio-container--p">Revive Beauty Salon &<br/>
                     Institute</p>
                <div className="web-icon">
                    <h1><MdWeb /></h1>
                    <h2>WEB DEVELOPMENT</h2>
                </div>
                <div className="web-icon">
                    <h1><MdWeb /></h1>
                    <h2>QUALITY ASSURANCE</h2>
                </div>
                <div className="web-icon-1">
                    <h1 ><FaReact /></h1>
                    <h2><FaAws /></h2>
                </div>
            </div>
            <div className="portfolio-container-img">
                <a href="https://revivesalon.pk/">
                <img src={portfolio}alt="" width={500} height={400}></img>
                </a>
            </div>
        </div>
        <div className="portfolio-container">
            <div className="portfolio-container-img1">
                <a href="https://voeuxcosmetics.com/">
                <img src={portfolio2}alt="" width={500} height={400}></img>
                </a>
            </div>
            <div className="portfolio-container1">
                <p className="portfolio-container--p">INDUSTRY</p>
                <h1 className="portfolio-container--h2">Voeux</h1>
                <p className="portfolio-container---p">Natural Skin Care</p>
                <div className="web--icon">
                    <h1><MdWeb /></h1>
                    <h2>WEB DEVELOPMENT</h2>
                </div>
                <div className="web--icon">
                    <h1><MdWeb /></h1>
                    <h2>QUALITY ASSURANCE</h2>
                </div>
                <div className="web--icon-1">
                    <h1 ><FaReact /></h1>
                    <h2><FaAws /></h2>
                </div>
            </div>
        </div>
        <div className="portfolio-container">
            <div className="portfolio-container1">
                <p className="portfolio-container-p">INDUSTRY</p>
                <h1 className="portfolio-container-h2">KINGZ</h1>
                <p className="portfolio-container--p">Ecommerce Website</p>
                <div className="web-icon">
                    <h1><MdWeb /></h1>
                    <h2>WEB DEVELOPMENT</h2>
                </div>
                <div className="web-icon">
                    <h1><MdWeb /></h1>
                    <h2>QUALITY ASSURANCE</h2>
                </div>
                <div className="web-icon-1">
                    <h1 ><FaReact /></h1>
                    <h2><FaAws /></h2>
                </div>
            </div>
            <div className="portfolio-container-img">
                <a href="https://www.kingz.com/">
                <img src={portfolio3}alt="" width={500} height={400}></img>
                </a>
            </div>
        </div>
        <div className="portfolio-container">
            <a href="https://unifresh.com.au/">
              <img src={portfolio4}alt="" width={500} height={400}></img>   
            </a>
            <div className="portfolio-container-img1">
            </div>
            <div className="portfolio-container1">
                <p className="portfolio-container--p">INDUSTRY</p>
                <h1 className="portfolio-container--h2">Unifresh</h1>
                <p className="portfolio-container---p">Fruit and Vegetable Retail Store</p>
                <div className="web--icon">
                    <h1><MdWeb /></h1>
                    <h2>WEB DEVELOPMENT</h2>
                </div>
                <div className="web--icon">
                    <h1><MdWeb /></h1>
                    <h2>QUALITY ASSURANCE</h2>
                </div>
                <div className="web--icon-1">
                    <h1 ><FaReact /></h1>
                    <h2><FaAws /></h2>
                </div>
            </div>
            </div>

        </>
    )
}

export default Portfolio;
