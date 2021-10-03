import styled, {createGlobalStyle} from 'styled-components';
import {Link} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #00BCD4;
    --color-background: #000000;
    --color-primary-dark: #00ADC3;
    --color-primary-text: #fff;
    --color-primary-text-dark: #363a4f;
    --padding-container: 0 100px;
    --padding-container-sm: 0 30px;
  }

  #root {
    height: 100%;
    min-height: 100vh;
    background: url(${({background}) => (background ?? '')});
    background-position: center;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', serif;
    font-size: 16px;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  height: ${({big}) => (big ? '100%' : 'auto')};
  background-color: ${({color}) => (color ?? 'transparent')};
  background-image: url(${({image}) => image ?? ''});
  background-repeat: no-repeat;
  padding: var(--padding-container);
  @media screen and (max-width: 991px) {
    background-position: bottom;
    padding: var(--padding-container-sm);
  }
`;

export const Button = styled(Link)`
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  color: black;

  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.02);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;


export const Title = styled.h1`
  text-align: center;
  margin: 24px 0;
  font-size: 48px;
  line-height: 3rem;
  color: var(--color-primary-text-dark);
`

export const Subtitle = styled.p`
  text-align: center;
  margin: 24px 0;
  font-size: 18px;
  line-height: 24px;
  color: white;
`
export const Card = styled.div`
  background: #fff;
  height: 20%;
  margin: 20px;
  padding: 1rem;
  box-shadow: -1px 0px 14px 0px #4e4e4e26;
  color: var(--color-primary-text-dark);
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: ${({width}) => (width ?? 'auto')};
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export default GlobalStyle;