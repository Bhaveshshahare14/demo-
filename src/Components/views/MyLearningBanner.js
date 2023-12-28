import React from 'react';
import mylearningbanner from "../assest/mylearningbanner.webp";

const MyLearningBanner = () => {
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)', // Adjust the color and opacity here
    zIndex: 1,
  };

  const headingStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    zIndex: 2,
  };

  return (
    <div className="w-100" style={{ position: 'relative' }}>
      <img src={mylearningbanner} className='w-100' alt="mylearningbanner" />
      <div style={overlayStyle}></div>
      <h1 style={headingStyle}><b>MY LEARNING</b></h1>
    </div>
  );
}

export default MyLearningBanner;
