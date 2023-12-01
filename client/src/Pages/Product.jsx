import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';

const ProductPage = () => {
    // Dummy product data
    const products = [
        {
            id: 1,
            name: 'Product 1',
            category: 'Electronics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: '$19.99',
            image: 'https://via.placeholder.com/150', // Add the actual image URL
        },
        {
            id: 2,
            name: 'Product 2',
            category: 'Clothing',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '$29.99',
            image: 'https://via.placeholder.com/150', // Add the actual image URL
        },
        {
            id: 3,
            name: 'Product 3',
            category: 'Home and Living',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            price: '$39.99',
            image: 'https://via.placeholder.com/150', // Add the actual image URL
        },
        // Add more products with different categories
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <Container>
            <h2 className="mt-4 mb-4">Our Products</h2>
            <Form className="mb-4">
                <Form.Group controlId="categorySelect">
                    <Form.Label>Filter by Category:</Form.Label>
                    <Form.Control as="select" onChange={handleCategoryChange} value={selectedCategory}>
                        <option value="All">All Categories</option>
                        {/* Add unique categories dynamically */}
                        {Array.from(new Set(products.map((product) => product.category))).map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>
            <Row>
                {filteredProducts.map((product) => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <Card.Text className="font-weight-bold">{product.price}</Card.Text>
                                <Card.Text>Category: {product.category}</Card.Text>
                                <Button variant="primary">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductPage;
