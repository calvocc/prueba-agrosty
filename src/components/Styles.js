import styled from 'styled-components';
import {Navbar, Nav, Button, Col, Table} from "react-bootstrap";

import * as COLORES from '../constans/Colores';

export const StyleGeneral = styled.div`
    background-color: ${COLORES.FONDO};
    min-height: ${props => props.windowHeight}px;
`

export const StylesNavbar = styled(Navbar)`
    background: ${COLORES.AZUL}; 
    background: -moz-linear-gradient(left,  ${COLORES.AZUL} 36%,  ${COLORES.VERDE} 100%); 
    background: -webkit-linear-gradient(left,  ${COLORES.AZUL} 36%,  ${COLORES.VERDE} 100%);
    background: linear-gradient(to right,  ${COLORES.AZUL} 36%,  ${COLORES.VERDE} 100%);
    color: ${COLORES.TEXTO};
    border-color: transparent;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
`

export const StyleBrand = styled(Navbar.Brand)`
    background-color: ${COLORES.BLANCO};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    font-weight: 700;
    margin-left: 20px;
    margin-right: 0px;
`

export const StyleNavLink = styled(Nav.Link)`
    color: ${COLORES.BLANCO} !important;
    font-weight: 500;
    padding: 20px !important;
    > svg {
        font-size: 20px;
        margin-right: 10px;
    }
    &:hover{
        background-color: ${COLORES.VERDEACTIVO};
    }
`

export const StyleInfoBar = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: ${COLORES.SUCCESS};
    font-size: 12px;
`

export const StyleInfoEstado = styled(Col)`
    color: ${COLORES.BLANCO};
    font-weight: 500;
`

export const StyleInfoNumero = styled(Col)`
    color: ${COLORES.BLANCO};
    text-align: right;
    font-weight: 500;
`
export const StyleContenPage = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
`

export const StylesTitulo = styled.h1`
    color: ${COLORES.TITULOS};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: ${props => props.MBottom ? props.MBottom : 0 }px;
`

export const StylesTituloCajaInfo = styled.p`
    color: ${COLORES.TITULOS};
    font-weight: bold;
    font-size: 14px;
    margin-bottom: ${props => props.MBottom ? props.MBottom : 0 }px;
`

export const StylesTexto = styled.p`
    color: ${COLORES.TEXTO};
    font-size: 14px;
    margin-bottom: 0px;
`

export const StylesCajaInfo = styled.div`
    background-color: ${COLORES.BLANCO};
    padding: 15px;
`

export const StylesTable = styled(Table)`
    border-collapse: separate;
    border-spacing: 3px 3px;
    > thead > tr > th {
        border-width: 0;
        box-shadow: none;
        background-color: ${COLORES.BLANCO};
        color: ${COLORES.TITULOS};
        font-size: 14px;
        padding: 10px 15px;
    }
    > tbody > tr > td {
        color: ${COLORES.TEXTO};
        font-size: 14px;
        box-shadow: none;
        border: 0px;
        padding: 10px 15px;
    }
    > tbody > tr:nth-child(even) {
        background-color: ${COLORES.GRIS};
    }
    > tbody > tr:nth-child(odd) {
        background-color: ${COLORES.BLANCO};
    }
`
export const StylesTableTRCenter = styled.td`
    text-align: center;
`

export const StylesBtnVerde = styled(Button)`
    background-color: ${COLORES.VERDE};
    color: ${COLORES.BLANCO};
    border-color: ${COLORES.VERDE};
    font-weight: bold;
    font-size: 14px;
    padding-left: 20px;
    padding-right: 20px;
    &:hover{
        background-color: ${COLORES.VERDEACTIVO};
        border-color: ${COLORES.VERDEACTIVO  };
    }
    &.block{
        width: 100%;
        display: block;
    }
`