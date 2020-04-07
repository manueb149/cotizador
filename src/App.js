import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner"

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  // Guardar resumen de valores seleccionados
  const [resumen, setResumen] = useState({});

  const [spinner, setSpinner] = useState(false);

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setSpinner={setSpinner} />
        <Spinner spinner={spinner} />
        <Resumen resumen={resumen} />
        <Resultado resumen={resumen} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
