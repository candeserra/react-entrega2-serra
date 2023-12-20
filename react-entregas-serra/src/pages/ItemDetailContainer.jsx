import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useGetProductById } from '../hooks/useProducts';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {

    const { productId } = useParams ()

    const {productData} = useGetProductById(productId)

    return (
        <Card key={productData.id} style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
        <Card.Body>
            <Card.Title>{productData.title}</Card.Title>
            <Card.Text>{productData.price}</Card.Text>
            <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card>
    );

};

export default ItemDetailContainer;