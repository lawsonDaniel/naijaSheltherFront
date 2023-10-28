"use client"
/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header'
import { Box, Divider, Stack, Typography,Pagination } from '@mui/material'
import React, { useEffect, useState }  from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';
import WcIcon from '@mui/icons-material/Wc';
import StraightenIcon from '@mui/icons-material/Straighten';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import Carousel from "nuka-carousel"
import HouseCard from '@/components/houseCard';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import Button from '@/components/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Page() {
    const [latitude, setLatitude] = useState(9.203496);
  const [longitude, setLongitude] = useState(12.495390);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showContact,setShowContact] = useState(false);
  // Function to handle map click
  const handleMapClick = (e:any) => {
    setSelectedLocation(e.latLng.toJSON());
  };

  const containerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '15px'

  };
  
  const center = {
    lat: Number(latitude) || -3.745,
    lng: Number(longitude) || -38.523
  };
console.log(center,'center')
  //google maps
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState<any>(null)

  const onLoad = React.useCallback(function callback(map:any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])

console.log(isLoaded,'isLoaded')


  return (
   <Box>
        <Header/>
        <Box sx={{
            display:'grid',
            position:"relative",
            top:110,
            padding:10
        }}>
            <Box sx={{
                display:'grid',
                gridTemplateColumns:"2fr 1fr",
                marginX:"auto",
                width:"1094px"
            }}>
            <Box sx={{
                borderRight:"1px solid rgba(51, 51, 51, 0.25)",
                padding:"10px",
                display:"flex",
                flexDirection:"column",
                gap:2,
                height:"fit-content",
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
               
                 <Carousel>
      <img  src="./cardbd.jpg" style={{
            borderRadius:20,
                    width:"100%",
                    height:400,
                    objectFit:"cover",
                    marginTop:"20px",
                    marginBottom:"20px",
                    border:"4px solid #000",
          }} alt=""/>
      <img  src="./cardbd.jpg" style={{
            borderRadius:20,
                    width:"100%",
                    height:400,
                    objectFit:"cover",
                    marginTop:"20px",
                    marginBottom:"20px",
                    border:"4px solid #000",
          }} alt="" />
      <img  src="./cardbd.jpg" style={{
            borderRadius:20,
                    width:"100%",
                    height:400,
                    objectFit:"cover",
                    marginTop:"20px",
                    marginBottom:"20px",
                    border:"4px solid #000",
          }} alt=""/>
      <img  src="./cardbd.jpg" style={{
            borderRadius:20,
                    width:"100%",
                    height:400,
                    objectFit:"cover",
                    marginTop:"20px",
                    marginBottom:"20px",
                    border:"4px solid #000",
          }} alt=""/>
          </Carousel>
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
                    ₦30,000/year
                    </Box>
                </Stack>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize:'1.02rem'
                }}>
                Luxury 4 bedroom terrace with Bq
                </Typography>
                <Divider/>
                <Box sx={{
                    display:"flex",
                   flexWrap:"wrap",
                   width:"100%",
                   gap:"10px",
                   
                }}>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )">Added On:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">22nd June 2023</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )">Category:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">For Sale</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )"> Types:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">Terraces</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )">Status:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">Active</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                        <Typography color="rgb(0 0 0 )"> Construction Status:</Typography>
                        <Typography color="rgba(106, 113, 128, 0.53)">Previously owned</Typography>
                    </Stack>
                </Box>
                <Divider/>
                <Box sx={{
                    display:"flex",
                    flexWrap:"wrap",
                    width:"100%",
                    gap:"10px",
                }}>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                       <BedIcon/>
                        <Typography color="rgba(106, 113, 128, 0.53)">6 rooms</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                       <BathroomIcon/>
                        <Typography color="rgba(106, 113, 128, 0.53)">6 Bathroom</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                       <WcIcon/>
                        <Typography color="rgba(106, 113, 128, 0.53)">6 Toilet</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                       <StraightenIcon/>
                        <Typography color="rgba(106, 113, 128, 0.53)">Unit Size (Sqm)</Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        fontSize:".675rem"
                    }} gap={1}>
                       <ApartmentIcon/>
                        <Typography color="rgba(106, 113, 128, 0.53)">1 unit Available</Typography>
                    </Stack>
                </Box>
                <Divider/>
                <Box
                sx={{
                    display:"flex",
                    flexWrap:"wrap",
                    width:"100%",
                    gap:"10px",
                }}
                >
                    <Stack sx={{
                        border:"4px solid #000",
                        borderRadius:"15px",
                        height:"100px",
                        width:"100px",
                        backgroundColor:"rgb(255 197 1)",
                        alignItems: "center",
                            justifyContent: "center"
                    }}>
                        <CategoryIcon sx={{
                            fontSize:"40px"
                        }}/>
                        <Typography>Category</Typography>
                        <Typography fontSize=".675rem" >For Rent</Typography>
                    </Stack>
                    <Stack sx={{
                        border:"4px solid #000",
                        borderRadius:"15px",
                        height:"100px",
                        width:"100px",
                        backgroundColor:"rgb(255 197 1)",
                        alignItems: "center",
                            justifyContent: "center"
                    }}>
                        <InfoIcon sx={{
                            fontSize:"40px"
                        }}/>
                        <Typography>Status</Typography>
                        <Typography fontSize=".675rem" >Available</Typography>
                    </Stack>
                    <Stack sx={{
                        border:"4px solid #000",
                        borderRadius:"15px",
                        height:"100px",
                        width:"100px",
                        backgroundColor:"rgb(255 197 1)",
                        alignItems: "center",
                            justifyContent: "center"
                    }}>
                        <CalendarMonthIcon sx={{
                            fontSize:"40px"
                        }}/>
                        <Typography>Posted</Typography>
                        <Typography fontSize=".675rem" >100 days</Typography>
                    </Stack>
                    <Stack sx={{
                        border:"4px solid #000",
                        borderRadius:"15px",
                        height:"100px",
                        width:"100px",
                        backgroundColor:"rgb(255 197 1)",
                        alignItems: "center",
                            justifyContent: "center"
                    }}>
                        <HomeIcon sx={{
                            fontSize:"40px"
                        }}/>
                        <Typography>Type</Typography>
                        <Typography fontSize=".675rem" >Duplex</Typography>
                    </Stack>
                    
                </Box>
                <Divider/>
                <Box sx={{
                        border:"4px solid #000",
                        borderRadius:"15px",
                        padding:"10px", 
                        background:"rgb(0 0 0)",
                        color:"#fff"
                    }}>
                        <Typography fontSize=".975rem">
                        A Newly built Fully Detached Four Bedroom Duplex with two bedroom guest chalet and a bq with ample parking space in a serene neighbourhood. Location :Mab Global Estate, Gwarinpa, Abuja. Rent: 8M per annum. 7M x 2 years RCD500k Estate Service Charge deposit: 120K
                        </Typography>
                </Box>
            </Box>
            <Box sx={{
                 padding:"20px",
                 display:"flex",
                 flexDirection:"column",
                 gap:2,
                 height:"fit-content",
                 overflow:"auto",
            }}>
                <Typography sx={{
                        fontSize: '28px',
                        letterSpacing: "-.05em",
                        lineHeight: "36px",
                        fontWeight: "300"
                    }}>House Location On Map</Typography>
                <Box sx={{
                    border:"4px solid #000",
                    borderRadius:"15px"
                }}>
                {
            isLoaded ? (
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={handleMapClick} // Add this onClick handler
                >
                {selectedLocation && (
                    <Marker
                        position={selectedLocation}
                    />
                    )}
                </GoogleMap>
                ) : <></>
            }
                </Box>
                <Divider/>
               <Box sx={{
            //  border:"4px solid #000",
             borderRadius:"15px",
             padding:"10px", 
             width:"100%",
             background:"rgba(240, 238, 234, 0.97)",
             color:"#ff2626",
             height:"fit-content",
             
             
        }} >
            <PrivacyTipIcon sx={{
                fontSize:"40px"
            }}/>
            <ul style={{
                listStyle:"outside",
                padding:"20px"
            }}>
                <li>Don't pay inspection fees</li>
                <li>If possible, take friends along for viewing</li>
                <li>Check everything carefully to make sure it's what you need</li>
                <li>Don't pay in advance if you can't move in immediately</li>
            </ul>
               </Box>
               <Divider/>
               <Box sx={{
                display:`${showContact ? "flex": "none"}`,
                flexDirection:"column",
                gap:"10px",
                border:"4px solid #000",
                borderRadius:"15px",
                padding:"10px",
                

               }}>
                <Typography>Contact info</Typography>
                <Stack direction="row" gap="10px" alignItems="center" justifyContent="space-evenly">
                    <LocalPhoneIcon/>
                    <Typography>08032452012</Typography>
                    <Button name="copy" style={{
                        color:"rgb(55 187 141)",
                        border:"1px solid rgb(55 187 141)",
                        padding:2,
                        height:"30px",
                        width:"80px"
                    }}/>
                </Stack>
                <Stack direction="row" gap="10px" alignItems="center" justifyContent="space-evenly">
                    <EmailIcon/>
                    <Typography>Agent@naija.com</Typography>
                    <Button name="copy" style={{
                        color:"rgb(55 187 141)",
                        border:"1px solid rgb(55 187 141)",
                        padding:2,
                        height:"30px",
                        width:"80px"
                    }}/>
                </Stack>
                <Divider />
                <Stack>
                    <Typography>Inform the seller you got their number on NaijaShelther so they know where you came from</Typography>
                </Stack>
               </Box>
               <Button
               onClick={()=>{
                setShowContact((a:any)=> !a)
               }}
               style={{
                color:"#000",
                backgroundColor:"rgb(55 187 141)"
               }} name={!showContact ? "show agent contact" : "hide agent contact" }/>
            </Box>
        </Box>
        <Box sx={{
             border:"4px solid #000",
             borderRadius:"15px",
             padding:"10px", 
             width:"100%",
             background:"rgb(55 187 141)",
             color:"#fff",
             height:"fit-content",
             marginTop:10
        }}>
            <Typography fontSize=".85rem" sx={{
                backgroundColor:"rgb(255 197 1)",
                width:"fit-content",
                height:"fit-content",
                border:"2px solid black",
                borderRadius:"15px",
                color:"#000",
                padding:1,
                textAlign:"center",
                fontWeight:"bold"
            }}>Similar adverts
            </Typography>
            <Box sx={{
      display: "grid",
      gridTemplateColumns: "1fr",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "100%",
      gap: 5,
      // Media query for larger screens
      '@media (min-width: 768px)': {
        gridTemplateColumns: "1fr 1fr",
      },
      // Media query for even larger screens
      '@media (min-width: 1024px)': {
        gridTemplateColumns: "1fr 1fr 1fr",
      },
    }}>
         <HouseCard  click={()=>{}} />
         <HouseCard  click={()=>{}} />
         <HouseCard  click={()=>{}} />
         <HouseCard  click={()=>{}} />
         <HouseCard  click={()=>{}} />
         <HouseCard  click={()=>{}} />
    </Box>
   <Box sx={{
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"10px",
    marginButtom:"10px",
    padding:1
   }}>
   <Pagination sx={{
        margin:"auto"
    }} count={10}  />
   </Box>
        </Box>
            </Box>
        </Box>
  )
}

export default Page