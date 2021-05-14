import React from 'react'
import { useState } from 'react';
import StyledMyAccount from './MyAccount.styled';


const MyAccount = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  }
// onSubmit={handleSubmit}
  return (
    <StyledMyAccount className="container">
      <form >
        <label>
          Username:
          <input type="text" value={userName} onChange={handleChange}/>
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={handleChange}/>
        </label>
      </form>
    </StyledMyAccount>
  )
}

export default MyAccount;
