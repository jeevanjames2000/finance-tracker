import { FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


const TransactionHistory = (props) => {
 
     const applyFilter = () => {
    let filteredTransactions = [...props.transactionHistory];

    if (props.filterType !== '') {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.type === props.filterType);
    }

    if (props.filterAmount !== '') {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.amount >= parseInt(props.filterAmount));
    }

    return filteredTransactions;
  };
  return (
    <>
<Grid container >
<Grid item container xs={12} display={'flex'} spacing={2} justifyContent={'center'}>
    <Grid item container justifyContent={'center'} xs={8}>
      <Typography variant='h6'>Transaction History</Typography>
      <FormControl fullWidth>
        <Select
          value={props.filterType}
          onChange={(e) => props.setFilterType(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Filter by Type' }}
          >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Investment">Investment</MenuItem>
          <MenuItem value="Expense">Expense</MenuItem>
          <MenuItem value="Savings">Savings</MenuItem>
        </Select>
      </FormControl>
      <TextField
        placeholder='Minimum Amount'
        label='Minimum Amount'
        fullWidth
        value={props.filterAmount}
        onChange={(e) => props.setFilterAmount(e.target.value)}
        />
      <ul>
        {applyFilter().map((transaction, index) => (
            <li key={index}>
            {transaction.type}: ${transaction.amount}
          </li>
        ))}
      </ul>
        </Grid>
      </Grid>
</Grid>
    </>
  )
}

export default TransactionHistory;