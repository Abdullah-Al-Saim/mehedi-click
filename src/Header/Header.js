import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo/logo.png'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/home"><img width="120"
                        height="120" src={logo} alt="" />
                    </Link>

                    <Nav className="me-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/pricing">Pricing</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;