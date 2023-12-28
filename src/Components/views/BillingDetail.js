import React from "react";
import "../css/billingdetail.scss";

const BillingDetail = () => {
  const handleSave = () => {
    // Add logic to save billing details
    // You can use the form data or perform any necessary action
    console.log("Save button clicked");
  };

  const handleEdit = () => {
    // Add logic to enable editing mode if needed
    console.log("Edit button clicked");
  };
  
  return (
    <div className="container-fluid dv-billing">
          
        <h2 className="heading">Billing Details</h2>
      
          <form>
            <div className="row form-group">
              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="FirstName"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>

              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="LastName"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>

              

              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="Street Address"
                  className="form-control"
                  placeholder="Street Address"
                />
              </div>

              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="Apartment, Suite, Unit, etc"
                  className="form-control"
                  placeholder="Apartment, Suite, Unit, etc"
                />
              </div>

              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="Town, City"
                  className="form-control"
                  placeholder="Town, City"
                />
              </div>


              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="PinCode"
                  className="form-control"
                  placeholder="Pincode"
                />
              </div>

              
              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="State"
                  className="form-control"
                  placeholder="State"
                />
              </div>


              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
              <div className="dropdown">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <select class="form-select" aria-label="Default select example">
                  <option selected>India</option>
                  <option value="1">China</option>
                  <option value="2">Us</option>
                  <option value="3">Russia</option>
                  <option value="3">Germany</option>
                </select>
              </div>
            </div>
          </div>
          </div>
            

              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="Email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className=" col-12 col-sm-12 col-md-6 col-lg-6 input-wrapper">
                <input
                  type="text"
                  id="Phone Number"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>

        
            </div>

           
          <div className="btn-style">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
         
       
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        
      </form>
    </div>
  );
};

export default BillingDetail;
