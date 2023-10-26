import React from 'react'
import { usePaystackPayment } from 'react-paystack';

//function for paystack
const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  };
  
  // you can call this function anything
  const onSuccess:any = (reference:any) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
  };
  
  // you can call this function anything
  const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
  }
const PaystackHookExample = () => {
    
    return (
      <div>
          <button >Paystack Hooks Implementation</button>
      </div>
    );
};


export default PaystackHookExample