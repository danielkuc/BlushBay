import React from 'react';
import StyledBigBanner from './BigBanner.styled';
import image from '../../imgs/article imgs/makeup4.jpg';

const BigBanner = () => {
  return (
    <StyledBigBanner>
      <div className="container py-4">
        <h3>Review of the week</h3>
        <div className="review-content d-flex justify-items-center align-items-center p-2">
          <div>
            <img src={image} alt="" width="150" height="150"/>
          </div>
          <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa impedit hic quod aspernatur molestiae accusantium eveniet magnam aliquam iure asperiores.</article>
        </div>
        <button className="btn btn-warning d-block mx-auto my-1">Shop Now!</button>
      </div>
    </StyledBigBanner>
  )
}

export default BigBanner;
