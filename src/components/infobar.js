import {Container, Row, Col} from "react-bootstrap";
import { StyleInfoBar, StyleInfoEstado, StyleInfoNumero } from './Styles';

const InfobarComponent = () => {
    return(
        <StyleInfoBar>
            <Container fluid>
                <Row>
                    <StyleInfoEstado xs={8} sm={8} md={8} lg={8}>En curso</StyleInfoEstado>
                    <StyleInfoNumero xs={4} sm={4} md={4} lg={4}>N. Trasporte 9898987</StyleInfoNumero>
                </Row>
            </Container>
        </StyleInfoBar>
    )
}

export default InfobarComponent;