import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'

import { toggleActions } from './store/toggle'

let isInitial = true

function App() {
  const toggle = useSelector((state) => state.toggle.showCart)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.toggle.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        toggleActions.showNotification({
          status: 'pending',
          title: 'Sending',
          message: 'Sending cart data!',
        })
      )
      const response = await fetch(
        'https://react-movies-97451-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      )
      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
      dispatch(
        toggleActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sent cart data successfully!',
        })
      )
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendCartData().catch((error) => {
      dispatch(
        toggleActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      )
    })
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
