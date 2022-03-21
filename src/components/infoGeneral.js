import {StylesCajaInfo, StylesTituloCajaInfo, StylesTextoCaja} from './Styles';

const InfoGeneral = ({titulo, inforacion}) => {
    return(
        <StylesCajaInfo>
            <StylesTituloCajaInfo>{titulo}</StylesTituloCajaInfo>
            <StylesTextoCaja>{inforacion}</StylesTextoCaja>
        </StylesCajaInfo>
    )
}

export default InfoGeneral;