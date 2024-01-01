import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/cartpopuppage.scss";
import deleteicon from "../assest/deleteicon.svg";
import img1 from "../assest/sql.jpg";
import img2 from "../assest/uiuxcourse.png";
import img3 from "../assest/webdevcourse.png";
import crossimg from "../assest/crossimg.png";
// import { Link } from "react-router-dom";

const CartPopupPage = ({ isOpen, toggleCartPopup }) => {
  const navigate = useNavigate();

  const handleCloseCart = () => {
    toggleCartPopup(); // Toggle the cart popup state
  };

  // const handleCheckout = () => {
  //   handleCloseCart(); // Close the cart popup
  //   navigate("/CheckInLogin"); // Navigate to the "/CheckInLogin" route
  // };

  const handleCheckout = () => {
    handleCloseCart();

    // Check if the user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      // User is logged in, navigate to the checkout page
      navigate("/CheckoutPage");
    } else {
      // User is not logged in, navigate to the login page
      navigate("/CheckInLogin");
    }
  };
  const cartItems = [
    {
      id: 1,
      name: "Learn SQL - SQL Essential Training",
      price: "Rs. 399",
      image: img1,
    },
    {
      id: 2,
      name: "Learn UI/UX Design",
      price: "Rs. 399",
      image: img2,
    },
    {
      id: 3,
      name: "Web Development Course",
      price: "Rs. 399",
      image: img3,
    },
  ];

  return (
    
    <div className={`container-fluid dv-cart-popup ${isOpen ? "show" : "hidden"}`}>
        <div className="cart-popup-content">
     
          <button
            type="button"
            className="btn-close-cart"
            aria-label="Close"
            onClick={handleCloseCart}
          >
            <img src={crossimg} alt="close" className="cross-icon" />
          </button>

          
          {cartItems.map((item) => (
            <div key={item.id} className="row  cart-item">
              <div className="col-sm-5 col-4">
                <div>
                  <img src={item.image} alt={item.name}  className="w-100" />
                </div>
              </div>
              <div className="col-sm-7">
                <div>
                  <h5 className="name">{item.name}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="price">{item.price}</h5>
                  </div>
                  <div>
                    <img
                      src={deleteicon}
                      alt="deleteicon"
                      className="delete-icon "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="subtotal">
            <h3>Subtotal: Rs. 1397</h3>
          </div>

          <div className="checkout">
          <button className="button" onClick={handleCheckout}>
            CHECKOUT
          </button>
        </div>
        </div>
      </div>
   
  );
};

export default CartPopupPage;