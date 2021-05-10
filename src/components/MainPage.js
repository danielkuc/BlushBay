import React from 'react';
import { default as MainContent } from './MainContent';
import { default as SecondaryContent } from './SecondaryContent';
import { default as BigBanner } from './BigBanner';
import { default as Footer } from './Footer';

const MainPage = () => {
  return (
    <div className="container-fluid">
      <MainContent/>
      <BigBanner/>
      <SecondaryContent/>
      <Footer/>
    </div>
  )
}

export default MainPage;
