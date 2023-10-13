import React from 'react'
import { Box,Stack,Typography,Link } from '@mui/material'

function Header() {
  return (
   <Box>
       <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" p={2}>
          <Typography fontWeight="bold">NaijaShelther</Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Link color="#000" sx={{
              textDecoration: "none"
            }} href="#">About</Link>
            <Link color="#000" sx={{
              textDecoration: "none"
            }}  href="#">Support</Link>
            <Link href="/auth/login" sx={{
              backgroundColor:'#f365bb',
              padding:1,
              color:"#fff",
              width:74,
              borderRadius:2,
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