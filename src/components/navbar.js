import {Navbar, Nav, Container} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import {BsBox, BsBell, BsPerson} from 'react-icons/bs';
import { StylesNavbar, StyleBrand, StyleNavLink } from './Styles';

const NavbarComponent = () => {
    return(
        <>
            <StylesNavbar expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <StyleNavLink><BsBox/> Pedidos</StyleNavLink>
                        <StyleNavLink><BsBell /> Notificaciones</StyleNavLink>
                        <StyleNavLink><BsPerson /> Receptores</StyleNavLink>
                    </Nav>
                    </Navbar.Collapse>
                    <StyleBrand>A</StyleBrand>
                </Container>
            </StylesNavbar>
            <Outlet />
        </>
    )
}

export default NavbarComponent;