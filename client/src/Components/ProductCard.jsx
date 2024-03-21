import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

export default function ProductCard({
    product =
    {
        _id: "demoID",
        name: "Demo Product",
        price: 100,
        image: "https://via.placeholder.com/150",
        category: {
            _id: "6568ed0216fff846495d6caa",
            name: "Demo Category",
        },
        quantity: 100,
        createdAt: "2023-11-30T20:21:17.141Z",
        updatedAt: "2023-11-30T20:21:17.141Z",
        __v: 0,
    }
}) {
    const addToCart = () => {
        const alreadyProducts = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedProducts = [...alreadyProducts, product];
        localStorage.setItem("cart", JSON.stringify(updatedProducts));
    }




    return (
        <Col key={product._id || product.id} md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text className="font-weight-bold">Rs.{product.price}</Card.Text>
                    <Card.Text>Category: {product.category.name}</Card.Text>
                    <Button variant="primary" onClick={addToCart} >Buy Now</Button>
                    <Button variant="primary m-2" href={`/products/${product._id}`}>View More</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
