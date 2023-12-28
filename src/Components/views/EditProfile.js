import React, { useState } from 'react';
import "../css/editprofile.scss";
import person_profile from "../assest/person_profile.png";
const EditProfile = () => {
  // State variables for storing user input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [language, setLanguage] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  
  const [activeTab, setActiveTab] = useState('updateProfile');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
    console.log("Profile picture set:", file);
  };

  const handleSaveClick = () => {
    // Implement your save logic here

    // Assuming loggedInUser is stored in local storage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Update the profile picture in the user data
    if (loggedInUser) {
      loggedInUser.profilePicture = profilePicture;
      // Save the updated user data back to local storage
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      console.log("Profile picture saved:", profilePicture);
    }
  };
  return (
    <div className='container-fluid edit-profile'>
      <div>
        <h3 className='profile-h3'>Profile Settings</h3>
      </div>

      <div>
        <ul className="nav nav-tabs">
          <li className={`nav-item ${activeTab === 'updateProfile' ? 'active' : ''}`}>
            <a className={`nav-link ${activeTab === 'updateProfile' ? 'underline' : ''}`} onClick={() => handleTabClick('updateProfile')}>Update Profile</a>
          </li>
          <li className={`nav-item ${activeTab === 'profilePicture' ? 'active' : ''}`}>
            <a className={`nav-link ${activeTab === 'profilePicture' ? 'underline' : ''}`} onClick={() => handleTabClick('profilePicture')}>Profile Picture</a>
          </li>
        </ul>
      </div>

      {activeTab === 'updateProfile' && (
        <div>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor='firstName'>First Name:</label>
              <input
                type='text'
                id='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor='lastName'>Last Name:</label>
              <input
                type='text'
                id='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor='phoneNo'>Phone Number:</label>
              <input
                type='tel'
                id='phoneNo'
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                className='form-control'
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor='language'>Language:</label>
              <input
                type='text'
                id='language'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className='form-control'
              />
            </div>

           
          </div>
          <button className='btn btn-primary' onClick={handleSaveClick}>Save</button>
        </div>
      )}

      {activeTab === 'profilePicture' && (
        <div>
          
            <div>
                Add a nice photo to boost your profile
            </div>
            <div>
                <h6 className='dv-h6'>Profile</h6>
            </div>

          
    <div className='rectangle-container'>
      {profilePicture ? (
        <img
          src={URL.createObjectURL(profilePicture)}
          alt='Profile'
          className='person-profile'
        />
      ) : (
        <img
          src={person_profile}
          alt='person_profile'
          className='person-profile'
        />
      )}
    </div>

            <div>
            <input
              type='file'
              accept='image/*'
              onChange={handleProfilePictureChange}
            />
          </div>
         
           <button className='btn btn-primary' onClick={handleSaveClick}>Save</button>
          
        </div>
      )}
      
    </div>
  );
};

export default EditProfile;
