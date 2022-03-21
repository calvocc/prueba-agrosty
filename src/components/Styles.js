import styled from 'styled-components';
import {Navbar, Nav, Button, Col} from "react-bootstrap";

import * as COLORES from '../constans/Colores';


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

export const StylesTitulo = styled.h1`
    color: ${COLORES.VERDE};
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 20px;
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