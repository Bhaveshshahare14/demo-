import React from 'react';
import "../css/accordion1.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import cordion1 from "../json/accordion.json";
import share from "../assest/share.svg";
import coursemodule from "../assest/coursemodule.png";

const useRating = () => {
  const [rating, setRating] = React.useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return { rating, handleStarClick };
};

const Accordion1 = () => {
  const { rating, handleStarClick } = useRating();
  const accordionInfo = cordion1;
  console.log(accordionInfo);

  return (
    <div className="container dv-accord ">
      <div className="card ">
        <h2 className="h2">COURSES MODULES</h2>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-style">
            <div className="accordion" id="accordionExample">
              {cordion1.accordionData.map((item, index) => (
                <div className="accordion-item mt-4 rounded-3" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button rounded-3 text-orange"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {item.header}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body  text-left">
                      {item.body.map((body, contentIndex) => (
                        <div key={contentIndex}>{body}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-5 col-lg-5 mt-4 ">
          <div>
               <img src={coursemodule} className="w-100 " alt="coursemodule" />

               <div className="row">
                 <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                   <div className="division">
                     <h6 className="h6">Reviews:</h6>
                     <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            cursor: 'pointer',
            color: index <= rating ? '#007bff' : '#e4e4e4', 
            fontSize: '20px', 
          }}
        >
          &#9733; 
        </span>
      ))}
      
    </div>
                   </div>
                 </div>

                 <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                   <div className="division">
                     <h6 className="h6">Duration:</h6>
                     <p className="para-1">40 hrs</p>
                   </div>
                 </div>
                 <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                   <div className="division">
                     <h6 className="h6">Instructor:</h6>
                     <p className="para-1">Vineet & Khijendra</p>
                   </div>
                 </div>
               </div>

               <div className="para">
                 <p>
                 Discover the SQL Course that students absolutely adore! Join us
                 on a journey where learning SQL becomes an enjoyable and
                 rewarding experience, catering to your passion for data and
                 database management.
                 </p>
                
               </div>

               <div className="button-style">
                 <a href="#" className="btn btn-2">
                   <div className="button-content">
                     <img src={share} className="share" />
                     SHARE THIS COURSES
                   </div>
                 </a>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion1;