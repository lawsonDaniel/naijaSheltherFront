"use client"
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { Container,Box, Typography } from '@mui/material';
import Header from '@/components/Header';
import HouseCard from '@/components/houseCard';
import AlertDialog from '@/components/alertCard';
import HouseFilter from '@/components/houseFilter';
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
           position:"relative",
          top:110
          }}>
            <Typography sx={{
               fontSize:"1.25rem",
               marginBottom:"3px"
            }}>Housing Types</Typography>
            <Box sx={{
              overflowX:"auto",
              width:"100vw",
              scrollbarColor: 'red yellow'
            }}>
            <Box sx={{
              display:"flex",
              marginY:"10px",
              marginBottom:"50px",
              gap:"20px",
              flexWrap:"wrap",
              minWidth: 'max-content'
            }}>
              <HouseFilter  bg="rgba(255, 170, 201, 0.25)" hover="rgba(255, 170, 201, 1)" img="/bungalow.png" name="Bungalow"/>
              <HouseFilter bg="rgb(255, 243, 237)" img="/duplex.png" hover="rgb(251, 200, 175)" name="Duplex"/>
              <HouseFilter bg="rgb(255, 248, 228)" img="/apartment.png" hover="rgb(255, 225, 139)" name="Apartment"/>
              <HouseFilter bg="rgb(218, 239, 227)" name="Self Contain" img="/house.png"/>
              <HouseFilter bg="rgb(255, 248, 228)" name="Hostel" img="/hostel.png"/>
            </Box>
            </Box>
            <Typography sx={{
              fontSize:"1.25rem"
            }}>All Houses</Typography>
        <Box sx={{
      display: "grid",
      gridTemplateColumns: "1fr",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "100%",
      gap: 5,
      // Media query for larger screens
      '@media (min-width: 768px)': {
        gridTemplateColumns: "1fr 1fr",
      },
      // Media query for even larger screens
      '@media (min-width: 1024px)': {
        gridTemplateColumns: "1fr 1fr 1fr",
      },
    }}>
            <HouseCard  click={handleClickOpen} />
            <HouseCard  click={handleClickOpen} />
            <HouseCard  click={handleClickOpen} />
            <HouseCard  click={handleClickOpen} />
            <HouseCard  click={handleClickOpen} />
            <HouseCard  click={handleClickOpen} />
            <HouseCard  click={handleClickOpen} />
            <HouseCard  click={handleClickOpen} />
            <HouseCard  click={handleClickOpen} />
           
        </Box>
          </Box>
        
        <AlertDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} setOpen={setOpen}/>
    </Container>
  )
}

export default Page