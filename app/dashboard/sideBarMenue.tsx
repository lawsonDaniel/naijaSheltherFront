'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'

interface FunctionProps {
  menue: string,
  onClick?: any,
  icon: React.JSX.Element
}
function SideBarMenue({menue,onClick,icon}:FunctionProps) {
  if(!onClick){
    onClick = ()=>{
      console.log('clicked')
    }
  }
  return (
   
        <Box onClick={onClick} display="flex" width="100%" height={56} sx={{
        backgroundColor: 'rgb(12 81 63)',
        alignItems:"center",
        gap:2,
        padding:2,
        borderRadius:2,
        cursor:"pointer",
        color:"white"
    }}>
        {icon}
        <Typography>{menue}</Typography>
    </Box>
   
    
  )
}

export default SideBarMenue