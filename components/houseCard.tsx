/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Button from './Button'
import Carousel from "nuka-carousel"

function HouseCard({click}:any) {
  return (
   <Box onClick={()=>{
    click()
   }}  className="bg-red" sx={{
    height: 300,
    borderRadius: 2,
    padding: "10px",
    transition: "box-shadow 0.3s", // Add a transition for smooth effect on hover
    '&:hover': {
      boxShadow: "2px 0 7px rgba(51, 51, 51, 0.09)",
     
    },
  }}>
    <img src="/card1.jpg" alt="" style={{
    borderRadius:20,
    width:"100%",
    height:200,
    objectFit:"cover"
   }}/>
   <Box sx={{
    display:"flex",
    justifyContent:"space-between",
    marginTop:1,
   }}>
    <Typography  sx={{
      fontSize: "1.125rem",
      lineHeight: "1.75rem"
    }} color="#000">House Location</Typography>
    <Typography  fontSize={12} color="rgb(55 187 141)">For Rent</Typography>
   </Box>
   <Box sx={{
    display:"flex",
    marginTop:0.5,
    alignItems:"center",
    gap:2,
   }}>
    <Typography fontSize={12} color="rgb(55 187 141)">House Type</Typography>
    <Typography fontSize={12}  color="rgb(55 187 141)">5 room</Typography>
   </Box>
   <Stack direction="row" justifyContent="space-between" alignItems="center">
   <Box sx={{
    display:"flex",
    marginTop:0.5,
    alignItems:"center",
    gap:0.5,
   }}>
   <Typography sx={{
      fontSize: "1.115rem",
      lineHeight: "1.75rem"
    }} color="#000">₦30,000</Typography>
    <Typography fontSize={12}  color="#000">year</Typography>
   </Box>
   {/* <Button name="View Details" style={{
    fontSize:13,
    backgroundColor:'rgb(12 81 63)',
    color:"#fff",
    height:"40px",
    padding:4
   }}/> */}
   </Stack>
   </Box>
  )
}

export default HouseCard