import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom';

export default function ContainerCuentasItem({ account }) {
    const { name, accountid, numberid, current, id } = account
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false)
        }, 1000)
    }, [])

    const numberFormat = new Intl.NumberFormat('co-CO');
    
    return (
        <Col xs={12} md={6} className='mx-auto'>
            <Card className='my-2'>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col xs={12} md={9}>
                                {isLoading &&
                                    <Placeholder as={Card.Text} animation="glow">
                                        <Placeholder xs={4} /> <Placeholder xs={4} />
                                        <Placeholder xs={4} /> <Placeholder xs={4} />
                                        <Placeholder xs={4} /> <Placeholder xs={4} />
                                        <Placeholder xs={4} /> <Placeholder xs={4} />
                                    </Placeholder>
                                }
                                {!isLoading &&
                                    <>
                                        <p className='my-0'><b>Cuenta:</b> {accountid}</p>
                                        <p className='my-0'><b>Titular:</b> {name}</p>
                                        <p className='my-0'><b>Documento:</b> {numberid} </p>
                                        <p className='my-0'><b>Saldo:</b> $ {numberFormat.format(current)} </p>
                                    </>
                                }


                            </Col>
                            <Col xs={12} md={3}>
                                {isLoading &&
                                    <>
                                        <Placeholder.Button className='btn m-1 w-100' variant="success" xs={6} />
                                        <Placeholder.Button className='btn m-1 w-100' variant="danger" xs={6} />
                                    </>
                                }
                                {!isLoading &&
                                    <>
                                    <Link to={`/accion/${numberid}/1`}  className='btn m-1 w-100 btn-success'>Consignar</Link>
                                    <Link to={`/accion/${numberid}/2`} className='btn m-1 w-100 btn-danger'>Retirar</Link>
                                    </>
                                }
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
