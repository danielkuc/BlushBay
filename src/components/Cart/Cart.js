import React, { useEffect, useState, useContext } from 'react';
import  { useCart } from '../../state';
import Title from '../Title';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { StoreContext } from '../../App';

const Cart = () => {
  // Cart price state
  const [cartDetails, setCartDetails] = useState({
    cartSubTotal: 0,
    cartTax:0,
    cartTotal:0
  });

  
  const CartValue = useCart();
  const StoreValue = useContext(StoreContext);

  // use effect hook updated every time cart changes, adds total price of products in the cart.
  useEffect(() => {addTotals()},[CartValue.cart])

  //  sets cart to empty array and sets inCart property of all products to false.
  const clearCart = () => {
    CartValue.setCart(() => []);
    const result = StoreValue.state.data.map(object => {return{...object, inCart: false, count:0}});
    StoreValue.setState(prev => {
      return {
        ...prev,
        data: result,
        isLoading:false
      };
    }
  )
}
// increments / decrements amount of each of the products added by user to the cart.
const increment = (item) => {
  const tempCart = [...CartValue.cart];
  const incrementedValue = tempCart.find(el => el === item);
  incrementedValue.count += 1;
  CartValue.setCart(tempCart); 
}

const decrement = (item) => {
  if (item.count > 0) {
      const tempCart = [...CartValue.cart];
      const foundItem = tempCart.find(el => el === item);
      foundItem.count -=1;
      CartValue.setCart(tempCart); 
    }
    if(item.count === 0){
      removeItem(item);    
    } 
}
// removes item from cart.
const removeItem = (item) => {
  CartValue.setCart(prev => [...prev.filter(el => el !== item)]);
  const removedItem = [...StoreValue.state.data].find(el => el === item);
  removedItem.inCart = false;
  removedItem.count = 0;
}
// adds total price of all items in the cart, including tax.
  const addTotals = () => {
    let subTotal = 0;
    CartValue.cart.map(product => subTotal += Number(product.price * product.count));
    const tempTax = subTotal * 0.2;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartDetails(prev => {return {cartSubTotal: subTotal.toFixed(2), cartTax: tax, cartTotal:total.toFixed(2)}});
  }


  if(CartValue.cart.length > 0) {
    return (
      <section>
      <Title name='your' title='cart'/>
      <CartList details={{cartDetails, setCartDetails}} increment={increment} remove={removeItem} decrement={decrement} />
      <CartTotals total ={{cartDetails,setCartDetails}} clear={clearCart}/>
    </section>
    );
  } else {
    return <EmptyCart/>
  }

}

export default Cart;
