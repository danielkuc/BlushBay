import React from 'react';
import StyledFooter from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter className="container-fluid d-flex flex-wrap px-md-5">
      <div className="content col-10 col-md-6 mx-auto my-3 d-flex flex-column">
        <div className="d-flex flex-column justify-items-start px-2">
          Sign up to our newsletter for exclusive discount and product alerts
          <button className="btn btn-secondary d-block mx-auto my-2">Sign Up</button>
        </div>
        <div className="px-2 my-3">
          <p className="h4">
          Blush Bay Information
          </p>
          <ul>
            <li>
              <a href="#">
                About us
              </a>
            </li>
            <li>
              <a href="#">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#">
                Partnership
              </a>
            </li>
            <li>
              <a href="#">
                Referal
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content col-10 col-md-6 mx-auto my-3 d-flex flex-column">
        <div className="d-flex flex-column justify-items-start px-2 ">
          Join us on social media:
          <div className="py-1">
          <i class="fab fa-facebook-square fa-3x mx-1"/>
          <i class="fab fa-twitter-square fa-3x mx-1"/>
          <i class="fab fa-youtube fa-3x mx-1"/>
          <i class="fab fa-vimeo-square fa-3x mx-1"/>
          </div>
        </div>
        <div className="px-2 my-3">
          <p className="h4">
          Help and Information
          </p>
          <ul>
            <li>
              <a href="#">
                Delivery
              </a>
            </li>
            <li>
              <a href="#">
                Returns and exchanges
              </a>
            </li>
            <li>
              <a href="#">
                Help
              </a>
            </li>
            <li>
              <a href="#">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer;
