import { createSlice } from '@reduxjs/toolkit'

const initialToggleState = { showCart: false, notification: null }

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: initialToggleState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    },
  },
})

export const toggleActions = toggleSlice.actions

export default toggleSlice.reducer
