import React from 'react'
import StyledMainContent from './MainContent.styled';
import { Link } from 'react-router-dom';
import img1 from '../../imgs/article imgs/makeup1.jpg';
import img2 from '../../imgs/article imgs/makeup2.jpg';
import img3 from '../../imgs/article imgs/makeup6.jpg';

const MainContent = () => {
  return (
    <StyledMainContent className="container d-flex flex-wrap">
      <div className="item col-10 col-md-4 my-4">
        <Link to="#">
          <div className="img-container">
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className="text-container">
            <h3>Spring Makeup Essentials</h3>
            <hr />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam fugiat, perferendis totam doloribus suscipit consequatur excepturi itaque dicta aspernatur eligendi!</p>
          </div>
        </Link>
      </div>
      <div className="item col-10 col-md-4 my-4">
        <Link to="#">
          <div className="img-container">
            <img src={img2} alt="" className="img-fluid" />
          </div>
          <div className="text-container">
            <h3>How to choose best blush and highlighter shade</h3>
            <hr />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, a optio id ipsa alias consequuntur quisquam officia obcaecati at in.</p>
          </div>
        </Link>
      </div>
      <div className="item col-10 col-md-4 my-4">
        <Link to="#">
          <div className="img-container">
            <img src={img3} alt="" className="img-fluid"/>
          </div>
          <div className="text-container">
            <h3>Colorful, Youthful Eyes!</h3>
            <hr />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, provident officiis. Repudiandae eaque commodi quae voluptates enim quibusdam soluta nisi recusandae, provident et. Qui, error. Fugiat quisquam libero magnam eum?</p>
          </div>
        </Link>
      </div>
    </StyledMainContent>
  )
}

export default MainContent;
