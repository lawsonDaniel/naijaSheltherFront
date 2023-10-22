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

export default function AlertDialog({ handleClickOpen, handleClose, open, setOpen }: any) {

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
          <Typography fontWeight="bold" style={{
            color: "#000",
            textAlign: "center",
            fontSize: "23px"
          }}>Get House Info</Typography>
          <Typography padding="10px" style={{
            color: "#000",
            textAlign: "center",
            fontSize: "18px"
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
            fontSize: 13,
            backgroundColor: 'rgb(12 81 63)',
            color: "#fff",
            width: "100%",
            fontWeight: "bold", 
            padding: 4,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0 
           
          }}
          onClick={handleClose}
          autoFocus
          name="Pay $30000"
        />
      </DialogContent>
      
    </Dialog>
  );
}
