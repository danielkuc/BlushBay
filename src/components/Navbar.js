import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../state';
import mainLogo from '../imgs/logo.svg';
import MyCart from './MyCart/MyCart';
import { Button, Collapse } from 'react-bootstrap';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const CartValue = useCart();
  const length = CartValue.cart.length;
  // 

  return (
<<<<<<< HEAD
    <div className="container">
      <NavWrapper className="navbar navbar-expand-md navbar-light">
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
              MyCart
            </Link>
            </li>
          </ul>
        </div>
      </Collapse>
      </NavWrapper>
    </div>
=======
    <NavWrapper className="navbar navbar-expand navbar-dark px-sm-5 justify-content-center">
      <ul className="navbar-nav align-items-center">
        <li className="nav-item mx-lg-5 mx-md-3 mx-sm-2">
          <Link to="/products">
          <span>Products</span><i class="fab fa-product-hunt"></i> 
          </Link>
        </li>
        <li className="nav-item mx-lg-5 mx-md-3 mx-sm-2">
          <Link to="/" >
          <span>Blush Bay</span><img src={mainLogo} alt="main logo"/>
          </Link>        
        </li>
        <li className="nav-item mx-lg-5 mx-md-3 mx-sm-2">
          <Link to="/account" className="nav-item">
          <span>My Account</span><i class="fas fa-user-circle"></i>
          </Link>
        </li>
        <li className="nav-item mx-lg-5 mx-md-3 mx-sm-2">
          <Link to="/cart" className="ml-auto position-relative cart-link">
            <MyCart length={length}/>
          </Link>
        </li>
      </ul>
    </NavWrapper>

>>>>>>> 2d19989ecb841cfdbae9a14ff438394f18b494db
  )
}

const NavWrapper = styled.nav`
// margin-top:3rem;
// border-top:2px solid var(--mainDark);
// border-bottom:2px solid var(--mainDark);
// background: var(--mainOrange);

//   * {
//     font-size: 1.2rem ;
//     color:white;
//   }

//   i {
//     padding-left:.5rem;
//   }

<<<<<<< HEAD
//   li {
//     padding:0 2rem;
//   }

//   a {
//     text-decoration: none;
//   }
//   @media(max-width:890px) {
//     li span {
//       display:none;
//     }
//   }
=======
  a {
    text-decoration: none;
  }
  @media(max-width:800px) {
    * {
      font-size:1rem;
    }
  }
>>>>>>> 2d19989ecb841cfdbae9a14ff438394f18b494db

`

export default Navbar;

{/* <NavWrapper className="navbar navbar-expand navbar-dark px-sm-5 justify-content-center">
<ul className="navbar-nav align-items-center">
  <li className="nav-item">
    <Link to="/products">
    <span>Products</span><i class="fab fa-product-hunt"></i> 
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/" >
    <span>Blush Bay</span><img src={mainLogo} alt="main logo"/>
    </Link>        
  </li>
  <li className="nav-item">
    <Link to="/account" className="nav-item">
    <span>My Account</span><i class="fas fa-user-circle"></i>
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/cart" className="ml-auto position-relative cart-link">
      <MyCart length={length}/>
    </Link>
  </li>
</ul>
</NavWrapper> */}