import React from "react";
import './Services.css'
import { MdOutlineSettings } from "react-icons/md";
import { SiDevelopmentcontainers } from "react-icons/si";
import { AiFillAppstore } from "react-icons/ai";
import { MdContentPaste } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import service1 from "../../assets/service1.jpg"
import service2 from "../../assets/service2.jpg"
import service3 from "../../assets/service3.jpg"
import service4 from "../../assets/service4.jpg"
import service5 from "../../assets/service5.jpg"
import service6 from "../../assets/service6.jpg"




const Services =() =>{
    return(
        <>
        <div className="Services-heading">
            <h2>
               We{' '}
               <span>Provide</span>{' '}
               The Best{' '}
               <br/>
               Services With{' '}
               <span>Our</span>
               <br/>
               <span>Developers</span>
            </h2>
        </div>

        <div className="Services-cards">
         <card className="card-1">
            <h2>Digital Marketing</h2>
            <h3><MdOutlineSettings /></h3>
            <p className="p-tag">The{' '}
                <span className="p--tag">Digital Impacts </span>
                have compiled a list of the
                <br/>
                best digital marketing companies
                <br/> in the world.
            </p>
         </card>
         <card className="card-1">
            <h2>Web Development</h2>
            <h3><SiDevelopmentcontainers /></h3>
            <p className="p-tag">
               Web design services comprise the process of user interface{'  '}
               <span>(UI) </span>
               and user experience{'  '}
               <span>(UX)</span>{'  '}
               design of any web-based solution.
            </p>
         </card>
         <card className="card-1">
            <h2>Graphic Designing</h2>
            <h3><AiFillAppstore /></h3>
            <p className="p-tag">
                Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design
            </p>
         </card>
        </div>
        <div className="Services-cards">
            <card className="card-1">
                <h2>Content Writter</h2>
                <h3> <MdContentPaste /></h3>
                <p className="p-tag">
                    That {'  '}
                    <span className="p--tag">content</span>{'  '}
                    can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media
                </p>
            </card>
            <card className="card-1">
               <h2>SEO</h2>
               <h3><GiThreeLeaves /></h3>
               <p className="p-tag">
                Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search querie.
               </p>
            </card>
        </div>
        <div className="services-heading">
            Industries We
            <br/>
        <span>Work With</span>
        <p className="services-heading">
            We work as a technology partner for various industries
            <br/>
            Our expertise can be applied to the specific demands
            <br/>
            and nuances in your industry
        </p>
        </div>
        <div className="service-industry">
            <div className="service-img">
                <img src={service1} alt="" width={200} height={200}></img>
                <img src={service2} alt="" width={200} height={200}></img>
                <img src={service3} alt="" width={200} height={200}></img>
            </div>
            </div>
           <div className="service-industry">
            <div className="service-img">
            <img src={service4} alt="" width={200} height={200} ></img>
            <img src={service5} alt="" width={200} height={200}></img>
            <img src={service6} alt="" width={200} height={200}></img>
            </div>
            </div>  
            
        </>
    )
}

export default Services;