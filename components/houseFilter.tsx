/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material'
import React from 'react'

function HouseFilter({bg,name,img,hover}:any) {
  return (
    <Box sx={{
        backgroundColor:bg,
        borderRadius:"10px",
        width:"116px",
        height:"116px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        '&:hover':{
            border:`2px solid #000`
        }
    }}>
        <img width="37px" height="29px" style={{
            objectFit:"cover",
            marginBottom:"10px"
        }} src={img} alt=""/>
        <Typography fontSize="14px" fontWeight={100} lineHeight="18px" >{name}</Typography>
    </Box>
  )
}

export default HouseFilter