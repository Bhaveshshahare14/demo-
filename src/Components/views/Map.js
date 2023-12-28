
import React from "react";

const Map = () => {
  return (
    // <div className='row '>
    // <div class="col-md-12 col-lg-12 pt-3">

    //   <iframe
    //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4671713139405!2d79.11760907500313!3d21.133798784163048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7c9a7d9efc7%3A0x9f35916cdff60ad!2sDataventics%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1697608764310!5m2!1sen!2sin"
    //   className="w-100" height="400" allowfullscreen="" loading="lazy">

    //   </iframe>
    // </div>

    // </div>

    <div className="map-popup">
      <div className="map-container pt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4671713139405!2d79.11760907500313!3d21.133798784163048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7c9a7d9efc7%3A0x9f35916cdff60ad!2sDataventics%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1697608764310!5m2!1sen!2sin"
          className="w-100"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;