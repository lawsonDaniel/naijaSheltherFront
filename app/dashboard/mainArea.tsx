import { Box, Typography } from '@mui/material'
import React from 'react'
import Overview from './pages/Overview'
import UplaodHouse from './pages/upload'

interface FUNCTIONPROPS {
  activePage:string
}
function MainArea({activePage}:FUNCTIONPROPS) {
  return (
    <Box sx={{
        backgroundColor:"#eee",
        height:"100%",
        overflow:'auto',
        width:"100%",
        padding:3,
        position:"relative",
        top:56
    }}>
   {
    activePage  === "OverView" && <Overview/>
   } 
  {
    activePage === "Upload" && <UplaodHouse/>
  }
    </Box>
  )
}

export default MainArea