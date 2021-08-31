import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from '../../../globalStyles'
import logo from '../../../images/logo.png'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn
} from './Navbar.elements'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon src={logo} alt="Logo"></NavIcon>
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes className="h-full"/> : <FaBars className="h-full"/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Inicio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about-us">Sobre nosotros</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                <Button to="/login" className="bg-up-100">Iniciar sesión</Button>
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </ IconContext.Provider>
        </>
    );
}

export default Navbar;