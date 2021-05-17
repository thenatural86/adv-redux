import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart'
import toggleReducer from './toggle'

const store = configureStore({
  reducer: { cart: cartReducer, toggle: toggleReducer },
})

export default store
