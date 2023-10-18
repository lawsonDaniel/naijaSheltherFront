"use client"
import { Box, Typography } from '@mui/material'
import React,{useState} from 'react'
import Sidebar from './sidebar'
import MainArea from './mainArea'
import AppTop from './AppTop'

function Page() {
  const [activePage,setActivePage] = useState<string>('OverView')
  console.log(activePage,'active pages')
  return (
    <Box display="flex" sx={{
      overflowY:'none'
    }}>
        <Sidebar setActivePage={setActivePage}/>
       <Box width="100%" display="flex" sx={{
        
       }} flexDirection="column">
        <AppTop/>
       <MainArea activePage={activePage}/>
       </Box>
    </Box>
    )
}

export default Page