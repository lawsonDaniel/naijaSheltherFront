"use client"
import { Box, Typography } from '@mui/material'
import React,{useState} from 'react'
import Sidebar from './sidebar'
import MainArea from './mainArea'
import AppTop from './AppTop'

function Page() {
  const [activePage,setActivePage] = useState<string>('OverView')
  const [showSideBar,setShowSideBar] = useState(false)
  console.log(activePage,'active pages')
  return (
    <Box display="flex" sx={{
      overflowY:"hidden",
    }}>
      {
        showSideBar &&  <Sidebar onpenSide={setShowSideBar} setActivePage={setActivePage}/> 
      }
       <Box width="100%" display="flex" sx={{
        
       }} flexDirection="column">
        <AppTop onpenSide={setShowSideBar} side={showSideBar}/>
       <MainArea activePage={activePage} setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
       </Box>
    </Box>
    )
}

export default Page