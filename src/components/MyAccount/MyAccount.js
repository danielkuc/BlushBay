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
      <form >
        <label>
          Username:
          <input type="text" name="userName" value={state.userName} onChange={handleChange}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={state.password} onChange={handleChange}/>
        </label>
      </form>
    </StyledMyAccount>
  )
}

export default MyAccount;
