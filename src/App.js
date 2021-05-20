import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'

import { sendCartData } from './store/cart'

let isInitial = true

function App() {
  const toggle = useSelector((state) => state.toggle.showCart)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.toggle.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggle && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
