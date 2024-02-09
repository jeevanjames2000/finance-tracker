import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, FormControl, Select, MenuItem, Button, Typography, Grid } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import TransactionHistory from './TransactionHistory';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [transactionType, setTransactionType] = useState('');
  const [transactionData, setTransactionData] = useState({
    labels: ['Investment', 'Expense', 'Savings'],
    datasets: [
      {
        label: 'Transactions',
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(75, 192, 192, 0.4)'],
        hoverBorderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        data: [500, 1000, 200],
      },
    ],
  });
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [totalBalance, setTotalBalance] = useState(1500); 
  const [filterType, setFilterType] = useState('');
  const [filterAmount, setFilterAmount] = useState('');

  const onSubmit = (data) => {
    const amount = parseInt(data.amount);
    if (totalBalance - amount < 0) {
      alert("Insufficient balance!");
      return;
    }

    const updatedData = [...transactionData.datasets[0].data];
    switch (transactionType) {
      case 'Investment':
        updatedData[0] += amount;
        break;
      case 'Expense':
        updatedData[1] += amount;
        break;
      case 'Savings':
        updatedData[2] += amount;
        break;
      default:
        break;
    }
    setTransactionData({
      ...transactionData,
      datasets: [
        {
          ...transactionData.datasets[0],
          data: updatedData,
        },
      ],
    });


    setTransactionHistory([
      ...transactionHistory,
      {
        type: transactionType,
        amount: amount,
      },
    ]);

   
    setTotalBalance(totalBalance - amount);

    setTransactionType('');
  };

 
  return (
   
     <Grid container  >
    <Grid item container spacing={4} xs={12} display={'flex'} justifyContent={'space-between'}>
<Grid item container justifyContent={'center'} xs={6}>
          <Typography variant='h4' align='center'>Transactions Total Balance: ${totalBalance}</Typography>
          <Bar data={transactionData} />
</Grid>
<Grid item container justifyContent={'center'} xs={6} spacing={2}>
          <Typography variant='h4' align='center' style={{margin:'0px',padding:'0px'}}>Add New Transactions</Typography>
          <form id='form' onSubmit={handleSubmit(onSubmit)} style={{ display: 'block' }}>
            <TextField
              {...register('name')}
              autoComplete='false'
              placeholder='House Rent, Bills, Salary, Stocks, etc...'
              label='Name'
              fullWidth
              sx={{marginBottom:'1rem'}}
              />
            <FormControl fullWidth>
              <Select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Transaction Type' }}
              sx={{marginBottom:'1rem'}}

                >
                <MenuItem value="Investment">Investment</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
                <MenuItem value="Savings">Savings</MenuItem>
              </Select>
            </FormControl>
            <TextField
              {...register('amount')}
              placeholder='Amount'
              label='Amount'
              fullWidth
              sx={{marginBottom:'1rem'}}

              />
            <Button variant='contained' type='submit' fullWidth sx={{ backgroundColor: '#f00', color: '#fff' }}>
              Make Transaction
            </Button>
          </form>
          <TransactionHistory
            transactionHistory={transactionHistory}
            filterType={filterType}
            filterAmount={filterAmount}
            setFilterType={setFilterType}
            />
            </Grid>
            </Grid>
         </Grid>
    
  );
}
