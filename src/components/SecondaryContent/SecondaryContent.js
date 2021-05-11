import React from 'react';
import StyledSecondaryContent from './SecondaryContent.styled';
import img1 from '../../imgs/article imgs/makeup 5.jpg'
import img2 from '../../imgs/article imgs/makeup3.jpg'

const SecondaryContent = () => {
  return (
    <StyledSecondaryContent className="container-fluid my-5">
      <div className="container">
        <div>
          <div className="img-container">
            <img src={img1} alt="" width="150"/>
          </div>
          <article>
            <h3 className="text-center">Title</h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente laborum unde laboriosam quasi saepe soluta omnis, fuga veritatis nesciunt asperiores ad illum vero corrupti in repellendus sunt at dolor modi impedit. Numquam fuga id placeat totam debitis consequuntur nam laudantium enim, magnam esse. Repudiandae cumque tempore quaerat quidem culpa quibusdam.
          </article>
        </div>
        <div>
          <article>
            <h3 className="text-center">Title</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et tenetur aliquid magni eos commodi laboriosam tempore voluptatibus nobis aspernatur vero dolorum alias a eaque, incidunt doloribus, sint eveniet accusantium accusamus qui cum! Dolorem ut quo ex itaque enim sint mollitia quas totam eaque cumque, dolore minima recusandae, culpa vitae. Inventore ex quaerat sit nemo, impedit asperiores accusamus rerum totam hic animi magnam cupiditate eos voluptatum molestias perferendis illo nulla!
          </article>
          <div className="img-container">
            <img src={img2} alt="" width="150"/>
          </div>
        </div>
      </div>
    </StyledSecondaryContent>
  )
}

export default SecondaryContent;
