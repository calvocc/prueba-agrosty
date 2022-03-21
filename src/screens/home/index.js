import React, {useState, useContext, useEffect, useRef} from 'react';
import { Container, Row,Col,  Button } from 'react-bootstrap';
import {StylesTitulo, StylesBtnAzul, StyledCaja, StyledFormControl, StyledCard, StyledCardTitle, StyledCardTexto, StyledContainerSpin} from '../../components/Styles';

import NavbarComponent from '../../components/navbar';
import InfobarComponent from '../../components/infobar';
const HomePage = () => {
    return(
        <>
            <NavbarComponent />
            <InfobarComponent />
            
            <Container fluid>
                <Row>
                    <Col>
                        <StylesTitulo data-testid="titulo">Tienda de empleados Todo 1</StylesTitulo>
                        <Button variant="primary">Button #1</Button>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default HomePage;