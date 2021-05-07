import React from 'react'
import StyledMainContent from './MainContent.styled';
import { Link } from 'react-router-dom';
import img1 from '../../imgs/article imgs/makeup1.jpg';

const MainContent = () => {
  return (
    <StyledMainContent className="container-fluid d-flex flex-wrap">
      <div className="item col-12 col-md-4 my-4">
        <Link to="#">
          <div className="img-container">
            <img src={img1} alt="" className="img-fluid" width="425px" height="350px" />
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam fugiat, perferendis totam doloribus suscipit consequatur excepturi itaque dicta aspernatur eligendi!</p>
        </Link>
      </div>
      <div className="item col-12 col-md-4 my-4">
        <Link to="#">
          <div className="img-container">
            <img src={img1} alt="" className="img-fluid" width="425px" height="350px" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias doloribus aperiam porro error veritatis, et officiis deserunt eligendi temporibus ab beatae quod. Quisquam quia fuga laudantium nam quidem? Voluptas, id.</p>
        </Link>
      </div>
      <div className="item col-12 col-md-4 my-4">
        <Link to="#">
          <div className="img-container">
            <img src={img1} alt="" className="img-fluid" width="425px" height="350px" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias maxime voluptate officia qui provident accusantium illum quidem at cupiditate laboriosam! Recusandae et amet rerum earum in soluta minus? Vel, iure.</p>
        </Link>
      </div>
    </StyledMainContent>
  )
}

export default MainContent;
