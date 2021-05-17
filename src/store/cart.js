import { createSlice } from '@reduxjs/toolkit'

const initialCartState = { count: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
