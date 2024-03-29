import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Login } from './auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ loading = false, setLoading, user = false }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        Login(email, password).then(() => {
            setEmail('')
            setPassword('')
            setLoading(!loading);
        })
        console.log('Login clicked');
    };
    if (user) {
        setTimeout(() => {
            navigate("/")
        }, 2000);
        return "You are alread logined";

    }


    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h2 className="mb-4">Login</h2>
                    <Form onSubmit={handleLogin}>
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
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
