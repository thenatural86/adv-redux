import { createSlice } from '@reduxjs/toolkit'

const initialToggleState = { showCart: false }

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: initialToggleState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart
    },
  },
})

export const toggleActions = toggleSlice.actions

export default toggleSlice.reducer
