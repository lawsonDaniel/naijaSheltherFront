import { Box, Typography } from '@mui/material'
import React from 'react'

interface FUNCTIONPROP {
    title:string,
    subTitle:string,
    bg:string,
    color:string,
    icon: React.JSX.Element
}
function DashInfoCard({title,subTitle,bg,color,icon}: FUNCTIONPROP ) {
  return (
   <Box display="flex" flexDirection="column" width={300} height={100} sx={{
    backgroundColor: "#fff",
    borderRadius:4,
    padding:2
   }}>
        <Box gap={2} display="flex" flexDirection="column">
            <Box gap={2} display="flex"  alignItems="center">
                <Box sx={{
                    width:40,
                    height:40,
                    background:bg,
                    alignItems:"center",
                    justifyContent:"center",
                    display:"flex",
                    borderRadius:2,
                    color:{color}
                }}>
                {icon}
                </Box>
                <Typography sx={{
                    color:"#666"
                }} >{title}</Typography>
            </Box>
            <Typography>{subTitle}</Typography>
        </Box>
   </Box>
  )
}

export default DashInfoCard