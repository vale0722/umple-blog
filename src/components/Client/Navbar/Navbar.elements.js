import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Nav = styled.div`
  width: 80px;
  height: 100vh;
  background: #130b03;
  position: fixed;
  left: 0;
  border-right: 1px solid #130b03;
  z-index: 9999;

  @media (max-width: 770px) {
    padding: 10px 20px;
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    border-right: 0 solid #130b03;
    border-bottom: 0 solid #130b03;
    z-index: 999999;
  }
`;

export const NavLogo = styled.div`
  display: block;
  margin: 47vh 30%;
  cursor: pointer;
  height: 100%;
  background: url(${({logo}) => logo ?? ''}) no-repeat;
  background-size: contain;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;

  &:hover, &:focus {
    background-image: url(${({click, menu, logo}) => (click ? logo : menu)});
  }

  @media (max-width: 770px) {
    margin: 0;
    max-height: 65%;
    &:hover, &:focus {
      margin: 0;
    }
  }
`;


export const NavMenu = styled.div`
  -webkit-animation: shelf .5s forwards linear alternate;
  animation: shelf .5s forwards linear alternate;
  box-sizing: content-box;
  background: #130b03;
  width: 45vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: ${({click}) => click ? 'block' : 'none'};
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  border-radius: 4px;
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    display: table;
  }
`