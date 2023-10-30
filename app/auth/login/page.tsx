/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import {
  Container,
  Stack,
  Box,
  Typography,
  Link,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import Button from '@/components/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Image from 'next/image';
import Logo from '@/components/Logo';
import { Authclass } from '@/app/api/auth.class';
import { useFormik } from 'formik';
import * as Yup from 'yup'

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [alignment, setAlignment] = React.useState('agent');

  // consr LoginSchema = 
  //handle formik values 
  const formik = useFormik({
    initialValues:{
        email:"",
        password:"",
        
    },
    onSubmit: (values:any)=>{
      values = {
        ...values,
        userType:alignment
      }
      alert(JSON.stringify(values,null,2))
    }
  })
  console.log(formik,alignment,'formik values')
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          padding: 0,
          margin:0,
          
        }}
      >
        <img
        src="/log.jpg"
        style={{
          padding: 0,
          width:"100%",
          margin: 0,
          objectFit: 'cover',
          height: "100vh"
        }}
        alt=""
      />


        <Box padding={10}>
          <Logo/>
          <Typography fontSize={24} fontWeight={500}>Sign in to</Typography>
          <Typography>If you don't have an account, registered</Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography>You can </Typography>
            <Link href="/auth/register" sx={{ textDecoration: 'none', fontWeight: 600,color:"rgb(12 81 63)" }}>Register here!</Link>
          </Stack>
          <form onSubmit={formik.handleSubmit}>
          <Stack gap={1} mt={5} width="100%">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            sx={{
            margin:"auto"  
            }}
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton sx={{width:100}} value="agent">Agent</ToggleButton>
            <ToggleButton sx={{width:100}} value="user">User</ToggleButton>
          </ToggleButtonGroup>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <TextField 
              id="email"
               onChange={formik.handleChange}
               value={formik.values.email}
                label="Enter email" variant="outlined" />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Typography fontSize={12} textAlign="right" color="#555">
              Forgot password?
            </Typography>
            <Button
              style={{
                color: '#fff',
                marginTop: 2,
                background:"rgb(12 81 63)",
                
              }}
              name="Login"
            />
          </Stack>
          </form> 
        </Box>
      </Box>
    </>
  );
}

export default Page;
