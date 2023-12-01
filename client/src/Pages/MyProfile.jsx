import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MyProfile = () => {
    // Dummy data for orders and wishlist
    const [orders, setOrders] = useState([
        { id: 1, productName: 'Product 1', price: '$19.99' },
        { id: 2, productName: 'Product 2', price: '$29.99' },
        // Add more orders as needed
    ]);

    const [wishlist, setWishlist] = useState([
        { id: 1, productName: 'Wishlist Item 1', price: '$49.99' },
        { id: 2, productName: 'Wishlist Item 2', price: '$59.99' },
        // Add more wishlist items as needed
    ]);

    const handleCheckout = () => {
        // Add your checkout logic here
        console.log('Checkout clicked');
    };

    return (
        <Container className="mt-4">
            <h2 className="mb-4">My Profile</h2>

            <section className="orders-section">
                <h3>My Orders</h3>
                <Row>
                    {orders.map((order) => (
                        <Col key={order.id} md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{order.productName}</Card.Title>
                                    <Card.Text className="font-weight-bold">{order.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="wishlist-section mt-4">
                <h3>My Wishlist</h3>
                <Row>
                    {wishlist.map((item) => (
                        <Col key={item.id} md={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{item.productName}</Card.Title>
                                    <Card.Text className="font-weight-bold">{item.price}</Card.Text>
                                    <Button variant="primary">Move to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="checkout-section mt-4">
                <h3>Checkout</h3>
                <Button variant="success" onClick={handleCheckout}>
                    Checkout
                </Button>
            </section>
        </Container>
    );
};

export default MyProfile;
