import React, { useState ,useRef} from "react";
import "../css/home.scss"; // Import your CSS file
import { Carousel } from "react-bootstrap"; //Import Carousel
import slide1 from "../assest/slide1.png"; //Import Carousel_Slide1
import slide2 from "../assest/slide2.png"; //Import Carousel_Slide2
import slide3 from "../assest/slide3.png"; //Import Carousel_Slide3
import slide4 from "../assest/slide4.png"; //Import Carousel_Slide4
import Courses from "./Courses"; //Import Courses Page
import About from "./About"; // Import About Page
import Popular_Courses from "./Popular_Courses"; //Import  Popular_Courses Page
import Instructor from "./Instructor"; //Import  Instructor Page
import ContactUs from "./ContactUs"; //Import  ContactUS Page


const CustomIndicators = ({ activeIndex, items, onClick }) => {
  return (
    <div className="custom-indicators">
      {items.map((item, index) => (
        <div
          key={index}
          className={`custom-indicator ${index === activeIndex ? "active" : ""}`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="w-100">
      <Carousel interval={2000} activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={slide1} alt="slide1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={slide2} alt="slide2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={slide3} alt="slide3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img-fluid" src={slide4} alt="slide4" />
        </Carousel.Item>
      </Carousel>

      {/* <CustomIndicators activeIndex={index} items={[0, 1, 2, 3]} onClick={handleSelect} /> */}

      <Courses />
      <About />
      <Popular_Courses />
      <Instructor />
      <ContactUs />
    
    </div>
  );
};

export default Home;