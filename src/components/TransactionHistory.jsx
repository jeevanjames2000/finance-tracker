import { FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const TransactionHistory = props => {
  const transactionHistory = useSelector(state => state.expense.transactionHistory)
  const [filterType, setFilterType] = useState('')
  const [filterAmount, setFilterAmount] = useState('')

  const applyFilter = () => {
    let filteredTransactions = [...transactionHistory]

    if (filterType !== '') {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.type === filterType)
    }

    if (filterAmount !== '') {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.amount >= parseInt(filterAmount))
    }

    return filteredTransactions
  }

  return (
    <>
      <Grid container>
        <Grid item container xs={12} display={'flex'} spacing={2} justifyContent={'center'}>
          <Grid item container justifyContent={'center'} xs={12}>
            <Typography variant='h6'>Transaction History</Typography>
            <FormControl fullWidth>
              <Select
                value={filterType}
                onChange={e => setFilterType(e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Filter by Type' }}
              >
                <MenuItem value=''>All</MenuItem>
                <MenuItem value='Investment'>Investment</MenuItem>
                <MenuItem value='Expense'>Expense</MenuItem>
                <MenuItem value='Savings'>Savings</MenuItem>
              </Select>
            </FormControl>
            <TextField
              placeholder='Minimum Amount'
              label='Minimum Amount'
              fullWidth
              value={filterAmount}
              onChange={e => setFilterAmount(e.target.value)}
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

export default TransactionHistory
