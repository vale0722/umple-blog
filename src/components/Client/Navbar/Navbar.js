import React, {useState} from 'react'
import logo from '../../../images/logo.png'
import close from '../../../images/svgs/close.svg'
import menu from '../../../images/svgs/menu.svg'

import {
    Nav,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
} from './Navbar.elements'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <header>
            <Nav>
                <NavLogo logo={click ? close : logo} click={click} menu={menu} onClick={handleClick}/>
            </Nav>
            <div className={'navigation h-full' + (click ? ' open-nav' : '')}>
                <div className="container h-full">
                    <NavMenu className="p-4" click={click}>
                        <ul className="tabs active">
                            <NavItem onClick={handleClick}>
                                <NavLinks to="/" >Inicio</NavLinks>
                            </NavItem>
                            <NavItem onClick={handleClick}>
                                <NavLinks to="/about-us">Sobre nosotros</NavLinks>
                            </NavItem>
                            <NavItem onClick={handleClick}>
                                <NavLinks to="/login">Iniciar sesión</NavLinks>
                            </NavItem>
                        </ul>
                    </NavMenu>
                </div>
            </div>
            <div className="menu-bg" onClick={handleClick}/>
        </header>
    );
}

export default Navbar;