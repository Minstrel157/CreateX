import React, { useEffect, useState } from "react";
import "./AboutUs.css"
import MyInput from "../../modules/MyInput/MyInput";
import MyOrangeButtom from "../../modules/MyOrangeButtom/MyOrangeButtom";
import images from "../../images/importImages";
const AboutUs = () =>
{
    let clients = [
      ["Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.", "Shawn Edwards", "SEO, Nestle"],
      ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed euismod tellus eu erat posuere. Sed interdum gravida ligula. Vivamus gravida consectetur sagittis.", "Hannah Smith", "Programmer, Yandex"],
      ["Vivamus sed velit id libero luctus blandit. Maecenas in fermentum dolor. Suspendisse potenti. Integer cursus, dui id pulvinar aliquet, sem lorem tempus nunc, a lacinia nibh nulla nec justo.", "James Johnson", "Designer, Military forses of Poland"],
      ["Sed volutpat ornare quam, nec fermentum nulla. Sed feugiat nunc eget felis suscipit congue. Vivamus ullamcorper velit vel lacus laoreet, nec viverra ligula facilisis.", "Olivia Williams", "Maneger, Pyaterochka"]
    ]
    const[client, setClient] = useState(0)
    const nextClients = () =>
    {
      if(client+1 === clients.length)
        {
          setClient(client=>client=0)
        }
      else{setClient(client+1)}
    }
    const returnClients = () =>
    {
      if(client-1 === -1)
      {
        setClient(client=>client=clients.length-1)
      }
      else{setClient(client-1)}
    }
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
            <a href="#">01</a>
            <a href="#">02</a>
            <a href="#">03</a>
            <a href="#">04</a>
          </div>

      </div>

      <div className="video">
        <h1>
          We are Createx Construction Bureau
        </h1>
        <span>We are rightfully considered to be the best construction company in the USA.</span>
        <img src={images.video} alt="" />
      </div>

      <div className="values">
          <h1>
            Our core values
          </h1>
          <span>Our mission is to set the highest standards for construction sphere.</span>
          <div className="advantages">
            <div className="advantage">

              <img src={images.group1} alt="" srcset="" />
              <h2>Quality</h2>
              <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>  

            </div>
            
            <div className="advantage">

              <img src={images.safe} alt="" srcset="" />
              <h2>Safety</h2>
              <p> Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>

            </div>
            
            <div className="advantage">

              <img src={images.group} alt="" srcset="" />
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
            <img src={images.icCon} alt="" />
            <h2>Construction</h2>
          </div>

          <div className="card">
            <img src={images.vector0} alt="" />
            <h2>Project Development</h2>
          </div>

          <div className="card_back">
            <img src={images.vector1} alt="" />
            <h2>Interior Design</h2>
          </div>

          <div className="card">
            <img src={images.vector2} alt="" />
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
            <img src={images.building1} alt="" />
            <h2>Red Finger Building</h2>
            <p>Business Centers</p>
          </div>

          <div className="building">
            <img src={images.building2} alt="" />
            <h2>Cubes Building</h2>
            <p>Business Centers</p>
            <button>View Project</button>
          </div>

          <div className="building">
            <img src={images.building3} alt="" />
            <h2>Red Finger Building</h2>
            <p>Stores & Malls</p>
          </div>

        </div>

        <div className="browse_our_selected_final">
          <h2>Explore all our works</h2>
          <MyOrangeButtom style={{height: "52px", width: "224px", fontSize: "16px", fontWeight: "700" }}>{"View portfolio"}</MyOrangeButtom>
        </div>
      </div>

      <div className="supportedBy">

        <h1>Supported by 12+ partners</h1>

        <div className="supportedLogo">
          <img src={images.clientLogo1} alt="" />
          <img src={images.clientLogo2} alt="" />
          <img src={images.clientLogo3} alt="" />
          <img src={images.clientLogo4} alt="" />
          <img src={images.clientLogo5} alt="" />
          <img src={images.clientLogo6} alt="" />
        </div>

        <div className="clientProfile">

          <h1>What our clients are saying</h1>

          <div className="testimonials-carousel">

            <img src={images.profileImg} alt="" />
            <p>{clients[client][0]}</p>

            <div className="changeDescriptions">

              <div className="nameAndPosition">
                <span className="clientName">{clients[client][1]}</span>
                <p>{clients[client][2]}</p>
              </div>

              <div className="descriptionButtons">
                <button><img src={images.leftButton} alt="" onClick={returnClients} /></button>
                <button><img src={images.rightButton} alt="" srcset="" onClick={nextClients} /></button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="someFacts">
        <img src={images.transparent} alt="" />

        <div className="someFacts_andFigures">
          <h1>Some facts and figures</h1>
          <div className="figureAndText">
            <div className="figure__orange">

            </div>
          </div>

          <div className="figureAndText">
            <div className="figure__pink">

            </div>
          </div>
          <div className="figureAndText">
            <div className="figure__blue">

            </div>
          </div>
          <div className="figureAndText">
            <div className="figure__green">
              
            </div>
          </div>
        </div>

      </div>
      
    </div>
    )
}

export default AboutUs;