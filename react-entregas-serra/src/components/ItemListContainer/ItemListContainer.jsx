import React from "react";
import './ItemListContainer.css';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const ItemListContainer = ({productsData}) => {

    return (
        <div className="card-container">
            {productsData.map((products) => (
                <Card key={products.id} style={{ width: '18rem', margin: '10px' }}>
                    <Link to={`/item/${products.id}`}><Card.Img variant="top" src={products.thumbnail}/></Link>
                    <Card.Body>
                        <Card.Title>{products.title}</Card.Title>
                        <Card.Text>{products.price}</Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ItemListContainer