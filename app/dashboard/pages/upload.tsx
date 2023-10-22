import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { typesOfHousesInNigeria } from '@/common/typeOfHouses';
import { stateInfo,stateWithLocation } from '@/common/stateInfo';
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';


function UploadHouse() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [lgaData, setLgaData] = useState([]);
  const [selectedLga, setSelectedLga] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  
  const handleTypeChange = (event:any) => {
    setSelectedType(event.target.value);
  };
  // Function to handle map click
  const handleMapClick = (e:any) => {
    setSelectedLocation(e.latLng.toJSON());
  };

  const containerStyle = {
    width: '100%',
    height: '500px'
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






  useEffect(() => {
    const stateData = [''];
    const statetest:any = stateInfo.find((state) => state.state === selectedState);
    const locationData = stateWithLocation.find((state) => state?.state.toLowerCase() === selectedState.toLowerCase())
    if(locationData){
      setLatitude(locationData?.lat)
      setLongitude(locationData?.long)
    }
    if (statetest) {
      setLgaData(statetest.lgas);
    }
  }, [selectedState]);

  return (
    <Box width="100%" height="100%" sx={{
      backgroundColor: '#fff',
      borderRadius:3,
      overflowY:'auto'
    }}>
      <Typography fontWeight="bold" paddingLeft={4} paddingRight={4} paddingBottom={2} paddingTop={2} fontSize={24}>Upload House Information</Typography>
      <Divider/>
      <Box
        sx={{
          display: 'grid',
          padding: 4,
          columnGap: 4,    
        }}
        gridTemplateColumns="1fr 1fr"
      >
        <Stack gap={2}>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <TextField label="Number of Rooms" variant="outlined" />
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <TextField
              type="number"
              label="Rent in Nigerian Naira(₦)"
              variant="outlined"
            />
          </FormControl>
        </Stack>
        <Stack gap={2}>
          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel id="house-type-label">Type of House</InputLabel>
            <Select
              labelId="house-type-label"
              id="house-type-select"
              value={selectedType}
              label="Type of House"
              onChange={handleTypeChange}
            >
              {typesOfHousesInNigeria.map((type, index) => (
                <MenuItem key={index} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <TextField label="House Number" variant="outlined" />
          </FormControl>
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'grid',
          padding: 4,
          columnGap: 4,
        }}
        gridTemplateColumns="1fr 1fr"
      >
        {/* second part */}
        
        <Stack gap={2}>
          <FormControl  sx={{ m: 1 }} variant="outlined">
            <TextField label="Street Name" variant="outlined" />
          </FormControl>
          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state-select"
              value={selectedState}
              label="State"
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {stateInfo.map((state, index) => (
                <MenuItem key={index} value={state.state}>
                  {state.state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack gap={2}>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <TextField label="More Description" variant="outlined" />
          </FormControl>
          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel id="lga-label">LGA</InputLabel>
            <Select
              labelId="lga-label"
              id="lga-select"
              value={selectedLga}
              label="LGA"
              onChange={(e) => setSelectedLga(e.target.value)}
            >
              {lgaData.length > 0 ? (
                lgaData.map((lga, index) => (
                  <MenuItem key={index} value={lga}>
                    {lga}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="">Select state</MenuItem>
              )}
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box>  
      <Stack direction="row" padding={4} width="100%"  marginTop={1}> 
        <Box width="100%" >
          <Typography sx={{
            marginBottom:2
          }}>Select House On Map</Typography>
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
        </Stack>
      </Box>
      <Box sx={{
        padding:4
      }}>
        <Typography>Upload House Image</Typography>
        <Box sx={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr 1fr",
          marginTop:5
        }}>

      <img src="/card.jpg" alt="card" style={{
          borderRadius:20,
          width:250,
          height:200,
          objectFit:"cover"
        }}/>
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent="flex-end" padding={4}>
      <Button size="large" sx={{
        backgroundColor:"rgb(12 81 63)"
      }} variant="contained" href="#contained-buttons">
        Continue
    </Button>
      </Box>
      
    </Box>
  );
}

export default UploadHouse;
