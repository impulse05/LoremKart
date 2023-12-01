import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Register clicked');
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h2 className="mb-4">Register</h2>
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterPage;
