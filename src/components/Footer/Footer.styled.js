import styled from 'styled-components';

const StyledFooter = styled.div`
  * {
    color:black;
  }
  &:nth-child(1) {
    margin-left: 2rem;
  }
  &:nth-child(2) {
    margin-right: 2rem;
  }
  .content > div {
    font-weight:700;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
  }
`

export default StyledFooter;