import React, {useState, useContext, useEffect, useRef} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import {StylesTitulo, StyleContenPage, StylesTexto, StylesCajaInfo, StylesTituloCajaInfo, StylesTable, StylesTableTRCenter } from '../../components/Styles';

import NavbarComponent from '../../components/navbar';
import InfobarComponent from '../../components/infobar';
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
                </Container>
            </StyleContenPage>
            
        </>
    )
}

export default HomePage;