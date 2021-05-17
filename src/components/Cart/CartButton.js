import { useDispatch } from 'react-redux'
import { toggleActions } from '../../store/toggle'

import classes from './CartButton.module.css'

const CartButton = (props) => {
  const dispatch = useDispatch()

  const toggleCart = () => {
    dispatch(toggleActions.toggle())
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  )
}

export default CartButton
