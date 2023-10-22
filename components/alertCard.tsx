import * as React from 'react';
import Button from './Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({handleClickOpen,handleClose,open,setOpen}:any) {
  
  return (
    <div>
  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Unlock Full House Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          To view the full details of this house, you need to make a payment of $3000.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
       
          <Button style={{
    fontSize:13,
    backgroundColor:'#f365bb',
    color:"#fff",
    height:"40px",
    padding:4
   }} onClick={handleClose} autoFocus name="Pay $30000" />
        
        </DialogActions>
      </Dialog>
    </div>
  );
}
