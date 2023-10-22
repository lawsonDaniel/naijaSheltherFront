/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Button from './Button'
import Carousel from "nuka-carousel"

function HouseCard({click}:any) {
  return (
   <Box className="bg-red" sx={{
    width:300,
    height:350,
    borderRadius:2,
    
    padding:3
   }}>
    <Carousel>
      <img src="/card.jpg" alt="" style={{
    borderRadius:20,
    width:"100%",
    height:200,
    objectFit:"cover"
   }}/>
      <img src="/card1.jpg" alt="" style={{
    borderRadius:20,
    width:"100%",
    height:200,
    objectFit:"cover"
   }} />
      <img src="/card2.jpg" alt="" style={{
    borderRadius:20,
    width:"100%",
    height:200,
    objectFit:"cover"
   }} />
      <img src="/card.jpg" alt="" style={{
    borderRadius:20,
    width:"100%",
    height:200,
    objectFit:"cover"
   }} />
      <img src="/card.jpg" alt="" style={{
    borderRadius:20,
    width:"100%",
    height:200,
    objectFit:"cover"
   }} />
    </Carousel>
   
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
   <Stack direction="row" justifyContent="space-between" alignItems="center">
   <Box sx={{
    display:"flex",
    marginTop:0.5,
    alignItems:"center",
    gap:0.5,
   }}>
   <Typography fontWeight="bold" fontSize={15} color="#666">$3,000</Typography>
    <Typography fontSize={12}  color="#999">year</Typography>
   </Box>
   <Button name="View Details" onClick={()=>{
    console.log('clicked')
    click()
   }} style={{
    fontSize:13,
    backgroundColor:'#f365bb',
    color:"#fff",
    height:"40px",
    padding:4
   }}/>
   </Stack>
   </Box>
  )
}

export default HouseCard