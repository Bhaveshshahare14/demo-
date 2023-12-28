import React from 'react'
import cartbanner from "../assest/cartbanner.webp";

const CartBanner = () => {
    
        const headingStyle = {
          position: 'absolute',
          top: '50%', // You can adjust the positioning as needed
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', // You can choose the text color
        
          
          zIndex: 2, // Make sure the heading is on top
        };
  
    return (
      <div className='w-100' style={{ position: 'relative' }}>
        <img src={cartbanner} className='w-100' alt="cartbanner" />

       
        
        <h1  style={headingStyle}>CART</h1>
       
       
      </div>
    );
  };

export default CartBanner
