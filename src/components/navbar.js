import {Navbar, Nav, Container} from "react-bootstrap";
import {BsBox, BsBell, BsPerson} from 'react-icons/bs';
import { StylesNavbar, StyleBrand, StyleNavLink } from './Styles';

const NavbarComponent = () => {
    return(
        <StylesNavbar expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <StyleNavLink href="#home"><BsBox/> Pedidos</StyleNavLink>
                    <StyleNavLink href="#link"><BsBell /> Notificaciones</StyleNavLink>
                    <StyleNavLink href="#link"><BsPerson /> Receptores</StyleNavLink>
                </Nav>
                </Navbar.Collapse>
                <StyleBrand href="#home">A</StyleBrand>
            </Container>
        </StylesNavbar>
    )
}

export default NavbarComponent;