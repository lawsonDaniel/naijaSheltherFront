import { Box, Typography } from '@mui/material'
import React from 'react'
import DashInfoCard from '@/components/DashInfoCard'
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Overview() {
  return (
   <Box width="100%" sx={{
    overflowY:'auto'
   }} >
        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
            <DashInfoCard 
            title="House posted"
            subTitle='5000'
            bg="rgb(255, 197, 32)"
            color="#fff"
            icon={<HomeIcon/>}
            />

        <DashInfoCard 
            title="View Count"
            subTitle='200'
            bg="rgb(97, 228, 153)"
            color="#fff"
            icon={<VisibilityIcon/>}
            />

        <DashInfoCard 
            title="View Count"
            subTitle='200'
            bg="rgb(255, 142, 85)"
            color="#fff"
            icon={<VisibilityIcon/>}
            />
        </Box>
   </Box>
  )
}

export default Overview