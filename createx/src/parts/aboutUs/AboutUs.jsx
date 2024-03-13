import React from "react";
import "./AboutUs.css"
import video from "../../images/aboutUs/video.svg"
import group1 from "../../images/aboutUs/Group1.svg"
import safe from "../../images/aboutUs/ic-hand.svg"
import group from "../../images/aboutUs/Group.svg"
import MyInput from "../../modules/MyInput/MyInput";
import MyOrangeButtom from "../../modules/MyOrangeButtom/MyOrangeButtom";
import icCon from "../../images/aboutUs/ic-construction.svg"
import vector0 from "../../images/aboutUs/Vector0.svg"
import vector1 from "../../images/aboutUs/Vector1.svg"
import vector2 from "../../images/aboutUs/Vector.svg"
import building1 from "../../images/aboutUs/building1.svg"
import building2 from "../../images/aboutUs/building2.svg"
import building3 from "../../images/aboutUs/building3.svg"
const AboutUs = () =>
{
    return(
      // Части страницы разделены одной пустой строкой
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
              <MyOrangeButtom style={{height: "52px", width: "224px"}}>{"SUBMIT REQUEST"}</MyOrangeButtom>
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

              <img src={group} alt="" srcset="" />
              <h2>Comfort</h2>
              <p> Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>

            </div>
        </div>
      </div>

      <div className="requestForm">
        <h1>Want to know more? Ask us a question:</h1>
        <form action="">

          <div className="inputForm">
            <p>Name</p>
            <MyInput style = {{height: '44px', width: '260px'}} children="Your name" />
          </div>

          <div className="inputForm">
            <p>Phone</p>
            <MyInput style = {{height: '44px', width: '260px'}} children="Your phone" />
          </div>

          <div className="inputForm">
            <p>Message</p>
            <MyInput style = {{height: '44px', width: '414px'}} children="Your message" />
          </div>

          <MyOrangeButtom style={{height: "44px", width: "104px", marginLeft: "25px"}}>{"SEND"}</MyOrangeButtom>

        </form>
      </div>
      
      <div className="ourServices">
        <h1>Our services</h1>
        <p>Createx Construction Bureau is a construction giant with a full range of construction services.</p>
        <div className="serviceCard">
          <div className="card">
            <img src={icCon} alt="" />
            <h2>Construction</h2>
          </div>

          <div className="card">
            <img src={vector0} alt="" />
            <h2>Project Development</h2>
          </div>

          <div className="card_back">
            <img src={vector1} alt="" />
            <h2>Interior Design</h2>
          </div>

          <div className="card">
            <img src={vector2} alt="" />
            <h2>Repairs</h2>
          </div>
        </div>
        <div className="ending">
          <h2>Learn more about our services</h2>
          <MyOrangeButtom style={{height: "52px", width: "207px", marginLeft: "25px"}}>{"VIEW SERVICES"}</MyOrangeButtom>
        </div>

      </div>

      <div className="browse_our_selected">
        <h1>Browse our selected projects and learn more about our work</h1>
        <div className="buildings">
          <div className="building">
            <img src={building1} alt="" />
            <h2>Red Finger Building</h2>
            <p>Business Centers</p>
          </div>
          <div className="building">
            <img src={building2} alt="" />
            <h2>Cubes Building</h2>
            <p>Business Centers</p>
          </div>
          <div className="building">
            <img src={building3} alt="" />
            <h2>Red Finger Building</h2>
            <p>Stores & Malls</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutUs;