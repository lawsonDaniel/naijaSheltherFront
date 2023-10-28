import { Box, Typography } from '@mui/material'
import React from 'react'
import Overview from './pages/Overview'
import UplaodHouse from './pages/upload'
import View from './pages/view'

interface FUNCTIONPROPS {
  activePage:string,
  showSideBar:boolean,
  setShowSideBar:any
}
function MainArea({activePage,showSideBar,setShowSideBar}:FUNCTIONPROPS) {
  return (
    <Box sx={{
        backgroundColor:"rgb(55 187 141)",
        height:"100vh",
        overflowY:"hidden",
        width:"100%",
        padding:5,
        position:"relative",
        top:56,
        
    }}
    onClick={()=> setShowSideBar(false)}
    >
   {
    activePage  === "OverView" && <Overview/>
   } 
  {
    activePage === "Upload" && <UplaodHouse/>
  }
  {
    activePage === "View" && <View/>
  }
    </Box>
  )
}

export default MainArea