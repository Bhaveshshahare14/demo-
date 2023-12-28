import React from "react";
import "../css/footer.scss";
const Footer = () => {
  return (
    <div className="container-fluid dv-footer pt-1 pb-1">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
          <div className="Copyright-footer">
            <>Copyright © 2023 Dataventics All Rights Reserved.</>
          </div>
        </div>

        <div className="col-3 col-sm-3 col-md-3 col-lg-3 ">
          <a href="/privacy-policy" className="Privacypolicy">
            Privacy Policy
          </a>
        </div>

        <div className="col-3 col-sm-3 col-md-3 col-lg-3">
          <a href="/terms-and-conditions" className="Term-con">
            Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
