import React from 'react'
import { Box } from '@mui/material'
import Logo from '@/components/Logo'
import SideBarMenue from './sideBarMenue'
import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadIcon from '@mui/icons-material/Upload';

interface FUNCTIONPROPS {
  setActivePage:any
}
function Sidebar({setActivePage}:FUNCTIONPROPS) {
  return (
   <Box sx={{
    height:"100vh",
    width:300,
    
    padding:2,
   }}>
    <Box>
        <Logo/>
        <Box display="flex" flexDirection="column" gap={2}>
        <SideBarMenue menue="OverView" onClick={()=>{
          setActivePage('OverView')
        }} icon={<DashboardIcon/>}/>
        <SideBarMenue menue="Upload House" onClick={()=>{
          setActivePage('Upload')
        }} icon={<UploadIcon/>}/>
        </Box>
       

    </Box>

   </Box>
  )
}

export default Sidebar