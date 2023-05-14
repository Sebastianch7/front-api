import React from 'react';
import Menu from '../Components/Menu/Menu';
import FormularioCreate from '../Components/Formulario/FormularioCreate';
import TitlePage from '../Components/Utils/TitlePage';
function Create(props) {
    return (
        <div>
            <Menu></Menu>
            <TitlePage title={'Registrar cuenta bancaria'} />
            <FormularioCreate></FormularioCreate>
        </div>
    );
}

export default Create;