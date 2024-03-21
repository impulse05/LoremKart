import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useEffect, useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../Pages/auth';

export default function NavBar({ loading = false, user = false, setLoading }) {
    const navigate = useNavigate();


    return (

        <Navbar expand="lg" className="bg-light">
            <Container fluid>
                <Navbar.Brand href="#">Lorem Kart</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link ><NavLink to="/">Home</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/products">Products</NavLink></Nav.Link>
                        {user?.role == 'admin' && <Nav.Link ><NavLink to="/admin" >Admin</NavLink></Nav.Link>}
                        <Nav.Link ><NavLink to="/myprofile" >My Profile</NavLink></Nav.Link>

                    </Nav>

                    {!user && <Button variant=" m-2 bg-primary" onClick={() => navigate("/login")}>Login</Button>}
                    {!user && <Button variant=" m-2 bg-primary" onClick={() => navigate("/signup")} >Signup</Button>}
                    {user && <Button variant=" m-2 bg-primary" onClick={() => {
                        logout()
                        setLoading(!loading);
                    }} >Logout</Button>}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
