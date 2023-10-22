import React from 'react'
import { Box,Stack,Typography,Link, TextField, } from '@mui/material'
import Button from './Button'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
   <Box position="fixed" sx={{
    background:"#fff",
    width:"100%",
    left:0,
    padding:0,
    margin:0,
    zIndex:33,
    boxShadow: "2px 0 7px rgba(51, 51, 51, 0.25)"
   }}>
       <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" p={2}>
          <Typography fontWeight="bold">NaijaShelther</Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <TextField id="outlined-search" placeholder='Search house'  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }} type="search" sx={{
              width:400
            }}/>
            <Button style={{
              backgroundColor:'rgb(12 81 63)',
              color:"#fff",
              width:100,
              boxShadow: "2px 0 7px rgba(51, 51, 51, 0.25)"
            }} name="search"/>
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center">
            <Link color="#000" sx={{
              textDecoration: "none"
            }} href="#">About</Link>
            <Link color="#000" sx={{
              textDecoration: "none"
            }}  href="#">Support</Link>
            <Link href="/auth/login" sx={{
              backgroundColor:'rgb(12 81 63)',
              padding:1,
              color:"#fff",
              width:74,
              height:"54px",
              borderRadius:2,
              display:"flex",
              textDecoration: 'none',
              alignItems:"center",
              justifyContent:"center",
              textAlign: 'center'
            }}>Log in</Link>
          </Stack>
       </Box>
   </Box>
  )
}

export default Header