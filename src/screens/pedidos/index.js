import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import {StylesTitulo, StyleContenPage, StylesTable, StylesTableTRCenter, StylesBorderDivisor, StylesBtnVerde, StylesContentSpinner, StylesTableTRRight, StylesContenTable } from '../../components/Styles';

import InfobarComponent from '../../components/infobar';
import InfoDespacho from '../../components/infodespacho';
import InfoGeneral from '../../components/infoGeneral';
import clienteAxios from '../../components/axios';

const PedidosPage = () => {

    let { pedido } = useParams();
    const [loader, setLoader] = useState(true);
    const [dataPedido, setDataPedido] = useState();
    const [windowHeight, setWindowHeight] = useState(0);
    
    let resizeWindow = () => {
      setWindowHeight(window.innerHeight);
    };

    const getData = async (num) => {
        try {
            const result = await clienteAxios.get(`/${num}`);
            setDataPedido(result.data);
            console.log(result.data);
        } catch (error) {
            if(error.response.status === 404){
                console.log('redirigir')
            } else {
                console.log(error.response)
            }
        } finally {
            console.log('final')
            setLoader(false)
        }
    }

    const formatDate = (date) => {
        let fecha = new Date(date);
        return `${fecha.getMonth()+1}/${fecha.getDate()}/${fecha.getFullYear()} a las ${fecha.getHours()}:${fecha.getMinutes()}`
    }

    const formEntrega = (date) => {
        let fecha = new Date(date);
        console.log(fecha.getHours());
        const momento = fecha.getHours() <= 12 ? 'mañana' : fecha.getHours() <= 19 ? 'tarde' : fecha.getHours() >= 19 ? 'noche' : 'sin calcular'
        return `${fecha.getMonth()+1}/${fecha.getDate()}/${fecha.getFullYear()} a la ${momento}`
    }
  
    useEffect(() => {
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    useEffect( () => {
        if(pedido){
            getData(pedido);
        }
    }, [pedido])

    return(
        <>
            { loader ? 
            
                <StylesContentSpinner windowHeight={windowHeight - 98}>
                    <Spinner animation="border" />
                </StylesContentSpinner>
                :
                <>
                <InfobarComponent estado={dataPedido?.estado} transporte={dataPedido?.transporte.codigo}/>
                <StyleContenPage>
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={4} md={3} lg={2}>
                                <StylesTitulo MBottom={10}>Nº Entrega {dataPedido?.numero_pedido ? dataPedido.numero_pedido : 'Sin asignar'}</StylesTitulo>
                                <InfoGeneral 
                                    titulo="Distribuidor:" 
                                    inforacion={dataPedido?.distribuidor?.nombre}
                                />
                                <InfoGeneral 
                                    titulo="Destinatario:" 
                                    inforacion={dataPedido?.destinatario?.nombre}
                                />
                                <InfoGeneral 
                                    titulo="Cliente:" 
                                    inforacion={dataPedido?.cliente?.nombre}
                                />
                                <InfoGeneral 
                                    titulo="Nº de remito:" 
                                    inforacion={dataPedido?.numero_remito}
                                />
                            </Col>
                            <Col xs={12} sm={8} md={9} lg={10}>
                                <StylesTitulo MBottom={10}>Articulos</StylesTitulo>
                                <StylesContenTable windowHeight={windowHeight - 300}>
                                    <StylesTable responsive={true}>
                                        <thead>
                                            <tr>
                                            <th>Descripcion</th>
                                            <th>Cantidad</th>
                                            <th>Lote</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { dataPedido?.detalle.map(item => {
                                                return(
                                                    <tr key={item.id}>
                                                        <td>{item.material_descripcion}</td>
                                                        <StylesTableTRCenter>{item.cantidad}</StylesTableTRCenter>
                                                        <StylesTableTRRight>{item.lote}</StylesTableTRRight>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </StylesTable>
                                </StylesContenTable>
                            </Col>
                        </Row>

                        <StylesBorderDivisor>
                            <Col xs={12} sm={4} md={4} lg={4} className="ps-0">
                                <InfoDespacho 
                                    titulo='Despacho:' 
                                    descripcion={`Su producto fue correctamente\ndespachado el ${formatDate(dataPedido?.transporte?.despachado_el)}`} 
                                    estado={1}
                                />
                            </Col>
                            <Col xs={12} sm={4} md={4} lg={4}>
                                <InfoDespacho 
                                    titulo='Entrega Estimada:' 
                                    descripcion={`Venado Tuerto\nel ${formEntrega(dataPedido.entrega_estimada_el)}`}
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
            }
            
        </>
    )
}

export default PedidosPage;