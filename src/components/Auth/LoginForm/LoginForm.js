import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../AuthContext';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {isLoggedIn, login,pref,setPref}=useAuth()
  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    setPref(true)
    setEmail('');
    setPassword('');
   login({email,password})
 
  };

  const handleSignup=()=>{
    setPref(false)
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '20vh', width: '400px', margin: 'auto' }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          SIGN IN
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
         <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Sign In
        </Button>
      </Grid>
         <Grid item xs={12}>
        <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
          SIGN UP
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
