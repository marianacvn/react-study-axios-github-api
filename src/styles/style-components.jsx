import styled, { css } from 'styled-components';


const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;


    ${props =>
      props.primary &&
      css`
        background: palevioletred;
        color: white;
      `}
    `;

  const Container = styled.div`
    text-align: center;
  `;

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;




  const Elementos = {
    Button,
    Container,
    Title,
    
  };

  
  export default Elementos