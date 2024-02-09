import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    transactionData: {
      labels: ['Investment', 'Expense', 'Savings'],
      datasets: [
        {
          label: 'Transactions',
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1,
          hoverBackgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(75, 192, 192, 0.4)'],
          hoverBorderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
          data: [100, 60, 50]
        }
      ]
    },
    transactionHistory: [],
    totalBalance: 1502
  },
  reducers: {
    setTransactionData: (state, action) => {
      if (state.totalBalance - action.payload.amount < 0) {
        alert('Insufficient balance!')
        return
      }

      const updatedData = [...state.transactionData.datasets[0].data]
      switch (action.payload.transactionType) {
        case 'Investment':
          updatedData[0] += action.payload.amount
          break
        case 'Expense':
          updatedData[1] += action.payload.amount
          break
        case 'Savings':
          updatedData[2] += action.payload.amount
          break
        default:
          break
      }

      state.transactionData = {
        ...state.transactionData,
        datasets: [
          {
            ...state.transactionData.datasets[0],
            data: updatedData
          }
        ]
      }

      state.transactionHistory = [
        ...state.transactionHistory,
        {
          type: action.payload.transactionType,
          amount: action.payload.amount
        }
      ]

      state.totalBalance -= action.payload.amount
    },
    setTotalBalance: (state, action) => {
      state.totalBalance += action.payload
    }
  }
})

export const { setTransactionData, setTransactionHistory, setTotalBalance } = expenseSlice.actions

export default expenseSlice.reducer
