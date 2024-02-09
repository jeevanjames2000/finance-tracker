import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField, FormControl, Select, MenuItem, Button, Typography, Grid } from '@mui/material'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import TransactionHistory from './TransactionHistory'
import { useSelector, useDispatch } from 'react-redux'
import { setTransactionData, setTotalBalance } from '../../slice/expenseSlice'

export default function FinanceTrack() {
  const transactionData = useSelector(state => state.expense.transactionData)
  const totalBalance = useSelector(state => state.expense.totalBalance)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [transactionType, setTransactionType] = useState('Investment')
  const [newTotalBalance, setNewTotalBalance] = useState('')

  Chart.register(...registerables)
  const onSubmit = data => {
    const amount = parseInt(data.amount)
    dispatch(setTransactionData({ amount: amount, transactionType: transactionType }))
    setTransactionType('')
  }

  const handleSetTotalBalance = () => {
    dispatch(setTotalBalance(parseInt(newTotalBalance)))
    setNewTotalBalance('')
  }
  const [showSetTotalBalance, setShowSetTotalBalance] = useState(false)
  return (
   <Grid container spacing={4}>
  <Grid item xs={12} md={6} container justifyContent='center' alignItems='center'>
    <Typography variant='h4' align='center'>
      Transactions Total Balance: ${totalBalance}
    </Typography>
    <Button
      variant='contained'
      onClick={() => setShowSetTotalBalance(!showSetTotalBalance)}
      sx={{ marginLeft: { xs: '0', md: '10px' } }} 
    >
      {showSetTotalBalance ? 'Cancel' : 'Add Balance'}
    </Button>
    {showSetTotalBalance && (
      <Grid item xs={12} md={6}>
        <TextField
          label='New Total Balance'
          type='number'
          value={newTotalBalance}
          onChange={e => setNewTotalBalance(e.target.value)}
          fullWidth
          sx={{ marginBottom: '1rem' }}
        />
        <Button variant='contained' onClick={handleSetTotalBalance} fullWidth>
          Set Total Balance
        </Button>
      </Grid>
    )}
    <Bar data={transactionData} />
  </Grid>
  <Grid item xs={12} md={6} container justifyContent='center'>
    <Typography variant='h4' align='center' style={{ margin: '0px', padding: '0px' }}>
      Add New Transactions
    </Typography>
    <form id='form' onSubmit={handleSubmit(onSubmit)} style={{ display: 'block', width: '100%' }}>
      <TextField
        {...register('name')}
        autoComplete='false'
        placeholder='House Rent, Bills, Salary, Stocks, etc...'
        label='Name'
        fullWidth
        sx={{ marginBottom: '1rem' }}
      />
      <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
        <Select
          value={transactionType}
          onChange={e => setTransactionType(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Transaction Type' }}
        >
          <MenuItem value='Investment'>Investment</MenuItem>
          <MenuItem value='Expense'>Expense</MenuItem>
          <MenuItem value='Savings'>Savings</MenuItem>
        </Select>
      </FormControl>
      <TextField
        {...register('amount')}
        placeholder='Amount'
        label='Amount'
        fullWidth
        sx={{ marginBottom: '1rem' }}
      />
      <Button variant='contained' type='submit' fullWidth sx={{ backgroundColor: '#f00', color: '#fff' }}>
        Make Transaction
      </Button>
    </form>
    <TransactionHistory />
  </Grid>
</Grid>
  )
}
