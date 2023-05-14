import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
function TitlePage({ title }) {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='mt-2'>{title}</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default TitlePage;