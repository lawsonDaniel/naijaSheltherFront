"use client"
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { Container,Box } from '@mui/material';
import Header from '@/components/Header';
import HouseCard from '@/components/houseCard';
import AlertDialog from '@/components/alertCard';
function Page() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
        <Header/>
        
        <Box sx={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr 1fr 1fr",
          position:"relative",
          top:110,
          
        }}>
            <HouseCard  click={handleClickOpen} />
           
        </Box>
        <AlertDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} setOpen={setOpen}/>
    </Container>
  )
}

export default Page