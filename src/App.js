import Form from './components/Form'
import { Button, Grid, Typography } from '@mui/material'

function App() {
  return (
    <Grid container>
  <Grid item container xs={12} spacing={4}>
    <Grid item xs={12}>
      <Typography variant='h3' style={{ backgroundColor: '#374151', color: 'white', position: 'relative' }} align='center'>
        Personal Finance Dashboard
        <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}>
          <Button variant='contained'>LogOut</Button>
        </div>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Form />
    </Grid>
  </Grid>
</Grid>
  )
}

export default App
