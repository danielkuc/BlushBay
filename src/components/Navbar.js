import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../state';
import mainLogo from '../imgs/logo.svg';
import MyCart from './MyCart/MyCart';
import { Button, Collapse } from 'react-bootstrap';
import { useChangeBackgroundOnScroll } from '../hooks';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const CartValue = useCart();
  const length = CartValue.cart.length;

  useChangeBackgroundOnScroll('navbar', 60, 'var(--lightOrange)');

  return (
      <NavWrapper className="navbar sticky-top navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={mainLogo} alt="main logo" height="50" />
          Blush Bay
        </Link>
        <Button
        className="navbar-toggler"
        onClick={() => setOpen(!open)}
        aria-controls="toggleMobileMenu"
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <Collapse in={open}>
        <div className="navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav text-center ml-auto">
            <li>
              <Link to="/products" className="nav-link">
                Products<i class="fab fa-product-hunt"></i> 
              </Link>
            </li>
            <li>
              <Link to="/account" className="nav-link">
                My Account<i class="fas fa-user-circle"></i>
              </Link>
            </li>
            <li>
            <Link to="/cart" className="nav-link">
              <MyCart length={length}/>
            </Link>
            </li>
          </ul>
        </div>
      </Collapse>
      </NavWrapper>
  )
}

const NavWrapper = styled.nav`
margin-top:3rem;
border-top:2px solid var(--mainDark);
border-bottom:2px solid var(--mainDark);
padding:0 10vw !important;
background:transparent;
  .nav-link {
    color:#000 !important;
    font-size: 1.2rem;
    letter-spacing:.1rem;
  }
  .btn-primary {
    border-color:black !important;
    background:#fff !important;
    &:hover, &:active, &:focus{
      background-color:white;
    }
  }

  i{
    margin:10px ;
  }

`

export default Navbar;