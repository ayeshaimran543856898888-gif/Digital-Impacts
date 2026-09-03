import React from "react";
import './Contact.css'
import Map from "../../assets/map.JPG";

const Contact=()=>{
    return(
        <>
        <div className="contact-heading">
          Feel Free To{' '}
          <span>Contact</span>{'  '}
          Us By Submitting
           <br/>
           <span>Form Or Contact Live Support</span>
        </div>
        <div className="form">
          <div className="location">
           <img src={Map} alt="" width={600} height={400}></img>
          </div>
          <card className="form-card" width="">
            <label for="name">Name</label>
            <br></br>
            <input type="text" id="Name" name="name" placeholder="Your name" required></input>
            <br></br>
            <label for="Surname">SurName</label>
            <br></br>
            <input type="text" id="SurName" name="Surname" placeholder="Your Surname" required></input>
            <br></br>
            <label for="Email">Email</label>
            <br></br>
            <input type="text" id="Email" name="Email" placeholder="Your Email address" required></input>
            <br></br>
            <label for="Contact">Contact us</label>
            <br></br>
            <input type="text" id="Contact" name="Contact" placeholder="123-456-789" required></input>
            <br></br>
            <button className="contact-btn">Submit</button>
          </card>
        </div>
        <div className="contact-support">
          <div className="contact-line">
          </div>
          <div className="contact-support-heading">
            <h1>Let’s Work Together</h1>
            <p>Driving your business forward with strong marketing strategies<br></br>
              Get a free consultation to make this happen!</p>
            <button className="support-contact-btn">Connect</button>
          </div>
        </div>
        </>
    )
}

export default Contact;