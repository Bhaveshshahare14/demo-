import React from "react";
import { Link } from "react-router-dom";
import important from "../assest/important.png";
import "../css/instructor.scss";
import tickmark_badge from "../assest/tickmark_badge.png";

const Instructor = () => {
  const navigateToTeach = () => {
    // Navigate to the "Teach" page using JavaScript without changing the URL
    // Here, you can also include any additional logic you need for navigation
    // For example, you might want to scroll to the top of the page on navigation
    // Without scrolling navigate
    window.location.href = "/Teach";
  };

  return (
    <div className="container-fluid  dv-instructor">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div className="h1">
            <h1>Become an Instructor On Our Online Platform.</h1>
          </div>

          <div className="ML d-md-none d-lg-none">
            <img src={important} className="w-100" alt="important" />
          </div>

          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              {/* Wrap the card content with Link */}
              <Link to="/your-topic-page" className="card">
                <div className="row">
                <div className="col-2 col-sm-2">
                <img src={tickmark_badge}  className="tickmark"
              alt="tickmark_badge" />
                </div>
             <div className="col-10 col-sm-10">
             <h5 className="h5 ">Teach Your Topic</h5>
             </div>
             </div>
                
              </Link>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <Link to="/plan-syllabus-page" className="card">
              <div className="row">
                <div className="col-2 col-sm-2">
                <img src={tickmark_badge}  className="tickmark"
              alt="tickmark_badge" />
                </div>
             <div className="col-10 col-sm-10">
                <h5 className="h5">Plan Your Syllabus</h5>
                </div>
             </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">

              <Link to="/record-video-page" className="card">
              <div className="row">
                <div className="col-2 col-sm-2">
                <img src={tickmark_badge}  className="tickmark"
              alt="tickmark_badge" />
                </div>
             <div className="col-10 col-sm-10">
                <h5 className="h5 ">Record Your Video</h5>
                </div>
             </div>
              </Link>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <Link to="/launch-courses-page" className="card">
              <div className="row">
                <div className="col-2 col-sm-2">
                <img src={tickmark_badge}  className="tickmark"
              alt="tickmark_badge" />
                </div>
             <div className="col-10 col-sm-10">
                <h5 className="h5 ">Launch Your Course</h5>
                </div>
          </div>
              </Link>
            </div>
          </div>

          <div className="btn-style">
            <button className="btn" onClick={navigateToTeach}>
            GET INSTRUCTOR
            </button>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-none d-sm-block">
          <img src={important} className="w-100 mx-auto" alt="important" />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
