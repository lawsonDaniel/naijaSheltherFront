import { Box, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function AppTop({onpenSide,side}:any) {
  return (
    <Box sx={{
        backgroundColor:"#000",
        height:60,
        color:"#fff",
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        padding:3,
        position:"fixed",
        zIndex:4,
        


    }}
      
    >
  
    {
      side ?  <CloseIcon onClick={()=>{
        onpenSide(false)
      }}/>: <MenuIcon onClick={()=>{
        onpenSide(true)
      }}/>
    }
   
    <Typography>Top Area</Typography>
    </Box>
  )
}

export default AppTop