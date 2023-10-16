import React from 'react'
import Button from '@mui/material/Button';
import { Container,Box } from '@mui/material';
import Header from '@/components/Header';
import HouseCard from '@/components/houseCard';
function page() {
  return (
    <Container>
        <Header/>
        <Box sx={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr 1fr 1fr",
          position:"relative",
          top:96,
          
        }}>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
            <HouseCard/>
        </Box>
    </Container>
  )
}

export default page