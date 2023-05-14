import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';

function ItemLoading(props) {
    return (
        <Row>
            <Col xs={12} className='text-center'>
                <Spinner animation="grow" variant="dark" className='mx-2'/>
            </Col>
        </Row>
    );
}

export default ItemLoading;