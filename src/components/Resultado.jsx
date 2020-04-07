import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    background-color: #26C6DA;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: white;
`;
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: 1rem;
    border: 1px solid #26D6DA;
    background-color: #26C6DB;
    margin-top: 1rem;
    position: relative;
    text-align: center;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
`;


const Resultado = ({resumen}) => {

    const { cotizacion } = resumen;

    if(!cotizacion) return(
        <Mensaje>
            Elija una marca, modelo y año.
        </Mensaje>
    );

    return (
        <ResultadoCotizacion>
            <TransitionGroup
                component="span"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{enter: 500, exit: 500}}
                >
                    <p><span>Resultado: ${cotizacion}</span></p>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
    );
}

Resultado.propTypes = {
    resumen: PropTypes.object.isRequired
}
 
export default Resultado;