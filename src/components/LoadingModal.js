import React, { useContext } from 'react';
import {ModalContainer} from './Modal';
import { StoreContext } from '../App';
import spinner from '../imgs/spinner.gif';


const LoadingModal = () => {
  
  const StoreValue = useContext(StoreContext);

  if(StoreValue.state.isLoading){
    return (
      <>
        <ModalContainer>
          <img src={spinner} alt="loading..."/>
        </ModalContainer>
      </>
    )
  } else {
    return null;
  }
}

export default LoadingModal;
