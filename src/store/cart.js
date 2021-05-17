import { createSlice } from '@reduxjs/toolkit'

const initialCartState = { items: [], totalQuantity: 0, count: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },

    removeItemFromCart(state, action) {},
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
