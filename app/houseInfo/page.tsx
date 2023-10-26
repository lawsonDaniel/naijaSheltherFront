/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header'
import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function page() {
  return (
   <Box>
        <Header/>
        <Box sx={{
            display:'grid',
            position:"relative",
            top:110
        }}>
            <Box sx={{
                display:'grid',
                gridTemplateColumns:"1fr 1fr",
                marginX:"auto",
                width:"1094px"
            }}>
            <Box sx={{
                borderRight:"1px solid rgba(51, 51, 51, 0.25)",
                padding:"10px",
                display:"flex",
                flexDirection:"column",
                gap:2,
                overflow:"auto",
                paddingRight: "50px"
            }}>
                <Stack flexDirection="row" sx={{
                   width: "100%",
                   alignItems: "center",
                   justifyContent: "start",
                    gap:"5px"
                }}>
                    <KeyboardBackspaceIcon sx={{
                      color: "rgba(106, 113, 128, 0.53)",
                      fontSize: ".75rem",
                        lineHeight: "1rem"
                    
                    }}/>
                    <Typography sx={{
                      color: "rgba(106, 113, 128, 0.53)",
                      fontSize: ".75rem",
                        lineHeight: "1rem"
                    
                    }}>Houses</Typography>
                </Stack>
                <img src="/card1.jpg" alt="" style={{
                    borderRadius:20,
                    width:"100%",
                    height:200,
                    objectFit:"cover",
                    marginTop:"20px",
                    marginBottom:"20px",
                }}/>
                <Stack direction="row" sx={{
                    alignItems:"baseline",
                    justifyContent:"space-between"
                }}>
                    <Typography sx={{
                        fontSize: '28px',
                        letterSpacing: "-.05em",
                        lineHeight: "36px",
                        fontWeight: "300"
                    }}>
                        House Current Location
                    </Typography>
                    <Box color="rgb(55 187 141)">
                    ₦30,000
                    </Box>
                </Stack>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize:'1.02rem'
                }}>
                Luxury 4 bedroom terrace with Bq
                </Typography>
                <Divider/>
                <Stack>
                    <Stack direction="row" sx={{
                        fontSize:".875rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )">Added On:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">22nd June 2023</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".875rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )">Category:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">For Sale</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".875rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )"> Types:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">Terraces</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".875rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )">Status:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">Active</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".875rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )"> Construction Status:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">Previously owned</Typography>
                    </Stack>
                </Stack>

            </Box>
            <Box></Box>
        </Box>
            </Box>
        </Box>
  )
}

export default page