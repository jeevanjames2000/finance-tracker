import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../AuthContext';
const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {setPref}=useAuth()

  const handleSignup = () => {
   setPref(false)
  };
    const handleLogin = () => {
   setPref(true)
  };

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
          SIGN UP
        </Typography>
      </Grid>
         <Grid item xs={12}>
        <TextField
          label="User Name"
          type="text"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
          SIGN UP
        </Button>
      </Grid>
         <Grid item xs={12}>
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          SIGN IN
        </Button>
      </Grid>
    </Grid>
  );
};

export default SignUpForm;
