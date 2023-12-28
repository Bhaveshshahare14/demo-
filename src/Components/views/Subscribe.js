import React, { useState } from "react";
import "../css/subscribe.scss";
import subscribe from "../assest/subscribe.png";
import enteremail from "../assest/enteremail.svg";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = async () => {
    try {
      // Check if email is empty
      if (!email.trim()) {
        setEmailError("Email is required");
        return;
      } else {
        setEmailError("");
      }

      // Validate email format
      if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError("Please enter a valid email address");
        return;
      } else {
        setEmailError("");
      }

      console.log("Email data:", email);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: email, body: "Subscribe request" }),
        }
      );

      if (response.ok) {
        console.log("Subscription successful!");
        setEmail("");
      } else {
        console.error("Failed to subscribe");
      }
    } catch (error) {
      console.error("Error while subscribing", error);
    }
  };

  return (
    <div className="container dv-subscribe">
      <div className="heading">
        <h1><b>Subscribe Newsletter</b></h1>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="mx-auto">
            <img src={subscribe} alt="SUBSCRIBE" className="w-100" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-md-5 mt-lg-5 p-md-5 p-lg-5">
          <div className="row">
            <div className=" col-sm-8 col-md-8 p-3">
              <div className="input-style">
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className={`input-type ${emailError ? "error-input" : ""}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <img src={enteremail} alt="mail" className="email-icon" />
                </div>
                {emailError && <div className="error-message red-color">{emailError}</div>}

              </div>
            </div>
            <div className="col-sm-4 col-md-4 p-3">
              <div className="btn-style">
                <button className="btn" onClick={handleSubscribe}>
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-5">
              <p className="content">
                Subscribe now to stay updated on our latest courses and
                expert-led online sessions. Don't miss out on valuable learning
                opportunities join us today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
