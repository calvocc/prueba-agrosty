import React, {useState, useContext, useEffect, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {StylesTitulo, StyleContenPage, StylesTexto, StylesCajaInfo, StylesTituloCajaInfo, StylesTable, StylesTableTRCenter, StylesBorderDivisor, StylesBtnVerde } from '../../components/Styles';

import NavbarComponent from '../../components/navbar';
import InfobarComponent from '../../components/infobar';
import InfoDespacho from '../../components/infodespacho';
const HomePage = () => {
    return(
        <>
            <NavbarComponent />
            <InfobarComponent />
            
            <StyleContenPage>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={4} md={3} lg={2}>
                            <StylesTitulo MBottom={20}>Nº Entrega 856787898</StylesTitulo>
                            <StylesCajaInfo>
                                <StylesTituloCajaInfo>Distribuidor:</StylesTituloCajaInfo>
                                <StylesTexto>Seminare S.A</StylesTexto>
                            </StylesCajaInfo>
                        </Col>
                        <Col xs={12} sm={8} md={9} lg={10}>
                            <StylesTitulo MBottom={20}>Tienda de empleados Todo 1</StylesTitulo>
                            <StylesTable responsive={true}>
                                <thead>
                                    <tr>
                                    <th>Descripcion</th>
                                    <th>Cantidad</th>
                                    <th>Lote</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <StylesTableTRCenter>8</StylesTableTRCenter>
                                        <td>#1234567654</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <StylesTableTRCenter>8</StylesTableTRCenter>
                                        <td>#1234567654</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <StylesTableTRCenter>8</StylesTableTRCenter>
                                        <td>#1234567654</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <StylesTableTRCenter>8</StylesTableTRCenter>
                                        <td>#1234567654</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <StylesTableTRCenter>8</StylesTableTRCenter>
                                        <td>#1234567654</td>
                                    </tr>
                                </tbody>
                            </StylesTable>
                        </Col>
                    </Row>
                    <StylesBorderDivisor>
                        <Col xs={12} sm={4} md={4} lg={4} className="ps-0">
                            <InfoDespacho 
                                titulo='Despacho:' 
                                descripcion={'Su producto fue correctamente\ndespachado el 21/03/2022 a las 16:35'} 
                                estado={1}
                            />
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                            <InfoDespacho 
                                titulo='Entrega Estimada:' 
                                descripcion={'Venado Tuerto\nel 21/03/2022'}
                                estado={2}
                            />
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center pe-0">
                            <StylesBtnVerde>
                                Dejar mensaje
                            </StylesBtnVerde>
                        </Col>
                    </StylesBorderDivisor>
                </Container>
            </StyleContenPage>
            
        </>
    )
}

export default HomePage;