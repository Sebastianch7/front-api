import React from 'react';
import Menu from '../Components/Menu/Menu';
import ContainerCuentas from '../Components/ContainerCuentas/ContainerCuentas';
import BuscarAccount from '../Components/BuscarAccount/BuscarAccount';
function Dashboard(props) {
    return (
        <div>
            <Menu></Menu>
            <ContainerCuentas />
        </div>
    );
}

export default Dashboard;