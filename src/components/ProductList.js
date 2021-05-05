import React, {useContext} from 'react';
import Product from './Product';
import Title from './Title';
import { StoreContext } from '../App';

const ProductList = () => {
  const StoreValue = useContext(StoreContext);

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
          {StoreValue.state.data.map(product => { return <Product key={product.id} product={product} />})}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductList;
