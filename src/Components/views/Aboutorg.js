import React from "react";
import "../css/aboutorg.scss";
import ue from "../assest/ue.svg";
import pe from "../assest/pe.svg";
import tickmark from "../assest/tickmark.svg";
import adobestock_3 from "../assest/adobestock_3.webp";
import adobestock2 from "../assest/adobestock2.webp";
import playvedio from "../assest/playvedio.jpg";
const Aboutorg = () => {
  return (
    <div className="container-fluid dv-about-org">
   
<div className="container">
      <div className="row">
        <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-7 col-sm-7">
            <div className="hover-effect">
    <img src={adobestock2} alt="adobestock2" className="w-100 hover-image" />
  </div>
            </div>

            <div className="col-5 col-sm-5">
              <div className="card">
              
                  <h1 className="card-title">10k+</h1>

                  <p className="text">STUDENTS ACTIVE 
                  OUR <br></br>COURSE</p>
                </div>
            

              <div>
                <img
                  src={adobestock_3}
                  alt="adobestock_3"
                  className="w-100  "
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-style ">
          <div>
            <h6 className="h6">
              ABOUT OUR ORGANISATION
            </h6>
            <h1 className="font-style">
              Welcome to LearnSpan.
            </h1>

            <p className="text-align">
              We're not a platform; we're your path to success. Our mission is
              to empower students worldwide, bridging the gap between knowledge
              and ambition. Join us to unlock your full potential.
            </p>
          </div>

          <div className="row pb-5">
            <div className="col-12 col-sm-12 col-md-6">
            <div className="row">
                <div className="col-2 col-sm-2 col-lg-2">
                  <img src={ue} alt="ue" className="logo-1" />
                </div>
                <div className="col-10 col-sm-10 col-lg-10">
                  <div >
                  <h5><b>Undergraduate Education</b></h5>
                  </div>
                  <div >
                  <h6 className="text-design">With flexible courses</h6>
                  </div>
                </div>
                </div>
              
            </div>
            <div className="col-12 col-sm-12 col-md-6">
            <div className="row">
            <div className="col-2 col-sm-2 col-lg-2">
                  <img src={pe} alt="pe" className="logo-2" />
                </div>

                <div className="col-10 col-sm-10 col-lg-10">
                  <div>
                  <h5><b>Postgraduate Education</b></h5>
                  </div>
                  <div>
                  <h6 className="text-design">Study flexibly online</h6>
                  </div>
                  
                  
                </div>
              </div>
            </div>

          </div>



         <div className="row">
          <div className="col-4 col-sm-4 col-lg-4">
          <img src={playvedio} alt="playvedio" className="w-100" />
          </div>
          <div className="col-8 col-sm-8">
          <div className="row mt-3">
              <div className="col-1 col-sm-1 col-lg-1">
                  <img src={tickmark} alt="tickmark" className="bottom-img" />
                </div>
                <div className="col-11 col-sm-11 col-lg-11">
                  <p><b>
                    Get access to 4,000+ of our top courses
                    </b>
                  </p>
                </div>
              </div>
              <div className="row">
              <div className="col-1 col-sm-1 col-lg-1">
                  <img src={tickmark} alt="tickmark" className="bottom-img" />
                </div>
                <div className="col-11 col-sm-11 col-lg-11">
                  <p><b>Popular topics to learn now</b></p>
                </div>
              </div>
              <div className="row">
              <div className="col-1 col-sm-1 col-lg-1">
                  <img src={tickmark} alt="tickmark" className="bottom-img" />
                </div>
                <div className="col-11 col-sm-11 col-lg-11">
                  <p><b>Find the right instructor for you</b></p>
                </div>
              </div>
          </div>
         </div>
          

        
        

       
        </div>
      </div>

    </div>
    
    <div className="row">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style">
          <h2 className="panal-h2">3.9k+ </h2>
          <h5 className="dv-h5">
            Successfully <span className="span">Trained</span>
          </h5>
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style ">
        <h2 className="panal-h2">15k+</h2>
          <h5 className="dv-h5">
            Classes <span className="span">Completed</span>
          </h5>
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style">
        <h2 className="panal-h2">100.1k+</h2>
        <h5 className="dv-h5">
            Students <span className="span">Comunity</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Aboutorg;


