import { configureStore } from '@reduxjs/toolkit'
import expenseSlice from '../slice/expenseSlice'

const loggerMiddleware = store => next => action => {
  console.log('logger middleware')

  let result = next(action)
  return result
}

export default configureStore({
  reducer: {
    expense: expenseSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware)
})
