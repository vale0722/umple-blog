import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../../globalStyles'
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
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)

    const showButton = () => setButton(window.innerWidth > 960);

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon src={logo} alt="Logo"></NavIcon>
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Inicio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about-us">Sobre nosotros</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/login">
                                        <Button primary>Iniciar sesión</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/login">
                                        <Button primary>
                                            Iniciar sesión
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </ IconContext.Provider>
        </>
    );
}

export default Navbar;