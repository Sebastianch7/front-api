import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Card, Container, Toast } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import MessageToast from '../Utils/MessageToast';
import { useParams } from 'react-router-dom';
import ItemLoading from '../Utils/ItemLoading';
import { Placeholder } from 'react-bootstrap';

function FormularioAccion({ accion }) {
    const [isLoading, setLoading] = useState(true)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isError, setIsError] = useState(false)
    const [account, setAccount] = useState([])
    const [consign, setConsign] = useState('')
    const { id, type } = useParams();

    const numberFormat = new Intl.NumberFormat('co-CO');

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const getInfoAccount = async () => {
            const result = fetch(`http://127.0.0.1:8000/api/account/${id}`, requestOptions)
                .then(response => response.json())
                .then(result => setAccount(result))
                .catch(error => console.log('error', error));
        }
        getInfoAccount();
    }, [])

    const handleFormAccion = (e) => {
        e.preventDefault()
        setLoading(true)
        setIsUpdate(false)
        setIsError(false)
        let newCurrent = 0;
        if (type == 1) {
            newCurrent = parseInt(account.current) + parseInt(consign)
        }
        else {
            newCurrent = parseInt(account.current) - parseInt(consign)
            if (newCurrent < 0) {
                setTimeout(() => {
                    setConsign('')
                    setIsUpdate(false)
                    setLoading(false)
                    setIsError(true)
                }, 3000)
                return false;
            }
        }

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": "string",
            "numberid": 0,
            "accountid": 0,
            "current": newCurrent
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://127.0.0.1:8000/api/account/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setTimeout(() => {
                    setAccount(result)
                    setConsign('')
                    setIsUpdate(true)
                    setLoading(false)
                }, 3000)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className='mx-auto'>
                        {isUpdate && <MessageToast title={type == 1 ? 'Consignación' : 'Retiro'} alert="success" message={`Acción realizada con exito.`} />}
                        {isError && <MessageToast title={'Retiro'} alert="danger" message={`El monto a retirar supera el saldo actual.`} />}
                        <Card className='my-2 p-2'>
                            <Card.Body>
                                <Card.Text>
                                    {!isLoading &&
                                        <>
                                            <Form onSubmit={handleFormAccion}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Consignar a:</Form.Label>
                                                    <Form.Control type="text" value={account.name} readOnly disabled />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Documento de identidad</Form.Label>
                                                    <Form.Control type="text" value={account.numberid} readOnly disabled />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Saldo actual</Form.Label>
                                                    <Form.Control type="text" value={numberFormat.format(account.current)} readOnly disabled />
                                                </Form.Group>
                                                <hr />
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Valor a {type == 1 ? 'consignar' : 'retirar'} (${numberFormat.format(consign)})</Form.Label>
                                                    <Form.Control type="number" value={(consign)} onChange={({ target: { value } }) => { setConsign(value) }} disabled={isLoading ? true : false} />
                                                </Form.Group>
                                                <Button
                                                    variant="success"
                                                    disabled={isLoading}
                                                    type="submit"
                                                    className={consign < 1000 && 'disabled btn-dark'}
                                                >
                                                    {isLoading ? 'Enviando información...' : `Generar ${type == 1 ? 'consignación' : 'retiro'}`}
                                                </Button>
                                            </Form>
                                        </>}

                                    {isLoading &&
                                        <>
                                            <Form>
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <hr />
                                                <Placeholder as="p" animation="glow">
                                                    <Placeholder xs={12} />
                                                </Placeholder>
                                                <Placeholder.Button xs={4} aria-hidden="true" variant="dark" />
                                            </Form>
                                        </>
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >

        </>
    );
}

export default FormularioAccion;