import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';
import PropTypes from 'prop-types';


const ResumenContenedor = styled.div`
    padding: 1rem;
    text-align: left;
    background-color: #00838F;
    color: #FFFFFF;
    margin-top: 1rem;
`;


const Resumen = ({resumen}) => {

    if(!resumen.datos){
        return null;
    }

    const {marca, year, plan} = resumen.datos;

    return (
        <ResumenContenedor>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año de cotizacion: {year}</li>
            </ul>
        </ResumenContenedor>
    );
}

Resumen.propTypes = {
    resumen: PropTypes.object.isRequired
}
 
export default Resumen;