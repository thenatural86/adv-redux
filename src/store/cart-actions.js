import { toggleActions } from './toggle'
import { cartActions } from './cart'
// import { useDispatch } from 'react-redux'

export const fetchCartData = () => {
  // const dispatch = useDispatch()

  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-movies-97451-default-rtdb.firebaseio.com/cart.json'
      )
      if (!response.ok) {
        throw new Error('could not fetch cart data!')
      }
      const data = await response.json()

      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceCart(cartData))
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      )
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data!',
      })
    )

    const sendRequest = async () => {
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
    }

    try {
      await sendRequest()

      dispatch(
        toggleActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sent cart data successfully!',
        })
      )
    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      )
    }
  }
}
