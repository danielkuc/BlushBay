import React from 'react';
import CartItem from './CartItem'
import { useCart } from '../../state';


const CartList = (props) => {
  const CartValue = useCart();
  const {cart} = CartValue;

  const {cartDetails, setCartDetails} = props.details;

  return (
    <div className='container'>
        {cart.map(item => {return <CartItem key={item.id} item={item} value={{cartDetails, setCartDetails}} increment={props.increment} remove={props.remove} decrement={props.decrement}/>})}
    </div>
  )
}

export default CartList;