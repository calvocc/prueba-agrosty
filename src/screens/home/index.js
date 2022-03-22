import React, {useState, useContext, useEffect, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {StylesTitulo, StyleContenPage, StylesCajaInfo, StylesTituloCajaInfo, StylesTextoCaja, StylesLink } from '../../components/Styles';

const HomePage = () => {

    return(
         <StyleContenPage>
            <Container fluid>
                <StylesTitulo MBottom={20}>Enlaces rapido a pedidos disponibles</StylesTitulo>
                <Row>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <StylesLink to="/12">
                            <StylesCajaInfo>
                                <StylesTituloCajaInfo>Pedido 12</StylesTituloCajaInfo>
                                <StylesTextoCaja>LA AGRICOLA REGIONAL COOP.LTD.</StylesTextoCaja>
                            </StylesCajaInfo>
                        </StylesLink>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <StylesLink to="/28">
                            <StylesCajaInfo>
                                <StylesTituloCajaInfo>Pedido 28</StylesTituloCajaInfo>
                                <StylesTextoCaja>LA AGRICOLA REGIONAL COOP.LTD.</StylesTextoCaja>
                            </StylesCajaInfo>
                        </StylesLink>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <StylesLink to="/29">
                            <StylesCajaInfo>
                                <StylesTituloCajaInfo>Pedido 29</StylesTituloCajaInfo>
                                <StylesTextoCaja>LA AGRICOLA REGIONAL COOP.LTD.</StylesTextoCaja>
                            </StylesCajaInfo>
                        </StylesLink>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <StylesLink to="/30">
                            <StylesCajaInfo>
                                <StylesTituloCajaInfo>Pedido 30</StylesTituloCajaInfo>
                                <StylesTextoCaja>Cliente 2</StylesTextoCaja>
                            </StylesCajaInfo>
                        </StylesLink>
                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4}>
                        <StylesLink to="/37">
                            <StylesCajaInfo>
                                <StylesTituloCajaInfo>Pedido 37</StylesTituloCajaInfo>
                                <StylesTextoCaja>LA AGRICOLA REGIONAL COOP.LTD.</StylesTextoCaja>
                            </StylesCajaInfo>
                        </StylesLink>
                    </Col>
                </Row>
            </Container>
        </StyleContenPage>
    )
}

export default HomePage;