/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box, Typography } from '@mui/material'

function HouseCard() {
  return (
   <Box className="bg-red" sx={{
    width:250,
    height:300,
    borderRadius:2,
   }}>
   <img src="/card.jpg" alt="card" style={{
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
    <Typography fontWeight="bold" fontSize={15} color="#666">House Location</Typography>
    <Typography  fontSize={12} color="#999">54km away</Typography>
   </Box>
   <Box sx={{
    display:"flex",
    marginTop:0.5,
    alignItems:"center",
    gap:2,
   }}>
    <Typography fontSize={12} color="#999">House Type</Typography>
    <Typography fontSize={12}  color="#999">5 room</Typography>
   </Box>
   <Box sx={{
    display:"flex",
    marginTop:0.5,
    alignItems:"center",
    gap:0.5,
   }}>
   <Typography fontWeight="bold" fontSize={15} color="#666">$3,000</Typography>
    <Typography fontSize={12}  color="#999">year</Typography>
   </Box>
   </Box>
  )
}

export default HouseCard