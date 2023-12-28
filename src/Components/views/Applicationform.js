

import React, { useState } from "react";
import "../css/applicationform.scss";
import mailteach from "../assest/mailteach.png";
import nameteach from "../assest/nameteach.png";
import phone from "../assest/phone.png";
import addressteach from "../assest/addressteach.png";
import PopupPage from "./PopupPage";
import uploadproff from "../assest/uploadproff.png";
import uploadcontent from "../assest/uploadcontent.png";
import experience from "../assest/experience.png";
import skills from "../assest/skills.png";

function Applicationform() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("EXIT");
  const [inputPlaceholder, setInputPlaceholder] = useState("FULL NAME");

  const showPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleYes = () => {
    closePopup();
  };

  const handleNo = () => {
    closePopup();
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (buttonLabel === "EXIT") {
      setButtonLabel("BACK");
      setInputPlaceholder("EXPERIENCE");
    } else {
      setButtonLabel("EXIT");
      setInputPlaceholder("FULL NAME");
    }
  }

  return (
    <div className="container pt-5 pb-5 dv-Application-form ">
    
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 white-column">
          
              <h2 className="heading-1">
                APPLY FOR TEACH
              </h2>
          
            <div className="para-1">
              <p>BE THE PART OF OUR GROUP</p>
            </div>

            <div className="form">
              <div className="row">
                <div className="col-12 col-sm-12  col-md-12">
                <div className="input-container">
                    {buttonLabel === "EXIT" ? (
                      <div>
                        <img
                          className="icon"
                          src={nameteach}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="NAME"
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          className="icon"
                          src={experience}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          placeholder="EXPERIENCE"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12  col-md-12">
                <div className="input-container">
                    {buttonLabel === "EXIT" ? (
                      <>
                        <img
                          className="icon"
                          src={mailteach}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="E-MAIL"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="icon"
                          src={skills}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          placeholder="SKILLS"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12  col-md-12">
                <div className="input-container">
                    {buttonLabel === "EXIT" ? (
                      <>
                        <img
                          className="icon"
                          src={phone}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="PHONE"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="icon"
                          src={uploadcontent}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          placeholder="UPLOAD CONTACT"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12  col-md-12">
                  <div className="input-container">
                    {buttonLabel === "EXIT" ? (
                      <>
                        <img
                          className="icon"
                          src={addressteach}
                          alt="addresslogo"
                          
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="ADDRESS"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="icon"
                          src={uploadproff}
                          alt="addresslogo"
                         
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          placeholder="UPLOAD ID PROOF"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="center-button">
                <button
                  onClick={handleNext}
                  className="my-button-next"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 blue-column">
         
                 <h1 className="heading">Hey Trainer!</h1>
               

               <div className="para">
                 <p>
                   Please complete the teacher 
                   application form to provide us 
                   with your essential information.
                 </p>
               </div>


                                <div className="center-button ">
                  <button onClick={showPopup} className="my-button ">
                    {buttonLabel === "EXIT" ? "EXIT" : "BACK"}
                  </button>
                </div>

                {isPopupVisible && <PopupPage onYes={handleYes} onNo={handleNo} />}
               </div>
            </div>

          </div>
     
     
  );
}

export default Applicationform;
