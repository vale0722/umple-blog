import { Container } from '../../../globalStyles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
 background: var(--color-background);
 height: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1.2rem;
 position: sticky;
 top: 0;
 box-shadow: 3px 3px 9px 0px #00000061;
 z-index: 999;
`;

export const NavbarContainer = styled(Container)`
 display: flex;
 justify-content: space-between;
 height: 80px;
 ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;


export const NavIcon = styled.img`
    height: 100%;
    width: 100%;
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    padding: 0.5rem 1rem;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: var(--color-background);
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  border-radius: 4px;

  &:hover {
    border-bottom: 2px solid var(--color-background);
  }

    @media screen and (max-width: 960px) {
      width: 100%;
      &:hover {
      background: #00ADC35c;
      transition: all 0.6s ease;
      border: none;
    }
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

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 83px;
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 0px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
`