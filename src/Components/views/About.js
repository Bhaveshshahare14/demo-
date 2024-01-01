import React from "react"; //Import React
import frame from "../assest/frame.png"; //Import  frame image
import "../css/about.scss"; //Import About.scss
import { Link } from "react-router-dom"; //Import Link


function About() {
  return (
    <div className="container dv-about-us">
     
           
      
            <div>
              <h1 className="heading pb-2">Know More About Us</h1>
            </div>
        
      <div className="row">

      <div className="col-12 ">
      <h4 className="h4 d-lg-none">
              Empowering Minds,Enriching Futures: Discover the Story Behind Our
              Educational Journey!
            </h4>
      </div>
      
         
      
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-auto">
          <div className="w-100">
            <img src={frame} alt="React Logo" className="img-fluid " />
          </div>
        </div>
       
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-auto">
          <div>
           
             <h4 className="h4 d-none ">
              Empowering Minds,Enriching Futures: Discover the Story Behind Our
              Educational Journey!
            </h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              explicabo necessitatibus nihil, iusto quo?Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Corrupti explicabo
              necessitatibus nihil, iusto quo?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Corrupti explicabo necessitatibus
              nihil, iusto quo?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Corrupti explicabo necessitatibus nihil, iusto
              quo?
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              explicabo necessitatibus nihil, iusto quo?Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Corrupti explicabo
              necessitatibus nihil, iusto quo?
            </p>


            <div className="btn-style">
              <Link to="/">
               
                <button type="button" className="btn ">
                  LEARN MORE
                </button>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;