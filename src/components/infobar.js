import {Container, Row, Col} from "react-bootstrap";
import { StyleInfoBar, StyleInfoEstado, StyleInfoNumero } from './Styles';

import * as COLORES from '../constans/Colores';

const InfobarComponent = ({estado, transporte}) => {
    return(
        <StyleInfoBar color={estado === 'encurso' ? COLORES.SUCCESS : estado === 'entregado' ? COLORES.AZUL : COLORES.BORDE}>
            <Container fluid>
                <Row>
                    <StyleInfoEstado xs={8} sm={8} md={8} lg={8} color={estado === 'encurso' ? COLORES.BLANCO : estado === 'entregado' ? COLORES.BLANCO : COLORES.NEGRO}>{estado}</StyleInfoEstado>
                    <StyleInfoNumero xs={4} sm={4} md={4} lg={4} color={estado === 'encurso' ? COLORES.BLANCO : estado === 'entregado' ? COLORES.BLANCO : COLORES.NEGRO}>N. Trasporte {transporte}</StyleInfoNumero>
                </Row>
            </Container>
        </StyleInfoBar>
    )
}

export default InfobarComponent;