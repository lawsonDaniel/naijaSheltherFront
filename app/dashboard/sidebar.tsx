import React from 'react'
import { Box } from '@mui/material'
import Logo from '@/components/Logo'
import SideBarMenue from './sideBarMenue'

function Sidebar() {
  return (
   <Box sx={{
    height:"100vh",
    width:300,
    postion:"fixed",
    padding:2,
   }}>
    <Box>
        <Logo/>
        <SideBarMenue/>
    </Box>

   </Box>
  )
}

export default Sidebar