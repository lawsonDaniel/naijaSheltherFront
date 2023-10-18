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
import { stateInfo } from '@/common/stateInfo';


function UploadHouse() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [lgaData, setLgaData] = useState([]);
  const [selectedLga, setSelectedLga] = useState('');

  const handleTypeChange = (event:any) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    const stateData = [''];
    const statetest:any = stateInfo.find((state) => state.state === selectedState);
    if (statetest) {
      setLgaData(statetest.lgas);
    }
  }, [selectedState]);

  return (
    <Box width="100%" height="100%" sx={{
      backgroundColor: '#fff',
      borderRadius:3,
      
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
      </Box>
      <Box width="100%" display="flex" justifyContent="flex-end" padding={4}>
      <Button size="large" variant="contained" href="#contained-buttons">
        Continue
    </Button>
      </Box>
      
    </Box>
  );
}

export default UploadHouse;
