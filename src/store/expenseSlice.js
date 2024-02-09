import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  graph_data: [],
  history: [],
  percentages: [],
  status: ''
};

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.history = 'Loading';
      state.percentages = 'Loading';
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    createTransaction: (state, action) => {
      state.status = 'created';
    },
    retrieveTransactions: (state, action) => {
  const payloadData = action.payload;
  if (payloadData && payloadData.aggregate && payloadData.percentages && payloadData.history) {
    state.graph_data = payloadData.aggregate;
    state.percentages = payloadData.percentages;
    state.history = payloadData.history;
  } else {
    // Handle the case where payload data is not structured as expected
    console.error('Payload data structure is not as expected:', payloadData);
  }
},

    deleteTransaction: (state, action) => {
      state.status = 'deleted';
    }
  }
});

export const {
  setLoading,
  setStatus,
  createTransaction,
  retrieveTransactions,
  deleteTransaction
} = expenseSlice.actions;

// Thunk action creators (if needed) can be added here

export default expenseSlice.reducer;
