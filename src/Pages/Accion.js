import React from 'react';
import Menu from '../Components/Menu/Menu';
import TitlePage from '../Components/Utils/TitlePage';
import { useParams } from 'react-router-dom';
import FormularioAccion from '../Components/Formulario/FormularioAccion';
function Accion(props) {
    const { id, type } = useParams();
    return (
        <div>
            <Menu></Menu>
            <TitlePage title={`Realizar ${type == 1 ? 'consignación' : 'retiro'} de cuenta bancaria`} />
            <FormularioAccion />
        </div>
    );
}

export default Accion;