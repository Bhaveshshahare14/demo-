import React from 'react'
import ContactUsBanner from "../ContactUsBanner";
import ContactUs from "../ContactUs";
import Subscribe from "../Subscribe";
import Map from "../Map";

const ContactUsPages = () => {
  return (
    <div>
       <ContactUsBanner/>
       <Map />
       <ContactUs/>
       <Subscribe/>
     
    </div>
  )
}

export default ContactUsPages
