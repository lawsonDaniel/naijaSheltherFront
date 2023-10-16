import { Box, Typography } from '@mui/material'
import React from 'react'

function AppTop() {
  return (
    <Box sx={{
        backgroundColor:"#fff",
        height:60,
        background:"ddd",
        width:"100%",
        padding:3,
        position:"fixed"

    }}>
    <Typography>Top Area</Typography>
    </Box>
  )
}

export default AppTop