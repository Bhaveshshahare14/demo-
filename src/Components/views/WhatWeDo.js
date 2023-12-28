import React from 'react';
import "../css/whatwedo.scss";
import { Link } from 'react-router-dom';
import WhatWeDoData from "../json/whatWeDoData.json";

const WhatWeDo = () => {
  const wwdData = WhatWeDoData;
  console.log(wwdData);

  return (
    <div className="container dv-what-we-do">
      <div className="heading">
        <h1><b>Online Education Tailored to You</b></h1>
      </div>
      <div className="row">
        {wwdData.whatwedo.map((item, index) => (
          <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4">
            <Link to="/" className="card">
              <div className="card-img-circle">
                <img className="w-50" src={require(`../assest/${item.image}`)} alt="circle" />
              </div>
              <h4 className="h4">{item.title}</h4>
              <h6 className="h6-heading">{item.description}</h6>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;