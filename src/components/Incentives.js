import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Incentives = () => {
  return (
      <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showArrows={false} showStatus={false} showIndicators={true} showThumbs={false} className="incentives">
      <Link to="#">
        <i className="fas fa-dolly"/>Free delivery over £30      
      </Link>
      <Link to="#">
        <i className="fas fa-download"/>Download the app for exclusive discounts
      </Link>
      <Link to="#">
        <i className="fas fa-piggy-bank"/>New customers discount 15%
      </Link>
      <Link to='#'>
        <i className="fas fa-recycle"/>Recycle your unused items
      </Link>   
      <Link to='#'>
        <i className="fas fa-newspaper"/>Subscribe to our newsletter
      </Link>   
      </Carousel>
  )
}

export default Incentives;
