import React from 'react';
import StyledFooter from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter className="container-fluid d-flex flex-wrap px-md-5">
      <div className="content col-10 col-md-6 mx-auto my-3">
        <div className="d-flex flex-column justify-items-start">
          Sign up to our newsletter for exclusive discount and product alerts
          <button className="btn btn-secondary d-block mx-auto my-2">Sign Up</button>
        </div>
      </div>
      <div className="content col-10 col-md-6 mx-auto my-3">
        <div className="d-flex flex-column justify-items-start px-5 ">
          Join us on social media:
          <div className="py-1">
          <i class="fab fa-facebook-square fa-3x mx-1"/>
          <i class="fab fa-twitter-square fa-3x mx-1"/>
          <i class="fab fa-youtube fa-3x mx-1"/>
          <i class="fab fa-vimeo-square fa-3x mx-1"/>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer;
