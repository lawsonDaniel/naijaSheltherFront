import { Box, Typography } from '@mui/material'
import React from 'react'

function MainArea() {
  return (
    <Box sx={{
        backgroundColor:"#eee",
        height:"100vh",
        overflow:'auto',
        width:"100%",
        padding:3

    }}>
    <Typography>Main Area</Typography>
    </Box>
  )
}

export default MainArea