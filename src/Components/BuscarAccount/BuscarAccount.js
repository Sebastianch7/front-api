import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ContainerCuentasItem from '../ContainerCuentasItem/ContainerCuentasItem';

function BuscarAccount(props) {
    const [accountSeacrh, setAccountSeacrh] = useState('')
    const [account, setAccount] = useState([])
    const [isLoading, setIsLoading] = useState(false);


    const BuscarAccount = () => {
        setIsLoading(false)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(`http://127.0.0.1:8000/api/account/${accountSeacrh}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setAccount(result)
                setIsLoading(false)
                setIsLoading(true)
            })
    }

    return (
        <>
        <Container>
            <Row>
                <Col xs={12} md={3} className='offset-md-9'>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Nombre o documento"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={accountSeacrh}
                            onChange={({ target: { value } }) => { setAccountSeacrh(value) }}
                        />
                        <Button
                            onClick={BuscarAccount}
                            variant="outline-secondary">
                            Consultar
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        {isLoading && <Container>
            <ContainerCuentasItem key={'0'} account={account} />
            <hr></hr>
        </Container>}
        </>
    );
}

export default BuscarAccount;