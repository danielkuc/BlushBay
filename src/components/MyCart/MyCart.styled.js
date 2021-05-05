import styled from 'styled-components';

export const StyledMyCart = styled.button`
background: transparent;
border: none;

  .cart-basket {
  font-size: 0.8rem;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  color: #fff;
  background-color: orangered;
  border-radius: 50%;
  }

  i {
    padding-left:.5rem;
  }

  @media (max-width:770px) {
    span {
      display:none;
    }
  }
`