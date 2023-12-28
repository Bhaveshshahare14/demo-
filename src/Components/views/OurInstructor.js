import React from "react";

import prateeksir from "../assest/prateeksir.webp";
import smitamam from "../assest/smitamam.webp";
import avantimam from "../assest/avantimam.webp";
import yogisir from "../assest/yogisir.webp";
//import coursesgirl from "../assest/coursesgirl.png";

import "../css/ourinstructor.scss";

const OurInstructor = () => {
 

  return (
    <div className="container dv-our-instructor">
      <div className="heading">
        <h1 ><b>Meet Our Expert Instructor</b></h1>
      </div>

      <div className="row">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
        <img src={prateeksir} alt="prateeksir" className="image" />


          <div>
            <h5 className="h5">Prateek Ghumare</h5>
            <p className="para">Founder & CEO</p>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <img src={smitamam} alt="smitamam"className="image" />
          <div>
            <h5 className="h5">Smita Deshpande</h5>

            <p className="para">COO</p>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <img src={avantimam} alt="avantimam" className="image" />
          <div>
            <h5 className="h5">Avanti Jadhao</h5>

            <p className="para">BI Consultant</p>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3 ">
          <img src={yogisir} alt="yogisir" className="image" />
          <div>
            <h5 className="h5">Yogendra Waghale</h5>

            <p className="para">Project Manager</p>
          </div>
        </div>
      </div>
      
      {/* <div className="row">
        <div className="col-6 col-sm-6 col-lg-6 col-md-6">
<div className="card">
  <div className="row">
    <div className="col-6 col-sm-6 col-md-6">
      <div>
        POPULAR COURSES
      </div>
      <div>Get The Best Courses And Our Skills </div>
    </div>
    <div className="col-6 col-sm-6 col-md-6">
    <img src={coursesgirl} alt="yogisir" className="w-100" />
    </div>
  </div>
</div>
        </div>

        <div className="col-6 col-sm-6 col-lg-6 col-md-6">

</div>
      </div> */}


</div>
  );
};

export default OurInstructor;



