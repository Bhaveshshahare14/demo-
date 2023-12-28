import React, { useState } from "react";
import "../css/checkinlogin.scss";

function CheckInLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(inputEmail)) {
      setEmailError("Please enter a valid email address with the first letter small and '@gmail.com'.");
    } else {
      setEmailError("");
    }

    if (inputEmail === "") {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!passwordRegex.test(inputPassword)) {
      setPasswordError("Password must be at least 8 characters long and contain at least one letter, one number, and one special character.");
    } else {
      setPasswordError("");
    }

    if (inputPassword === "") {
      setPasswordError("");
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Validate email and password
    if (!email.includes("@") || password.length < 8 || emailError || passwordError) {
      return;
    }
  
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      // Check credentials in local storage
      const foundUserLocal = existingUsers.find(
        (user) =>
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === password
      );
  
      if (foundUserLocal) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUserLocal));
  
        setEmail("");
        setPassword("");
        setRememberMe(false);
  
        // Redirect to CheckOutPage on successful login
        window.location.href = "/CheckOutPage";
        return;
      }
  
      // If not found locally, check Google Sheets
      const googleSheetApiUrl =
        "https://sheets.googleapis.com/v4/spreadsheets/1j606oxR8olxLmUOAdue0KNpygYAb-BD78Ehrd-OjWa8/values/CreatingAcc?alt=json&key=AIzaSyDdi0UU8I3HYiKurQhU8zJzTGOGegCohgk";
  
      const response = await fetch(googleSheetApiUrl);
      const data = await response.json();
  
      const sheetUsers = data.values.slice(1).map((row) => {
        return {
          firstname: row[0],
          email: row[2],
          password: row[3],
          // Add other fields as needed
        };
      });
  
      const foundUserSheet = sheetUsers.find(
        (user) =>
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === password
      );
  
      if (foundUserSheet) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUserSheet));
  
        setEmail("");
        setPassword("");
        setRememberMe(false);
  
        // Redirect to CheckOutPage on successful login
        window.location.href = "/CheckOutPage";
      } else {
        console.error("Invalid email or password");
        // Display an alert for invalid credentials
        window.alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };
  
   return (
    <div className="container dv-login-form mt-5 mb-5">
      <div className="card h-100">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <form onSubmit={handleFormSubmit}>
              <div className={`mb-3 form-container ${emailError ? "has-error" : ""}`}>
                <label className="form-label">Username or Email *</label>
                <input
                  type="email"
                  className={`form-control form-input ${emailError ? "error-input" : ""}`}
                  placeholder="Username or Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <div className="error-message red-color">{emailError}</div>}
              </div>

              <div className={`mb-3 form-container ${passwordError ? "has-error" : ""}`}>
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  className={`form-control form-input ${passwordError ? "error-input" : ""}`}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && <div className="error-message red-color">{passwordError}</div>}
              </div>

              <div className="mb-3 form-container">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    <p> Remember me</p>
                  </label>
                </div>
              </div>

              <div className="btn-style">
                <button type="submit" className="btn">
                  LOGIN
                </button>
              </div>
              <div>
                <p className="forgot-password form-container text-right">
                  <a href="https://mail.google.com/mail" className="forget">
                    Lost your password?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInLogin;