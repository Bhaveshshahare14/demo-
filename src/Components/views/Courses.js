import React, { useState } from "react";
import "../css/courses.scss";
import course from "../json/course.json";
const courseinfo = course;
console.log(courseinfo);
function CourseCard({ name, imageKey, description, videos }) {
  const [showDetails, setShowDetails] = useState(false);
  const handleKnowMoreClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    
    <div className="card ">
      <div className="card-body">
        <img
          src={require(`../assest/${imageKey}`)}
          className="card-img-top"
          alt={imageKey}
        />
        <h5 className="h5-style">
          <b>{name}</b>
        </h5>
        <p className="card-text">{description}</p>
        {/* Display videos if showDetails is true */}
        {showDetails && (
          <div className="videos">
            <h6>Videos:</h6>
            <ul>
              {videos.map((video, index) => (
                <li key={index}>
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    {video.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Toggle showDetails on "Know More" link click */}
        <a
          href="#"
          className="know-more-link Courses-links"
          onClick={handleKnowMoreClick}
          
        >
          {showDetails ? "Hide Details" : "Know More"}
        </a>
      </div>
    </div>
  );
}

function Courselist({ number, description }) {
  return (
    <div>
      <h2 className="h2">{number}</h2>
      <h6 className="h6">{description}</h6>
    </div>
  );
}

function Courses() {
  return (
    <div className="dv-course">
    <div className="container-fluid ">
      <div className="container ">
      <div>
        <h1 className="heading-h1">Top Most Courses Categories</h1>
      </div>

      <div className="row">
        {courseinfo.categories.map((course, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3 col-lg-3">
            <CourseCard
              name={course.name}
              imageKey={course.imageKey}
              description={course.description}
              videos={course.videos || []}
            />
          </div>
        ))}
      </div>
</div>
</div>
<div className="bg-trasiction">
<div className="container mt-5">
      <div className="row">
        {courseinfo.statistics.map((course, item) => (
          <div
            key={item}
            className="col-4 col-sm-4 col-md-4 col-lg-4 column-style"
          >
            <Courselist
              number={course.number}
              description={course.description}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  );
}

export default Courses;
