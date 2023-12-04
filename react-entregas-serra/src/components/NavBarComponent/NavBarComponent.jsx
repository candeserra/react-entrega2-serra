import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

function ColorSchemesExample() {

    const containerStyle = {
        margin: 0,
        padding: 0,
    };

return (
<>

<br />

<div style={containerStyle}>
    

    <Navbar bg="light" data-bs-theme="light" style={{ margin: 0, width: '100%'}}>

    <Navbar.Brand href="#home" style={{ marginLeft: '20px' }}>Cafecito</Navbar.Brand>

    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#cafe">Café</Nav.Link>
        <Nav.Link href="#accesorios">Accesorios</Nav.Link>
    </Nav>

    <div style={{ marginRight: '30px' }}>
        <CartWidget />0
    </div>
    </Navbar>

    </div>
    
</>
);
}

export default ColorSchemesExample;
