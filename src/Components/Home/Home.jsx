import React from "react";
import './Home.css'
import pic from "../../assets/digipic1.jpg";
import Services from "../Services/Services";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
const Home =() =>{
    return(
        <>
        <div className="body">
          <div className="body-img-container">
            <img src={pic} alt="" width={550} height={500} />
            <div className="content">
              <h1>We are full Services<br/>
              </h1>
              <span className="content1">Digital Marketing Agency</span>
              <h2>Welcome to the Digital Impacts</h2>
              <div className="line"></div>
              <span className="content2">We partner with our clients with a team of professionals, we are able to provide
                <br/>
                the best on our side. We strive to be leaders in digital marketing services worldwide
                <br/>
                by revolutionizing the industry and setting new standards of professionalism and success.
              </span>
              <div className="message-btn">
                <button>Message us now</button>
              </div>
            </div>
          </div>
        </div>



        <Services/>
        <About/>
        <Portfolio/>
        </>
    )
}

export default Home