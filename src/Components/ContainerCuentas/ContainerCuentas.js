import React, { useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useEffect } from 'react'
import axios from 'axios'
import ContainerCuentasItem from '../ContainerCuentasItem/ContainerCuentasItem'
import FormularioCreate from '../Formulario/FormularioCreate'
import ItemLoading from '../Utils/ItemLoading'
import TitlePage from '../Utils/TitlePage'
import BuscarAccount from '../BuscarAccount/BuscarAccount'

export default function ContainerCuentas() {
    const [isLoading, setIsLoading] = useState(false);
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        setIsLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch("http://127.0.0.1:8000/api/account", requestOptions)
            .then(response => response.json())
            .then(result => {
                setAccounts(result) 
                setIsLoading(false)
            })
    }, [])


    return (
        <Container>
            <TitlePage title={'Cuentas activas'} />
            <BuscarAccount></BuscarAccount>
            <Row>
                {isLoading && <ItemLoading />}
                {(accounts.length) ? accounts.map((account, i) =>  <ContainerCuentasItem key={i} account={account} /> ) : <FormularioCreate />}
            </Row>
        </Container>
    )
}
