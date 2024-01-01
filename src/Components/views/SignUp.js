import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.scss";
import signupData from "../json/signup.json";

const SignUp = () => {
  const navigate = useNavigate();
  console.log(signupData);
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isFirstNameLabelVisible, setIsFirstNameLabelVisible] = useState(true);
  const [isLastNameLabelVisible, setIsLastNameLabelVisible] = useState(true);
  const [isEmailLabelVisible, setIsEmailLabelVisible] = useState(true);
  const [isPasswordLabelVisible, setIsPasswordLabelVisible] = useState(true);
  const [isPhoneLabelVisible, setIsPhoneLabelVisible] = useState(true);


  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);

  const handleForgotPassword = () => {
    setShowPasswordRecovery(true);
  };

  const handleCancelPasswordRecovery = () => {
    setShowPasswordRecovery(false);
  };
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleFirstNameChange = (e) => {
    const inputFirstname = e.target.value;

    // Check if the first letter is capital
    const firstLetter = inputFirstname.charAt(0);
    if (!firstLetter.match(/[A-Z]/)) {
      setFirstnameError("First letter must be capital.");
    } else {
      setFirstnameError("");
    }

    // Update the state with the entered first name
    setFirstName(inputFirstname);
  };
  const handleLastNameChange = (e) => {
    const inputLastname = e.target.value;

    // Check if the first letter is capital
    const firstLetter = inputLastname.charAt(0);
    if (!firstLetter.match(/[A-Z]/)) {
      setLastnameError("First letter must be capital.");
    } else {
      setLastnameError("");
    }

    // Update the state with the entered last name
    setLastName(inputLastname);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;

    // Perform validation checks using a regular expression
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(inputEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    // Update the state with the entered email
    setEmail(inputEmail);
  };

  // Event handler for password input changes
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;

    // Perform validation checks using a regular expression
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(inputPassword)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
      );
    } else {
      setPasswordError("");
    }

    // Update the state with the entered password
    setPassword(inputPassword);
  };


 
  // Event handler for phone number input changes
  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value;

    // Check if the phone number is a valid 10-digit number
    if (!inputPhone.match(/^[0-9]+$/) || inputPhone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number.");
    } else {
      setPhoneError("");
    }

    // Update the state with the entered phone number
    setPhone(inputPhone);
  };

  const handleSignInEmailChange = (e) => {
    const inputEmail = e.target.value;

    // Perform validation checks using a regular expression
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(inputEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    // Update the state with the entered email
    setSignInEmail(inputEmail);
  };

  const handleSignInPasswordChange = (e) => {
    const inputPassword = e.target.value;

    // Perform validation checks using a regular expression
    // Ensure the password has at least 8 characters, one letter, one number, and one special character
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(inputPassword)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one letter, one number, and one special character."
      );
    } else {
      setPasswordError("");
    }

    // Update the state with the entered password
    setSignInPassword(inputPassword);
  };

  // const handleSignIn = async (e) => {
  //   e.preventDefault();
  //   console.log(JSON.parse(localStorage.getItem("users")));
  //   try {
  //     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  //     const foundUser = existingUsers.find(
  //       (user) =>
  //         user.email.toLowerCase() === signInEmail.toLowerCase() &&
  //         user.password === signInPassword
  //     );

  //     if (foundUser) {
  //       console.log("User signed in successfully:", foundUser);
        
  //       localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

  //       setSignInEmail("");
  //       setSignInPassword("");

  //       // Display an alert for successful login
  //       window.alert("Login successful!");

  //       // Redirect to CoursesPage on successful login
  //       navigate("/CoursesPages", { state: { user: foundUser } });
  //     } else {
  //       console.error("Invalid email or password");
  //       // Display an alert for invalid credentials
  //       window.alert("Invalid email or password. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error during sign in:", error);
  //   }
  // };

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      // Check credentials in local storage
      const foundUserLocal = existingUsers.find(
        (user) =>
          user.email.toLowerCase() === signInEmail.toLowerCase() &&
          user.password === signInPassword
      );
  
      if (foundUserLocal) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUserLocal));
        setSignInEmail("");
        setSignInPassword("");
        window.alert("Login successful!");
        // navigate("/", { state: { user: foundUserLocal } });
        navigate("/");
        return;
      }
  
      // If not found locally, check Google Sheets
      const googleSheetApiUrl =
        "https://sheets.googleapis.com/v4/spreadsheets/1j606oxR8olxLmUOAdue0KNpygYAb-BD78Ehrd-OjWa8/values/CreatingAcc?alt=json&key=AIzaSyDdi0UU8I3HYiKurQhU8zJzTGOGegCohgk";
  
      const response = await fetch(googleSheetApiUrl);
      const data = await response.json();
  
      const sheetUsers = data.values.slice(1).map((row) => {
        return {
          firstname:row[0],
          email: row[2],
          password: row[3],
          // Add other fields as needed
        };
      });
  
      const foundUserSheet = sheetUsers.find(
        (user) =>
          user.email.toLowerCase() === signInEmail.toLowerCase() &&
          user.password === signInPassword
      );
  
      if (foundUserSheet) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUserSheet));
        setSignInEmail("");
        setSignInPassword("");
        window.alert("Login successful!");
        navigate("/", { state: { user: foundUserSheet } });
      } else {
        console.error("Invalid email or password");
        window.alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };
  

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("submitted");

    try {
      const newUser = {
        firstname,
        lastname,
        email,
        password,
        phone,
      };
      if (!firstname || !lastname || !email || !password || !phone) {
        console.error("Please fill in all the required fields");
        window.alert("Please fill in all the required fields");
        return;
      }
   
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      // const updatedUsers = [...existingUsers, newUser];
      // localStorage.setItem("users", JSON.stringify(updatedUsers));

      const isEmailAlreadyRegisteredLocal = existingUsers.some(
        (user) => user.email === email
      );
  
      if (isEmailAlreadyRegisteredLocal) {
        console.error("Email address already registered locally");
        window.alert("Email address is already registered locally. Please use a different email.");
        return;
      }
  
      // Check if the email already exists in Google Sheet data
      // Add logic to fetch and check against Google Sheet data
  
      const googleAppsScriptUrl =
        "https://script.google.com/macros/s/AKfycbyayFmANhIjNpX005sigw0EQEXmAr9w3qwPmRlzyBHuJy9Fez8e5J6tOlkmEfVWh7CQ/exec";
      const response = await fetch(googleAppsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(newUser),
      });
      // https://sheets.googleapis.com/v4/spreadsheets/1j606oxR8olxLmUOAdue0KNpygYAb-BD78Ehrd-OjWa8/values/CreatingAcc?alt=json&key=AIzaSyDdi0UU8I3HYiKurQhU8zJzTGOGegCohgk

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);

        // Handle the response as needed

         // Check if the email is already registered in Google Sheets
      if (responseData.emailExists) {
        console.error("Email address already registered in Google Sheets");
        window.alert("Email address is already registered. Please use a different email.");
        return;
      }
      } else {
        console.error("Error:", response.statusText);
        // Handle the error
      }
      // If the email is not registered locally or in Google Sheets, proceed with registration
   

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

      console.log("User registered successfully:", newUser);
      window.alert("Registration successful");

      // Reset input fields on successful registration
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhone("");

      // Switch to the login view
      setIsSignUp(false);
    } catch (error) {
      console.error("Error during registration:", error);
      // Display an alert or update state to indicate the error
    }
  };
  
  return (
    <div
      className={`container my-container mt-5  ${
        isSignUp ? "right-panel-active" : ""
      }`}
    >
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 form-container sign-up-container">
          <form className="action-form-panel" onSubmit={handleSignUp}>
            <h2 className="heading-panel">Create Account</h2>

            <input
              className={`input-style-form ${
                firstnameError ? "error-input" : ""
              }`}
              type="text"
              placeholder="First Name"
              value={firstname}
              required
              onChange={handleFirstNameChange}
              onFocus={() => setIsFirstNameLabelVisible(false)}
              onBlur={() => setIsFirstNameLabelVisible(!!firstname)}
            />
            {isFirstNameLabelVisible && <label></label>}
            {firstnameError && (
              <div className="error-message red-color">{firstnameError}</div>
            )}

            <input
              className={`input-style-form ${
                lastnameError ? "error-input" : ""
              }`}
              type="text"
              placeholder="Last Name"
              value={lastname}
              required
              onChange={handleLastNameChange}
              onFocus={() => setIsLastNameLabelVisible(false)}
              onBlur={() => setIsLastNameLabelVisible(!!lastname)}
            />
            {isLastNameLabelVisible && <label></label>}
            {lastnameError && (
              <div className="error-message red-color">{lastnameError}</div>
            )}

            <input
              className={`input-style-form ${emailError ? "error-input" : ""}`}
              type="email"
              placeholder="E-mail"
              value={email}
              required
              onChange={handleEmailChange}
              onFocus={() => setIsEmailLabelVisible(false)}
              onBlur={() => setIsEmailLabelVisible(!!email)}
            />
            {isEmailLabelVisible && <label></label>}
            {emailError && (
              <div className="error-message red-color">{emailError}</div>
            )}

            <input
              className={`input-style-form ${
                passwordError ? "error-input" : ""
              }`}
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={handlePasswordChange}
              onFocus={() => setIsPasswordLabelVisible(false)}
              onBlur={() => setIsPasswordLabelVisible(!!password)}
            />
            {isPasswordLabelVisible && <label></label>}
            {passwordError && (
              <div className="error-message red-color">{passwordError}</div>
            )}

            <input
              className={`input-style-form ${phoneError ? "error-input" : ""}`}
              type="tel"
              placeholder="Phone Number"
              value={phone}
              required
              onChange={handlePhoneChange}
              onFocus={() => setIsPhoneLabelVisible(false)}
              onBlur={() => setIsPhoneLabelVisible(!!phone)}
            />
            {isPhoneLabelVisible && <label></label>}
            {phoneError && (
              <div className="error-message red-color">{phoneError}</div>
            )}

            <button className="style-button-panel" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 form-container-1 sign-in-container-1">
          <form className="action-form-panel" onSubmit={handleSignIn}>
            <h2 className="heading-panel">LOGIN</h2>

            <input
              className={`input-style-form ${emailError ? "error-input" : ""}`}
              type="email"
              placeholder="E-mail"
              value={signInEmail}
              required
              onChange={handleSignInEmailChange}
            />
            {emailError && (
              <div className="error-message red-color">{emailError}</div>
            )}

            <input
              className={`input-style-form ${
                passwordError ? "error-input" : ""
              }`}
              type="password"
              placeholder="Password"
              required
              value={signInPassword}
              onChange={handleSignInPasswordChange}
            />
            {passwordError && (
              <div className="error-message red-color">{passwordError}</div>
            )}
            <button className="style-button-panel" type="submit">
              Log In
            </button>
            
            <button
             
              id="forgotPassword"
              onClick={handleForgotPassword}
            >
              Forgot Password
            </button>




          </form>
          
        </div>
        
      </div>
      

      <div className="overlay-container">
        <div className={`overlay ${isSignUp ? "right-panel-active" : ""}`}>
          <div className="overlay-panel overlay-left">
            <h2 className="heading-panel-1">Welcome Back!</h2>
            <p className="para-panel-1">
              To keep connected with us, please log in with your personal info
            </p>
            <button
              className="ghost  style-button-panel"
              id="signIn"
              onClick={toggleForm}
            >
              Sign In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h2 className="heading-panel-1">Hello, Friend!</h2>
            <p className="para-panel-1">
              Enter your personal details and start your journey with us
            </p>
            <button
              className="ghost  style-button-panel"
              id="signUp"
              onClick={toggleForm}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;