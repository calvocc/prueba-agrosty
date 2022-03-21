import {BsClipboardCheck, BsClockHistory} from 'react-icons/bs';
import {StylesTexto, StylesTituloCajaInfo, StylesContentDespacho, StylesContentDespachoText } from './Styles';
import * as COLORES from '../constans/Colores';

const InfoDespacho = ({ titulo, descripcion, estado }) => {
    return(
        <StylesContentDespacho>
            {estado === 1 ?
                <BsClipboardCheck color={COLORES.VERDE}/>
            :
                <BsClockHistory color={COLORES.NARANJA}/>
            }
            <StylesContentDespachoText>
                <StylesTituloCajaInfo>{titulo}</StylesTituloCajaInfo>
                <StylesTexto>{descripcion}</StylesTexto>
            </StylesContentDespachoText>
        </StylesContentDespacho>
    )
}

export default InfoDespacho;