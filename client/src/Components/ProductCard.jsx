import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

export default function ProductCard({ product =
    {
        _id: "6568eebd4504d126f0622e17",
        name: "Book",
        price: 100,
        image: "https://via.placeholder.com/150",
        category: {
            _id: "6568ed0216fff846495d6caa",
            name: "Education",
        },
        quantity: 100,
        createdAt: "2023-11-30T20:21:17.141Z",
        updatedAt: "2023-11-30T20:21:17.141Z",
        __v: 0,
    },
}) {
    return (
        <Col key={product.id} md={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" alt={product.name} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text className="font-weight-bold">{product.price}</Card.Text>
                    <Card.Text>Category: {product.category.name}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
