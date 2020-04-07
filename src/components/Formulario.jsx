import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from "../helper";
import PropTypes from "prop-types";

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 0.5px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 0.5rem;
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
`;

const Formulario = ({ setResumen, setSpinner }) => {

    // State para formulario
    const [datos, setDatos] = useState({
            marca: '',
            year: '',
            plan: ''
    });

    // State para el error
    const [error, setError] = useState(false);

    // Extraer valores del state
    const { marca, year, plan } = datos;

    // Obtener valores de los campos
    const obtenerValores = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    // Enviar valores
    const enviarValores = e => {
        e.preventDefault();
        if(marca.trim()==="" || year.trim()==="" || plan.trim()===""){
            setError(true);
            setResumen({});
            return;
        }
        setError(false);

        const diferencia = obtenerDiferenciaYear(parseInt(year));

        let resultado = 2000;
        resultado -= ((diferencia*0.03)*resultado);
        resultado *= calcularMarca(marca);
        resultado *= obtenerPlan(plan);

        setSpinner(true);

        setTimeout(() => {
            setResumen({
                datos,
                cotizacion: Number(resultado.toFixed(2))
            });
            setSpinner(false);
        }, 2000)
    }

    return (
        <form
            onSubmit={enviarValores}
        >
            {error
                ? <Campo><Error>Todos los campos son obligatorios</Error></Campo>
                : null
            }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerValores}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europero</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerValores}
                >    
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerValores}
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerValores}
                />Completo
            </Campo>

            <Button type="submit">Cotizar</Button>

        </form>
    );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setSpinner: PropTypes.func.isRequired
}
 
export default Formulario;
