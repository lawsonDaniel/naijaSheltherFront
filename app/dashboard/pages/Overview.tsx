import { Box, Typography } from '@mui/material'
import React from 'react'
import DashInfoCard from '@/components/DashInfoCard'
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Overview() {
  return (
   <Box width="100%" >
        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
            <DashInfoCard 
            title="House posted"
            subTitle='5000'
            bgColors="rgba(8, 142, 190, 0.52)"
            color="#fff"
            icon={<HomeIcon/>}
            />

        <DashInfoCard 
            title="View Count"
            subTitle='200'
            bgColors="rgba(8, 142, 190, 0.52)"
            color="#fff"
            icon={<VisibilityIcon/>}
            />

        <DashInfoCard 
            title="View Count"
            subTitle='200'
            bgColors="rgba(8, 142, 190, 0.52)"
            color="#fff"
            icon={<VisibilityIcon/>}
            />
        </Box>
   </Box>
  )
}

export default Overview