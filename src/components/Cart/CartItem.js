import React from 'react';

const CartItem = ({ item,increment, remove, decrement }) => {

  const {name, image_link, price, count} = item;
  const totalValue = price * count

  return (
<div className="row my-5 py-4 text-center cart-item-wrapper">
  <div className="col-10 mx-auto col-lg-2">
    <img src={image_link} style={{width:'5rem'}} alt="product" className='img-fluid'/>
  </div>
  <div className="col-10 m-auto col-lg-2">
    <span className='d-lg-none font-weight-bold'>Product:</span> {name}
  </div>
  <div className="col-10 m-auto col-lg-2">
    <span className='d-lg-none font-weight-bold'>Price:</span> £{price}
  </div>
  <div className="col-10 mx-auto col-lg-2 my-2 my-lg-auto">
    <div className="d-flex justify-content-center ">
      <div>
        <span className="btn btn-black mx-1" onClick={() => decrement(item)}>-</span>
        <span className="btn btn-black mx-1">{count}</span>
        <span className="btn btn-black mx-1" onClick={() => increment(item)}>+</span>
      </div>
    </div>
  </div>
    <div className="col-10 m-auto col-lg-2">
      <div className="card-icon" onClick={() => remove(item)}>
        <i className="fas fa-trash"></i>
      </div>
    </div>
  <div className="col-10 m-auto col-lg-2">
    <strong>item total: £ {totalValue.toFixed(2)}</strong>
  </div>
</div>
  )
}

export default CartItem
