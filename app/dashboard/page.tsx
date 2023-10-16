import { Box, Typography } from '@mui/material'
import React from 'react'
import Sidebar from './sidebar'
import MainArea from './mainArea'
import AppTop from './AppTop'

function page() {
  return (
    <Box display="flex">
        <Sidebar/>
       <Box width="100%" display="flex" flexDirection="column">
        <AppTop/>
       <MainArea/>
       </Box>
    </Box>
    )
}

export default page