import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <svg  
            width="64px" 
            height="64px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41442 6H3.75V4.5H6.58558L7.33558 7.5H18.935L17.2321 15.1627L16.5 15.75H8.25L7.51786 15.1627L6.02 8.42233L5.41442 6ZM7.68496 9L8.85163 14.25H15.8984L17.065 9H7.68496ZM10.5 18C10.5 18.8284 9.82843 19.5 9 19.5C8.17157 19.5 7.5 18.8284 7.5 18C7.5 17.1716 8.17157 16.5 9 16.5C9.82843 16.5 10.5 17.1716 10.5 18ZM15 19.5C15.8284 19.5 16.5 18.8284 16.5 18C16.5 17.1716 15.8284 16.5 15 16.5C14.1716 16.5 13.5 17.1716 13.5 18C13.5 18.8284 14.1716 19.5 15 19.5Z" fill="#080341"></path> </g>
    </svg>0
    </div>
    </Navbar>

    </div>
    
</>
);
}

export default ColorSchemesExample;
