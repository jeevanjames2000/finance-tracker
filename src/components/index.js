import React from 'react';
import FinanceTrack from './Source/FinanceTrack';
import { Button, Grid, Typography } from '@mui/material'
import { useAuth } from './Auth/AuthContext';


const Main = () => {
  const {logout}=useAuth()

 const handleLogout=()=>{
    logout()
  }

  return(
    <>
        <Grid container>
  <Grid item container xs={12} spacing={4}>
    <Grid item xs={12}>
      <Typography variant='h3' style={{ backgroundColor: '#374151', color: 'white', position: 'relative' }} align='center'>
        Personal Finance Dashboard
        <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}>
          <Button variant='contained' onClick={handleLogout}>LOGOUT</Button>
        </div>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <FinanceTrack />
    </Grid>
  </Grid>
</Grid>
    </>
  )
}

export default Main;