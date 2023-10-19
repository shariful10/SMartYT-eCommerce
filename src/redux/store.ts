import shoppingReducer from "./shoppingSlice"
import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch