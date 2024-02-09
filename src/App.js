
import Form from './components/Form';
import { useDispatch } from 'react-redux';
import { retrieveTransactions } from './store/expenseSlice';
import { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTransactions());
  }, [dispatch]);

  return (
<Grid container >
  <Grid item container xs={12} spacing={4}>
<Grid item xs={12} >
      <Typography variant='h3' style={{backgroundColor: '#374151',color:'white'}}>Chart Examples</Typography>
</Grid>
      <Grid item xs={12}>
          <Form />
   </Grid>
  </Grid>
</Grid>
   
  );
}

export default App;
