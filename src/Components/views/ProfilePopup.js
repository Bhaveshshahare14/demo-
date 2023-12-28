import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileperson from "../assest/profileperson.png";
import "../css/profilepopup.scss";

const ProfilePopup = ({ isOpen, onHover, onLeave }) => {
  const [profilePicture, setProfilePicture] = useState(profileperson);

  useEffect(() => {
    const updateProfilePicture = () => {
      try {
        const user = JSON.parse(localStorage.getItem("loggedInUser"));
        const picture = user?.profilePicture || profileperson;

        if (typeof picture === "object") {
          // Assuming picture is an object with a dataURL property
          setProfilePicture(picture.dataURL);
        } else if (typeof picture === "string") {
          // Assuming picture is a file path
          setProfilePicture(picture);
        } else {
          throw new Error("Invalid profile picture format");
        }
      } catch (error) {
        console.error("Error updating profile picture:", error);
        // Handle the error more explicitly, set a default picture
        setProfilePicture(profileperson);
      }
    };

    updateProfilePicture();
  }, []);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const defaultName = "UserName";
  const defaultEmail = "example@gmail.com";

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("loggedInUser");
    window.location.href = "/Home";
  };

  return (
    isOpen && (
      <div className="container-main-1" onMouseEnter={onHover} onMouseLeave={onLeave}>
        <div className="profile-popup">
          <div className="card mt-5">
            <div className="profile-container">
              <img src={profilePicture} className="profile" alt="Profile" />
            </div>
            <div className="profile-info">
              <div className="profile-name">
                <strong>Name:</strong> {loggedInUser?.firstname || defaultName}
              </div>
              <div className="profile-email">
                <strong>Email:</strong> {loggedInUser?.email || defaultEmail}
              </div>
            </div>
          </div>

          <div className="popup-menu">
            <div>
              <Link to="/MyLearningPage" className="menu">
                {" "}
                MyLearning
              </Link>
            </div>
            <div>
              <Link to="/AfterAddingCart" className="menu">
                My Cart
              </Link>
            </div>
            <div>
              <Link to="/LikeMainPage" className="menu">
                Wishlist
              </Link>
            </div>
            <div>
              <Link to="/Teach" className="menu">
                Teach with Us
              </Link>
              <hr className="horizontal-line"></hr>
            </div>

            <div>
              <Link to="/AccountSettings" className="menu">
                Account Settings
              </Link>
            </div>
            <div>
              <Link to="/" className="menu">
                Purchase History
              </Link>
              <hr className="horizontal-line"></hr>
            </div>

            <div>
              <Link to="/" className="menu">
                Language
              </Link>
              <hr className="horizontal-line"></hr>
            </div>
            <div>
              <Link to="/EditProfile" className="menu">
                Edit Profile
              </Link>
              <hr className="horizontal-line"></hr>
            </div>

            <div>
              <Link to="/" className="menu">
                Help
              </Link>
            </div>
            <div>
              <Link to="/" className="menu" onClick={handleLogout}>
                Logout
              </Link>
              <hr className="horizontal-line"></hr>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePopup;
