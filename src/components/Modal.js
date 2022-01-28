import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './Button';
import { Link } from 'react-router-dom';
import { useModal } from '../state';

const Modal = () => {

  const ModalValue = useModal();
  const {name, price,image_link} = ModalValue.modal.modalItem;
   
  const closeModal = () => {
      ModalValue.setModal(prev => {return {...prev, modalOpen: false}})
   };

  if(!ModalValue.modal.modalOpen) {
    return null
  } else {
    return ( <ModalContainer id='modal-container' onClick={() => closeModal()}>
      <div className="container">
        <div className="row">
          <div id='modal' className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5" onClick={(e) => e.stopPropagation()}>
          <p className="h5">Item added to your cart</p>
          <img src={image_link} className='img-fluid' alt="product"/>
          <p className="h5">{name}</p>
          <p className="h5 text-primary">price : £ {price}</p>
          <Link to ='/products'>
            <ButtonContainer onClick={() => closeModal()}>
              Continue Shopping
            </ButtonContainer>
          </Link>
          <Link to ='/cart'>
            <ButtonContainer cart onClick={() => closeModal()}>
              Go to your cart
            </ButtonContainer>
          </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
    )
  }
}

export const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
  background: var(--mainBackground);
}
#modal img {
  max-height: 20rem;
}
`;

export default Modal;