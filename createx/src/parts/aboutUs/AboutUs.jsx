import React from "react";
import "./AboutUs.css"
import video from "../../images/aboutUs/video.svg"
import group1 from "../../images/aboutUs/Group1.svg"
import safe from "../../images/aboutUs/ic-hand.svg"
import group from "../../images/aboutUs/Group.svg"
const AboutUs = () =>
{
    return(
    <div className="container">
      <div className="constructions">
          <div className="text">
            <span className="companyName">CREATE
              <span className='x'>X</span> 
              <br></br>CONSTRUCTIONS
            </span>
            <span className='latinText'>Cras ultrices leo vitae non viverra. Fringilla nisi quisque<br></br> consequat, dignissim vitae proin ipsum sed. Pellentesque nec<br></br> turpis purus eget pellentesque integer ipsum elementum felis.</span>
          </div>
          <div className="learn_and_submit">
              <button className="learn_more">LEARN MORE ABOUT US</button>
              <button className="submit_request">SUBMIT REQUEST</button>
          </div>
          <div className="pages">
            <a href="#">
              01
            </a>
            <a href="#">
              02
            </a>
            <a href="#">
              03
            </a>
            <a href="#">
              04
            </a>
          </div>
      </div>
      <div className="video">
        <h1>
          We are Createx Construction Bureau
        </h1>
        <span>We are rightfully considered to be the best construction company in the USA.</span>
        <img src={video} alt="" />
      </div>
      <div className="values">
        <h1>
          Our core values
        </h1>
        <span>Our mission is to set the highest standards for construction sphere.</span>
        <div className="advantages">
          <div className="advantage">
            <img src={group1} alt="" srcset="" />
            <h2>Quality</h2>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>  
          </div>
          
          <div className="advantage">
          <img src={safe} alt="" srcset="" />
            <h2>Safety</h2>
            <p> Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>
          </div>
          
          <div className="advantage">
          <img src={safe} alt="" srcset="" />
            <h2>Comfort</h2>
            <p> Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
          </div>
      </div>
      </div>
      
    </div>
    )
}

export default AboutUs;