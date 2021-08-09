import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
  :root {
    --color-primary: #00BCD4;
    --color-background: #000000;
    --color-primary-dark: #00ADC3;
    --color-primary-text: #fff;
    --padding-container: 0 100px;
    --padding-container-sm: 0 30px;
  } 

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: var(--padding-container);
  @media screen and (max-width: 991px) {
    padding: var(--padding-container-sm);
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#00BCD4' : '#00BCD4')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    transform:scale(1.02);
    background-color: ${({ primary }) => (primary ? '#00adc3' : '#00ADC3')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;