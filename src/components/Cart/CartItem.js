import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

import classes from './CartItem.module.css'

const CartItem = (props) => {
  const count = useSelector((state) => state.cart.count)
  const dispatch = useDispatch()

  const { title, quantity, total, price } = props.item

  const incrementHandler = () => {
    dispatch(cartActions.increment())
  }

  const decrementHandler = () => {
    if (count > 0) {
      dispatch(cartActions.decrement())
    }
  }
  console.log(count)
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{count}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
