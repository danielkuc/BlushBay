import React, { createContext, useState, useContext } from 'react';

// creating contexts for global state
const ModalContext = createContext();
const DetailContext = createContext();
const CartContext = createContext();
// end of creating contexts

// custom hooks to access each state
export const useModal = () => {
  return useContext(ModalContext);
}

export const useDetail = () => {
  return useContext(DetailContext);
}

export const useCart = () => {
  return useContext(CartContext);
}
// end of custom hooks

// GLOBAL STATE and wrapper for each state.
export const GlobalState = ({ children }) => {
  // modal 'item added to cart' state.
  const [modal, setModal] = useState({modalItem: {}, modalOpen: false});
  // products detail state, used by Details component.
  const [detail, setDetail] = useState({});
  // main cart state, array of added products.
  const [cart, setCart] = useState([]);

  return (
    <ModalContext.Provider value={{modal,setModal}}>
      <DetailContext.Provider value={{detail, setDetail}}>
        <CartContext.Provider value={{cart, setCart}}>
          {children}
        </CartContext.Provider>
      </DetailContext.Provider>
    </ModalContext.Provider>
  )
}