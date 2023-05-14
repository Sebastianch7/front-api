import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Card, Container, Toast } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import MessageToast from '../Utils/MessageToast';

function FormularioCreate(props) {
    const [name, setName] = useState('')
    const [numberid, setNumerid] = useState('')
    const [current, setCurrent] = useState(10000)
    const [isCreated, setIsCreated] = useState(0)
    const [isLoading, setLoading] = useState(false);

    
    const handleFormCreate = (e) => {
        e.preventDefault()
        setIsCreated(0)
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        
        const accountNumbers = Math.random().toString().split(".")
        
        var raw = JSON.stringify({
            "name": name,
            "numberid": numberid,
            "accountid": accountNumbers[1],
            "current": current
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/account", requestOptions)
            .then(response => {
                setTimeout(() => {
                    setIsCreated(response.status)
                    setName('')
                    setNumerid('')
                    setCurrent(10000)
                    setLoading(false)
                }, 1000)
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className='mx-auto'>
                        {isCreated == 201 && <MessageToast title={'Registro exito'} alert="success" message={'La cuenta se ha creado con exito!'} />}
                        {isCreated == 206  && <MessageToast title={'Registro no exitoso'} alert="danger" message={'El cliente ya tiene una cuenta asignada.'} />}
                        <Card className='my-2 p-2'>
                            <Card.Body>
                                <Card.Text>
                                    <Form onSubmit={handleFormCreate}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Documento de identidad</Form.Label>
                                            <Form.Control type="number" placeholder="Documento de identidad" value={numberid} onChange={({ target: { value } }) => setNumerid(value)} required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Nombre del titular</Form.Label>
                                            <Form.Control type="text" placeholder="Nombre del titular" disabled={numberid.length < 6 ? true : false} value={name} onChange={({ target: { value } }) => setName(value)} required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Valor inicial (min: $10.000)</Form.Label>
                                            <Form.Control type="number" value={current} onChange={({ target: { value } }) => setCurrent(value)} disabled={(name.length < 6) ? true : false} required />
                                        </Form.Group>
                                        <Button
                                            variant="success"
                                            disabled={isLoading}
                                            type="submit"
                                            className={(!name.length || !numberid.length || current < 10000) ? 'disabled btn-dark' : null}
                                        >
                                            {isLoading ? 'Enviando información...' : 'Crear cuenta'}
                                        </Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default FormularioCreate;