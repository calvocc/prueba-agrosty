import { Container } from 'react-bootstrap';
import {StylesFooter, StylesTexto} from './Styles';

const FooterComponen = () => {
    return(
        <Container>
            <StylesFooter>
                <StylesTexto>© 2022</StylesTexto>
                <StylesTexto>Politicas de privacidad</StylesTexto>
            </StylesFooter>
        </Container>
    )
}

export default FooterComponen;