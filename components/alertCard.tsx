/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Button from './Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Carousel from "nuka-carousel"
import PaystackHookExample from './payStackModal';
import { usePaystackPayment } from 'react-paystack';

export default function AlertDialog({ handleClickOpen, handleClose, open, setOpen }: any) {
  
  //function for paystack
  const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: 30000*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_991a3181c251435e6510c06ff03922d2a80fdfe4',
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
    const initializePayment = usePaystackPayment(config);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        background: "rgba(51, 51, 51, .25)"
      }}
    >
      <DialogContent
        sx={{
          padding: 0,
      
        }}
      >
        <DialogContentText id="alert-dialog-description">
          <img src="./info.png" alt="" style={{
            margin: "auto",
            width: "96px"
          }} />
          <Typography  style={{
            color: "#000",
            textAlign: "center",
            fontSize:"1.25rem",
               marginBottom:"3px"
          }}>Get House Info</Typography>
          <Typography padding="10px" style={{
            color: "#999",
            textAlign: "center",
            fontSize: "15px",
            fontWeight:100
          }}>To view the full details of this house, you need to make a payment of $3000.</Typography>
         
           <Carousel>
      <img  src="./cardbd.jpg" style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} alt=""/>
      <img  src="./cardbd.jpg" style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} alt="" />
      <img  src="./cardbd.jpg" style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} alt=""/>
      <img  src="./cardbd.jpg" style={{
            margin: "auto",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} alt=""/>
          </Carousel>
        </DialogContentText>
        <Button
          style={{
            fontSize:"1.05rem",
            color: "rgb(12 81 63)",
            width: "100%",
            fontWeight: "400", 
            padding: 4,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            '&:hover':{
              fontWeight: "600",
              backgroundColor:"rgb(12 81 63)"
            }
           
          }}
          onClick={() => {
            initializePayment(onSuccess, onClose)
        }}
          autoFocus
          name="Pay ₦30,000"
        />
      </DialogContent>
      
    </Dialog>
  );
}
