import React from 'react';
import { default as MainContent } from './MainContent';
import { default as SecondaryContent } from './SecondaryContent';

const MainPage = () => {
  return (
    <div className="container-fluid">
      <MainContent/>
      <SecondaryContent/>
    </div>
  )
}

export default MainPage;
