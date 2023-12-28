import React from 'react';
import checkoutimage from '../assest/checkoutimage.webp';

const CheckoutBanner = () => {
  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
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
    background: 'rgba(0, 0, 0, 0.7)', // Adjust the color and opacity here
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
    <div style={containerStyle}>
      <img src={checkoutimage} style={imgStyle} alt="checkoutimage" />
      <div style={overlayStyle}></div>
      <h1 style={headingStyle}><b>CHECKOUT</b></h1>
    </div>
  );
};

export default CheckoutBanner;
