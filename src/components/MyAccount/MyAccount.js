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
    <StyledMyAccount className="container">
      <form>
        <label for="userName" className="d-block">
          Username:
        </label>
          <input type="text" name="userName" id="userName" value={state.userName} onChange={handleChange}/>
        <label for="password" className="d-block">
          Password:
        </label>
          <input type="password" name="password" id="password" value={state.password} onChange={handleChange}/>
        <button className="btn btn-warning d-block">Log In</button>
      </form>
    </StyledMyAccount>
  )
}

export default MyAccount;
