import React from 'react';
import { useDetail } from '../state';
import { Link } from 'react-router-dom';
import ButtonContainer from './Button';

const Details = () => {
// access to state Context
  const DetailValue = useDetail();

  const {name, description, price, brand, image_link, rating} = DetailValue.detail;

  return (
    <div className='container py-5'>
      {/* product title */}
      <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-orange my5'>
        </div>
      </div>
      {/* end title */}
      {/* product info */}
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <img src={image_link} className='img-fluid w-100' alt={name}/>
        </div>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <p className='h4'>{name}</p>
          <div className='mt-3 mb-2'>
            <p>Brand: <span className='text-uppercase'>{brand}</span></p>
            <p>Rating: {rating}</p>
          </div>
          <p className='h4 text-primary'>
            <strong>
              Price: £ {price}
            </strong>
          </p>
          <p className='font-weight-bold mt-3 mb-0'>
            Product description:
          </p>
          <p>
            {description}
          </p>
          <div>
            <Link to='/'>
              <ButtonContainer backBtn className="d-flex">
              <i class="fas fa-backspace fa-2x"/> <span className="mt-1 ml-3">Back to products</span> 
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;
