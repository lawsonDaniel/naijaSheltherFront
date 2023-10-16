import { Box, Typography } from '@mui/material'
import React from 'react'
import UploadIcon from '@mui/icons-material/Upload';

function SideBarMenue() {
  return (
    <Box display="flex" width="100%" height={56} sx={{
        backgroundColor: '#0b36b8',
        alignItems:"center",
        gap:2,
        padding:2,
        borderRadius:2,
        color:"white"
    }}>
        <UploadIcon/>
        <Typography>Menu1</Typography>
    </Box>
  )
}

export default SideBarMenue