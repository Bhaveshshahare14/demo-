import React, { useState } from "react";
import location1 from "../assest/location1.png";
import phone from "../assest/phone.png";
import mailteach from "../assest/mailteach.png";
import  facebook from "../assest/facebook.png";
import instagram from "../assest/instagram.png";
import linkedin from "../assest/linkedin.png";
import profile from "../assest/profile.svg";
import mail1 from "../assest/mail1.svg";
import phoneno from "../assest/phoneno.svg";
import "../css/contactus.scss";
import Map from "./Map"; // Import the Map component

const ContactUs = () => {
  const [showMap, setShowMap] = useState(false); // State to manage map visibility
  // ... (your other state variables and functions)

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const redirectToGmail = () => {
    window.location.href = "https://mail.google.com/";
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    number: false,
    message: false,
  });

const handleInputChange = (e) => {
  const { name, value } = e.target;

  setTouched({
    ...touched,
    [name]: true,
  });

  if (name === "name") {
    const isValidName = /^[a-zA-Z\s]*$/.test(value);
    const capitalizedName = value.replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize first letter
    setErrors({
      ...errors,
      [name]: isValidName ? "" : "Name should only include alphabets and spaces",
    });
    setFormData({
      ...formData,
      [name]: capitalizedName,
    });
  } else if (name === "email") {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setErrors({
      ...errors,
      [name]: isValidEmail ? "" : "Enter a valid email address",
    });
    setFormData({
      ...formData,
      [name]: value,
    });
  } else if (name === "number") {
    const isValidNumber = /^[0-9]+$/.test(value);
    setErrors({
      ...errors,
      [name]: isValidNumber ? "" : "Please enter only numbers",
    });
    setFormData({
      ...formData,
      [name]: value,
    });
  } else if (name === "message") {
    if (value.length > 250) {
      setErrors({
        ...errors,
        [name]: "Message should not exceed 250 characters",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};

  const sendMessage = () => {
    if (
      Object.values(errors).some((error) => error !== "") ||
      Object.values(touched).some((fieldTouched) => !fieldTouched)
    ) {
      console.log("Form has validation errors or unfilled inputs. Cannot send message.");
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Failed to send message. Status: ${response.status}`);
        }
      })
      .then((data) => {
        console.log("Response from backend:", data);
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });

        // Show success alert
        window.alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);

        // Show error alert
        window.alert("Failed to send message. Please try again later.");
      });
  };
  

  return (
   
      <div className="container dv-contact-us ">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 mb-3 style ">
            <div className="contaxt-box-left">
              <div className="heading">
                <h1>Have Any Questions?</h1>
                <p className="para-1">
                  Have an inquiry or some feedback for us? Fill out the form
                  <br></br>
                  below to contact our team.
                </p>
              </div>

              <div className="card" onClick={toggleMap}>
                <div className="content">
                 <img
  src={location1}
  alt="location1"
  width={40}
  height={40}
  className="icon blue-icon" // Add blue-icon class
/>

                  <div>
                    <h6 className="dv-h6"><b>Our Address</b></h6>
                    <p className="para">
                      288, Canal Road, Nandanvan, Nagpur, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
              {showMap && <Map />}{" "}
             
              <div className="card"  >
                <div className="content">
                  <img
                    src={phone}
                    alt="phone"
                    width={40}
                    height={40}
                    className="icon"
                  />
                  <div>
                  <h6 className="dv-h6"><b>Phone Number</b></h6>
                    <p className="para">+91-9325545329</p>
                  </div>
                </div>
              </div>

              <div className="card" onClick={redirectToGmail}>
                <div className="content">
                  <img
                    src={mailteach}
                    alt="mailteach"
                    width={40}
                    height={40}
                    className="icon"
                  />
                  <div>
                     <h6 className="dv-h6"><b>Email</b></h6>
                    <p className="para">info@dataventics.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="follow-us">Follow us on:</h4>
                <a href="https://www.facebook.com/your-facebook-profile">
                  <img
                    src={facebook}
                    alt="fb"
                    width={50}
                    height={50}
                    className="social-link"
                  />
                </a>
                <a href="https://www.instagram.com/dataventics_software_solutions/">
                  <img
                    src={instagram}
                    alt="ins"
                    width={50}
                    height={50}
                    className="social-link"
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091950758921">
                  <img
                    src={linkedin}
                    alt="linktd"
                    width={50}
                    height={50}
                    className="social-link"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-7 col-lg-7 contact-us  ">
            <div>
              <p className="p">CONTACT WITH US!</p>

              <h1><b>Get in Touch</b></h1>
              <p className="para-1">
                Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmode
                tempor eiusmode tempor incididunt ut labore er dolore magna
                aligua.
              </p>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                <div className="input-style">
  <img src={profile} alt="profile" className="input-icon" />
  <input
    type="text"
    name="name"
    id="name"
    className="input"
    placeholder="Your Name*"
    value={formData.name}
    onChange={handleInputChange}
    onBlur={() => setTouched({ ...touched, name: true })}
  />
  {touched.name && errors.name && (
    <p className="error-message red-color">{errors.name}</p>
  )}
</div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                <div className="input-style">
  <img
    src={phoneno}
    alt="phoneno"
    width={20}
    height={20}
    className="input-icon"
  />
  <input
    type="number"
    name="number"
    id="number"
    placeholder="Phone Number*"
    className="input"
    value={formData.number}
    onChange={handleInputChange}
    onBlur={() => setTouched({ ...touched, number: true })}
  />
  {touched.number && errors.number && (
    <p className="error-message red-color">{errors.number}</p>
  )}
</div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
                <div className="input-style">
  <img src={mail1} alt="mail" className="input-icon" />
  <input
    type="email"
    name="email"
    id="email"
    className="input-1"
    placeholder="Email Address*"
    value={formData.email}
    onChange={handleInputChange}
    onBlur={() => setTouched({ ...touched, email: true })}
  />
  {touched.email && errors.email && (
    <p className="error-message red-color">{errors.email}</p>
  )}
</div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
               
  <label htmlFor="exampleFormControlTextarea1"></label>
  <textarea
    className="form-control"
    id="exampleFormControlTextarea1"
    rows="6"
    name="message"
    placeholder="Write Your Message*"
    value={formData.message}
    onChange={handleInputChange}
    onBlur={() => setTouched({ ...touched, message: true })}
  />
  {touched.message && errors.message && (
    <p className="error-message red-color">{errors.message}</p>
  )}
</div>
               
              </div>

              <div className="btn-style">
              <button className="btn" onClick={sendMessage}>
                SEND MESSAGE
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default ContactUs;
