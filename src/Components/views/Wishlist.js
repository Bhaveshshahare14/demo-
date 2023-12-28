import React, { useState } from "react";
import { Link } from "react-router-dom";
import tickmark from "../assest/tickmark.png";
import wishlistshop from "../assest/wishlistshop.svg";
import wishlist from "../json/wishlist.json";
import "../css/wishlist.scss";


const Wishlist = () => {
  const wishlistinfo = wishlist;
  console.log(wishlistinfo);

  const [buttonClicked, setButtonClicked] = useState(
    Array(wishlistinfo.length).fill(false)
  );

  const handleButtonClick = (index) => {
    const updatedButtonClicked = [...buttonClicked];
    updatedButtonClicked[index] = !updatedButtonClicked[index];
    setButtonClicked(updatedButtonClicked);
  };

  return (
    <div className="container pt-5 pb-5 dv-wishlist">
      <h1 className="dv-h1 pb-5">WISHLIST</h1>

      {wishlistinfo.wishlistdata.map((item, index) => (
        <div key={item.id}>
          <div className="row pb-5">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
              <img
                className="w-100"
                src={require(`../assest/${item.image}`)}
                alt={item.title}
              />
            </div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-9">
              <div>
                <h2 className="h2">{item.title}</h2>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div>
                    <h5 className="style-h5">{item.price}</h5>
                  </div>
                </div>
              </div>

              <div className="btn-style">
                {buttonClicked[index] ? (
                  <Link to="/AfterAddingCart">
                    <button className="btn">
                      <img
                        src={tickmark}
                        alt="tickmark"
                        className="wishlistshop"
                      />
                      <span>Go to cart</span>
                    </button>
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() => handleButtonClick(index)}
                  >
                    <img
                      src={wishlistshop}
                      alt="add-to-cart"
                      className="wishlistshop"
                    />
                    <span>Add to cart</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;


// import React from 'react'

// const Wishlist = () => {
//   return (
//     <div className='container-fluid'>
      
//     </div>
//   )
// }

// export default Wishlist
