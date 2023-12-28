import React from "react";
import "../css/progress.scss"; // Import CSS
import progress from "../json/progress.json";
const progressinfo = progress;
console.log(progressinfo);
const Progress = () => {
  return (
    <div className="container  dv-progress-page">
      <div>
        <h1 className="heading ">Progress</h1>
      </div>
      <div className="card ">
        {progressinfo.percentage.map((course) => (
          <div key={course.id} className="row mb-3">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 ">
              <div>
                <img
                  className="w-100"
                  src={require(`../assest/${course.image}`)}
                  alt={course.image}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-style">
              <div>
                <h4 className="course-title">{course.title}</h4>
              </div>
              <div className="d-none d-md-block d-lg-block col-md col-lg">
                <div className="course-description">{course.description}</div>
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <p className="div-p">Overall Progress</p>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <p className="para">{course.progress}</p>
                </div>
              </div>
              <hr className="hr"></hr>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Progress;
