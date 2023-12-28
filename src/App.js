import React, { useRef } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/inc/Navbar";
import Home from "./Components/views/Home";
//import Footer from "./Components/inc/Footer";
import About from "./Components/views/About";
import Courses from "./Components/views/Courses";
import Instructor from "./Components/views/Instructor";
import ContactUs from "./Components/views/ContactUs";
import SignUp from "./Components/views/SignUp";
import CoursesPages from "./Components/views/MainFiles/CoursesPages";
import LikeMainPage from "./Components/views/MainFiles/LikeMainPage";
import Teach from "./Components/views/MainFiles/Teach";
 import CourseDetailPage from "./Components/views/MainFiles/CourseDetailPage";
import CartPopupPage from "./Components/views/CartPopupPage";
import ContactUsPages from "./Components/views/MainFiles/ContactUsPages";
import MyLearningPage from "./Components/views/MainFiles/MyLearningPage";
import AfterAddingCart from "./Components/views/MainFiles/AfterAddingCart";
import CheckOutPage from "./Components/views/MainFiles/CheckOutPage";
 import Notification from "./Components/views/Notification";
import Applicationform from "./Components/views/Applicationform";
import CheckInLogin from "./Components/views/CheckInLogin";
import ProfilePopup from "./Components/views/ProfilePopup";
import AccountSettings from "./Components/views/AccountSettings";
import EditProfile from "./Components/views/EditProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<Home/>}/>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="Instructor" element={<Instructor />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="CoursesPages" element={<CoursesPages />} />
          <Route path="LikeMainPage" element={<LikeMainPage />} />
          <Route path="Teach" element={<Teach />} />
           <Route path="CourseDetailPage" element={<CourseDetailPage/>}/> 
          <Route path="/CourseDetailPage/:id" element={<CourseDetailPage/>} />
          <Route path="CartPopupPage" element={<CartPopupPage/>}/>
          <Route path="ContactUsPages" element={<ContactUsPages/>}/>
          <Route path="MyLearningPage" element={<MyLearningPage/>}/>
          <Route path="AfterAddingCart" element={<AfterAddingCart/>}/>
          <Route path="CheckOutPage" element={<CheckOutPage/>}/>
          <Route path="Applicationform" element={<Applicationform/>}/>
          <Route path="CheckInLogin" element={<CheckInLogin/>}/>
           <Route path="Notification" element={<Notification/>}/>
          <Route path="ProfilePopup" element={<ProfilePopup/>}/>          
<Route path="AccountSettings" element ={<AccountSettings/>}/>
<Route path="EditProfile" element={<EditProfile/>}/>
          </Routes>
          {/* <Footer/> */}
        
      </BrowserRouter>
    </div>
  );
}

export default App;


