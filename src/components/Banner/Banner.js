import React from 'react';
import StyledBanner from './Banner.styled';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <StyledBanner>
      <Link to="#" className="d-flex justify-content-center">
          Exclusive Discount For New Customers - Click To Save 15%!
      </Link>  
    </StyledBanner>  
  )
}

export default Banner
