import React from 'react';
import wishlistbanner from "../assest/wishlistbanner.webp";

const WishlistBanner = () => {
  const containerStyle = {
    position: 'relative',
    overflow: 'hidden', // Ensures the overlay doesn't overflow
  };

  const imgStyle = {
    width: '100%',
    display: 'block',
  };

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
    <div className='w-100' style={containerStyle}>
      <img src={wishlistbanner} style={imgStyle} alt="wishlistbanner" />
      <div style={overlayStyle}></div>
      <h1 style={headingStyle}><b>WISHLIST</b></h1>
    </div>
  );
};

export default WishlistBanner;
