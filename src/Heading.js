import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

export default function Heading() {
    return (
        <>
            <Navbar bg="danger" data-bs-theme="dark">
                <Container style={{ display: 'flex', flexDirection: "row-reverse" }}>
                    <Navbar.Brand href="#home">Train Department</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link> <Link style={{ color: 'white', textDecoration: "none" }} to='/'>Home</Link></Nav.Link>
                        <Nav.Link> <Link style={{ color: 'white', textDecoration: "none" }} to='/aboutus-train'>About us</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
