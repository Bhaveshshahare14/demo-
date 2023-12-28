import React from 'react'
import CheckoutBanner from '../CheckoutBanner';
import BillingDetail from "../BillingDetail";
import YourOrder from '../YourOrder';

const CheckOutPage = () => {
  return (
    <div>
        <CheckoutBanner/>      
      <BillingDetail />
      <YourOrder/>
    </div>
  )
}

export default CheckOutPage
