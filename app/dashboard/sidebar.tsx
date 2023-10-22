import React from 'react'
import { Box, Stack } from '@mui/material'
import Logo from '@/components/Logo'
import SideBarMenue from './sideBarMenue'
import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadIcon from '@mui/icons-material/Upload';
import CloseIcon from '@mui/icons-material/Close';

interface FUNCTIONPROPS {
  setActivePage:any,
  onpenSide:any
}
function Sidebar({setActivePage,onpenSide}:FUNCTIONPROPS) {
  return (
   <Box sx={{
    height:"100vh",
    width:300,
    position:"fixed",
    padding:2,
    zIndex:5,
    background:"#fff",
    borderRight:"1px solid #ccc"
   }}>
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Logo/>
      <CloseIcon onClick={()=>{
        onpenSide(false)
      }}/>
      </Stack>
       
       
        <Box display="flex" flexDirection="column" gap={2}>
        <SideBarMenue menue="OverView" onClick={()=>{
          setActivePage('OverView')
        }} icon={<DashboardIcon/>}/>
        <SideBarMenue menue="Upload House" onClick={()=>{
          setActivePage('Upload')
        }} icon={<UploadIcon/>}/>
         <SideBarMenue menue="View House" onClick={()=>{
          setActivePage('View')
        }} icon={<UploadIcon/>}/>
        </Box>
       

    </Box>

   </Box>
  )
}

export default Sidebar