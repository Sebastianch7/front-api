import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function MessageToast({title, message, alert = 'success'}) {
    const [position, setPosition] = useState('bottom-center');
    const [show, setShow] = useState(true);
    const [typeAlert, setTypeAlert] = useState(alert)

    return (
        <ToastContainer position={position} className='mb-5'>
            <Toast bg={typeAlert} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{title}</strong>
                    <small className="text-muted">Ahora mismo</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default MessageToast;