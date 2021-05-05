import React, { createContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import MainPage from './components/MainPage';
import MyAccount from './components/MyAccount';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal'
import useFetchProducts from '../src/contexts/index';
import {GlobalState} from './state';
import LoadingModal from './components/LoadingModal'
import Incentives from './components/Incentives';

export const StoreContext = createContext();

const App = () => {
  // main state, holds fetched data/products
  const [state, setState] = useState({
    isLoading: false,
    data: [],
    error:null
  });
// fn located in context/index, contains axios.get request which runs on component mount and populates main data source of the store.
  useFetchProducts(state, setState); 

  return (
    <React.Fragment>
      <GlobalState>
      <StoreContext.Provider value={{state, setState}}>
      <Navbar />
      <Incentives/>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/products" component={ProductList}/>
        <Route exact path="/account" component={MyAccount}/>
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal/>
      <LoadingModal/>
    </StoreContext.Provider>
    </GlobalState>
  </React.Fragment>
  );
}

export default App;
