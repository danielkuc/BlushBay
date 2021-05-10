import styled from 'styled-components';
import background from '../../imgs/article imgs/banner.jpg';

const StyledBigBanner = styled.div`
margin:2rem 0;
background-image:url(${background});
background-attachment:fixed;
background-position:center center;
  * {
    color:black;
  }
  button {
    margin-left:auto;
  }

  h3 {
    text-align:center;
  }

  article {
    padding:2rem;
  }

  .review-content {
    background:rgba(255,255,255,0.7);
  }

`

export default StyledBigBanner;