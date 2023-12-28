import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/accountsettings.scss";
import edit_icon from "../assest/edit_icon.svg";
import crossimg from "../assest/crossimg.svg";

export const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("accountSecurity");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isCloseAccountModalOpen, setIsCloseAccountModalOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
      );
      return;
    }

    // Clear any previous error messages
    setEmailError("");
    setPasswordError("");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePasswordChange = () => {
    // Add logic to handle password change
    closeModal(); // Close the modal after handling password change
  };

  const openCloseAccountModal = () => {
    setIsCloseAccountModalOpen(true);
  };

  const closeCloseAccountModal = () => {
    setIsCloseAccountModalOpen(false);
  };

  const confirmCloseAccount = () => {
    // Add logic to close the account
    console.log("Closing account...");
    closeCloseAccountModal();
  };

  return (
    <div className="container dv-account">
      <h3 className="title">
        <b>Account</b>
      </h3>

      <div className="navbar">
        <div
          className={`tab ${activeTab === "accountSecurity" ? "active" : ""}`}
          onClick={() => handleTabClick("accountSecurity")}
        >
          Account Security
        </div>
        <div
          className={`tab ${activeTab === "closeAccount" ? "active" : ""}`}
          onClick={() => handleTabClick("closeAccount")}
        >
          Close Account
        </div>
      </div>

      {activeTab === "accountSecurity" && (
        <form className="account-security-content" onSubmit={handleFormSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="abcdef@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error-message">{emailError}</div>
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="password-change-link">
            <Link to="#" onClick={openModal}>
              Change Password
              <img
                className="edit-icon"
                src={edit_icon}
                alt="edit_icon"
                onClick={openModal}
              />
            </Link>
          </div>
          <div className="error-message">{passwordError}</div>
        </form>
      )}

      {activeTab === "closeAccount" && (
        <div className="close-account-content">
          <p>
            <span style={{ color: "red" }}>Warning:</span> If you close your
            account, you will lose access forever.
          </p>
          <button className="btn" onClick={openCloseAccountModal}>
            Close Account
          </button>
        </div>
      )}
      {isModalOpen && (
        <div className="overlay">
          <div className="custom-modal">
            <div className="modal-header">
              <h3 className="title">
                <b>Change Password</b>
              </h3>
              <div className="close-modal" onClick={closeModal}>
                <img className="close-icon" src={crossimg} alt="close_icon" />
              </div>
            </div>
         <div className="input-field">
            <div className="input-group pt-4">
              <label>Enter new Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            </div>
            <div className="password-change-1">
              <button className="btn-3" onClick={handlePasswordChange}>
                Save Changes
              </button>
            
            </div>
          </div>
        </div>
      )}

      {isCloseAccountModalOpen && (
        <div className="overlay">
          <div className="custom-modal">
            <h3 className="title">
              <b>Close Your Account ?</b>
            </h3>
            <p className="para">Are you sure you want to close your account?</p>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-change-2">
              <button className="btn-1" onClick={confirmCloseAccount}>
                Close Account
              </button>
              <button className="btn-2" onClick={closeCloseAccountModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;