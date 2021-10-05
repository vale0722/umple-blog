import React, {useState} from 'react'
import logo from '../../../images/svgs/logo.svg'
import close from '../../../images/svgs/close.svg'
import menu from '../../../images/svgs/menu.svg'
import {
    Nav,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
} from './Navbar.elements'
import {userActions} from "../../../services/slices";
import {getUser} from "../../../helpers";

function Navbar({active, items}) {
    const [click, setClick] = useState(false)
    const user = getUser()
    const handleClick = () => setClick(!click)

    const navItems = items.map((item, i) => (
        <NavItem className={item.route === active ? 'current' : ''} key={i} onClick={handleClick}>
            <NavLinks to={item.route}>{item.name}</NavLinks>
        </NavItem>))

    return (
        <header>
            <Nav>
                <NavLogo logo={click ? close : logo} click={click} menu={menu} onClick={handleClick}/>
            </Nav>
            <div className={'navigation h-full overflow-none' + (click ? ' flex open-nav' : ' hidden')}>
                <div className="container h-full">
                    <NavMenu className="p-4" click={click}>
                        <ul className="tabs active">
                            {navItems}
                            {user ? (
                            <NavItem>
                                <NavLinks to='/login' onClick={() => userActions.logout()}>Cerrar Sesión</NavLinks>
                            </NavItem>) : ''}
                        </ul>
                    </NavMenu>
                </div>
            </div>
            <div className="menu-bg" onClick={handleClick}/>
        </header>
    );
}

export default Navbar;