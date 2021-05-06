import React from 'react'
import StyledMainContent from './MainContent.styled';
import { Link } from 'react-router-dom';
import img1 from '../../imgs/article imgs/makeup1.jpg';

const MainContent = () => {
  return (
    <StyledMainContent>
      <div className="container-fluid">
        <div className="item">
          <Link to="#">
            <div className="img-container">
              <img src={img1} alt="" className="img-fluid" width="425px" height="350px" />
            </div>
          </Link>
        </div>
      </div>
    </StyledMainContent>
  )
}

export default MainContent;
