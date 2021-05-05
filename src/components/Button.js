import styled from 'styled-components';

const ButtonContainer = styled.button`
padding 0.5rem 0.5rem; !important
font-size:1.1rem;
background:transparent;
border: ${props => props.backBtn ? 0 : `0.05rem solid var(--lightOrange)`};
border-color: var(--mainDark)};
border-radius: 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;

&:hover{
  ${props => props.disabled} {
    background: ${props => props.backBtn ? `none` : `var(--lightOrange)`};
    
  }
}
`;

export default ButtonContainer;