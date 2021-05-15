import React from 'react'
import { useState } from 'react';
import StyledMyAccount from './MyAccount.styled';


const MyAccount = () => {
  // controlled element state :
  const [state, setState] = useState({
    userName:'',
    password:''
  });


  // change handler for controlled component.
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,[e.target.name]: value
    });
  }
// onSubmit={handleSubmit} !!!
  return (
    <StyledMyAccount className="container d-flex flex-wrap">
      <div className="wrapper col-md-6">
        <span className="h5 d-block my-2 py-2">
          Registered customers : 
        </span>
        <form>
          <fieldset>
            <label for="userName" className="d-block">
              Username:
            </label>
              <input type="text" name="userName" value={state.userName} onChange={handleChange}/>
          </fieldset>
          <fieldset>
            <label for="password" className="d-block">
              Password:
            </label>
              <input type="password" name="password" value={state.password} onChange={handleChange}/>
              <div className="button-wrapper my-3">
                <button className="btn btn-warning">Log In</button>
              </div>
          </fieldset>
        </form>
      </div>
      <div className="wrapper col-md-6">
        <span className="h5 d-block my-2 py-2">
          New Customers:
        </span>
        <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
        <div className="button-wrapper">
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </StyledMyAccount>
  )
}

export default MyAccount;
